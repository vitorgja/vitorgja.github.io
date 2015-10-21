<?php

	/**
	*	@author Vitor Pereira
	*	@contact vitor@vitorpereira.com.br
	*	Dispara um email para o email do Site
	**/

	// ******************************************************************************

	class Enviar {
		private $nome,$email,$assunto,$mensagem, $para,$logo,$url;
		
		/**
		*	Construtor da Classe Enviar / recebe os dados para montar o email
		*	@param String
		*	@param String
		*	@param String
		*	@param String
		*	@param String
		*	@param String
		*	@return void
		**/
		public function __construct($nome,$email,$assunto,$mensagem, $para,$logo){
			$this->nome = $nome;
			$this->email = $email;
			$this->assunto = $assunto;
			$this->mensagem = $mensagem;
			$this->para = $para;
			$this->logo = $logo;
		}
		/**
		*	Remove os caracteres especiais da String
		*	@param	String
		*	@return	String
		*/
		function remover_caracter($string) {
		    $string = preg_replace("/[áàâãä]/", "a", $string);
		    $string = preg_replace("/[ÁÀÂÃÄ]/", "A", $string);
		    $string = preg_replace("/[éèê]/", "e", $string);
		    $string = preg_replace("/[ÉÈÊ]/", "E", $string);
		    $string = preg_replace("/[íì]/", "i", $string);
		    $string = preg_replace("/[ÍÌ]/", "I", $string);
		    $string = preg_replace("/[óòôõö]/", "o", $string);
		    $string = preg_replace("/[ÓÒÔÕÖ]/", "O", $string);
		    $string = preg_replace("/[úùü]/", "u", $string);
		    $string = preg_replace("/[ÚÙÜ]/", "U", $string);
		    $string = preg_replace("/ç/", "c", $string);
		    $string = preg_replace("/Ç/", "C", $string);
		    $string = preg_replace("/[][><}{)(:;,!?*%~^`&#@]/", "", $string);
		    //$string = preg_replace("/ /", "_", $string);
		    return $string;
		}

		/**
		*	Monta a mensagem e a envia para o email
		*	@return void
		**/
		public function enviar(){
			$email = array(
		   		'nome'=>$this->remover_caracter($this->nome),
		  		'email'=>$this->email,
				'assunto'=>$this->remover_caracter($this->assunto),
		  		'texto'=>$this->remover_caracter($this->mensagem)
			);
			if( is_file($this->logo) ){
				$imagem_nome=$this->logo;
				$arquivo=fopen($imagem_nome,'r');
				$contents = fread($arquivo, filesize($imagem_nome));
				$encoded_attach = chunk_split(base64_encode($contents));
				fclose($arquivo);
			}
			$limitador = "_=======". date('YmdHms'). time() . "=======_";

			$mailheaders = "From: ".$email['email']."\r\n";
			$mailheaders .= "MIME-version: 1.0\r\n";
			$mailheaders .= "Content-type: multipart/related; boundary=\"$limitador\"\r\n";
			$cid = date('YmdHms').'.'.time();

			$texto="
				<html>
				<head>
					".header('Content-type: text/html; charset=utf-8')."
				</head>
				<body>
					<img src=\"cid:$cid\">
					<h1>Desenvolvedor avulso para Web</h1>
					<br>
					<p><strong>".$email['nome']."</strong>: Solicitou contato, sobre :<em>".$email['assunto']."</em></p>
					<p>com a seguinte mensagem: <span>".$email['texto']."</span></p>
					<p>email: ".$email['email']."</p>
					<a href='http://". $this->url ."'><font size=3>". $this->url ."</font></a>
				</body>
				</html>
			";

			$msg_body = "--$limitador\r\n";
			$msg_body .= "Content-type: text/html; charset=iso-8859-1\r\n";
			$msg_body .= "$texto";

			$emailPara = explode('@',$this->para)[1];
			return mail($this->para ,"Um novo Cliente Contactou o Site ". $emailPara ,$msg_body, $mailheaders);
		}
	} // Fim CLASSE ENVIAR

	


	require_once "configuracao-enviar.php";
	if($emailPara=="" || $imgLogo="" || $url=""){
		$json = array(
			'tipo'=>'erro-02',
			'mensagem'=>'**** Preencher os Arquivos de Configuração do arquivo <strong>configuracao-enviar.php</strong>, para que o sistema funcione em Perfeitas Condições! ****'
		);
		echo json_encode($json);
	}else 

	// Caso Chegue os Campos Faça
	if(	( isset($_POST['nome']) && $_POST['nome'] != null ) &&
		( isset($_POST['email']) && $_POST['email'] != null ) &&
		( isset($_POST['assunto']) && $_POST['assunto'] != null ) &&
		( isset($_POST['mensagem']) && $_POST['mensagem'] != null ) ){

		$nome 	 = $_POST['nome'];
		$email 	 = $_POST['email'];
		$assunto = $_POST['assunto'];
		$mensagem   = $_POST['mensagem'];

		// Instancia o Objeto Enviar
		$enviar = new Enviar($nome,$email,$assunto,$mensagem, $emailPara,$imgLogo ,$url);

		// Se o metodo enviar tiver Sucesso Faça!
		if( $enviar->enviar() ){
			$json = array(
				'tipo'=>'sucesso',
				'mensagem'=>'Email enviado com Sucesso!'
			);
			echo json_encode($json);

		// Se o metodo enviar não tiver Sucesso Faça!
		}else{
			$json = array(
				'tipo'=>'erro-01',
				'mensagem'=>'Não foi possivel completar o envio Tente novamente'. $_POST['nome'] .'!'
			);
			echo json_encode($json);
		}

	// Caso não Chegue todos os Campos da erro!
	}else{
		$json = array(
			'tipo'=>'erro-02',
			'mensagem'=>'Preencha todos os campos!'
		);
		echo json_encode($json);
	}

?>
