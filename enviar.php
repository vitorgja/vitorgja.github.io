<?php
	class Enviar {
		private $nome,$email,$assunto,$mensagem;
		public function __construct($nome,$email,$assunto,$mensagem){
			$this->nome = $nome;
			$this->email = $email;
			$this->assunto = $assunto;
			$this->mensagem = $mensagem;
		}
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
		public function enviar(){
			$email = array(
		   		'nome'=>$this->remover_caracter($this->nome),
		  		'email'=>$this->email,
				'assunto'=>$this->remover_caracter($this->assunto),
		  		'texto'=>$this->remover_caracter($this->mensagem)
			);
			$imagem_nome="imagem/logo.png";
			$arquivo=fopen($imagem_nome,'r');
			$contents = fread($arquivo, filesize($imagem_nome));
			$encoded_attach = chunk_split(base64_encode($contents));
			fclose($arquivo);
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
					<a href='http://www.vitorpereira.com.br'><font size=3>www.vitorpereira.com.br</font></a>
				</body>
				</html>
			";

			$msg_body = "--$limitador\r\n";
			$msg_body .= "Content-type: text/html; charset=iso-8859-1\r\n";
			$msg_body .= "$texto";
			
			// $msg_body .= "--$limitador\r\n";
			// $msg_body .= "Content-type: image/png; name=\"$imagem_nome\"\r\n";
			// $msg_body .= "Content-Transfer-Encoding: base64\r\n";
			// $msg_body .= "Content-ID: <$cid>\r\n";
			// $msg_body .= "\n$encoded_attach\r\n";
			// $msg_body .= "--$limitador--\r\n";

			return mail("vitor@vitorpereira.com.br","Um novo Cliente Contactou o Site vitorpereira.com.br",$msg_body, $mailheaders);
		}
	}
	// debuug
	// $_POST['nome'] = "aa";
	// $_POST['email'] = "aa";
	// $_POST['assunto'] = "aa";
	// $_POST['mensagem'] = "aa";

	if(	( isset($_POST['nome']) && $_POST['nome'] != null ) &&
		( isset($_POST['email']) && $_POST['email'] != null ) &&
		( isset($_POST['assunto']) && $_POST['assunto'] != null ) &&
		( isset($_POST['mensagem']) && $_POST['mensagem'] != null ) ){

		$nome 	 = $_POST['nome'];
		$email 	 = $_POST['email'];
		$assunto = $_POST['assunto'];
		$mensagem   = $_POST['mensagem'];
		$enviar = new Enviar($nome,$email,$assunto,$mensagem);
		if( $enviar->enviar() ){
			echo "true";
		}else{
			echo "erro-1";
		}

	}else{
		echo "erro-2";
	}
	
?>
