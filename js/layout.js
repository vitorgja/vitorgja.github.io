$(main);
function main(){
	$(".hidden").hide();
	$(".alert-success").hide();
	$(".alert-danger").hide();
	$("#enviar").click(function(){
		var nome = $("#nome").val();
		var email = $("#email").val();
		var assunto = $("#assunto").val();
		var msg = $("#msg").val();

		var limpar = function(){
			$("#nome").val("");
			$("#email").val("");
			$("#assunto").val("");
			$("#msg").val("");
		};
		var limparHide = function(){
			$(".alert-success").hide();
			$(".alert-danger").hide();
		}
		// Validação
		$("#nome").focus(function(){	$("label[for=nome]").html("Nome:");	});
		$("#email").focus(function(){	$("label[for=email]").html("Email:");	});
		$("#assunto").focus(function(){	$("label[for=assunto]").html("Assunto:");	});
		$("#msg").focus(function(){		$("label[for=msg]").html("Mensagem:");	});
		if(nome==""){
			$("label[for=nome]").html('Nome:   <span class="text-red"><small>* Preencha o Campo Nome</small></span>');
		}
		if(email==""){
			$("label[for=email]").html('Email:   <span class="text-red"><small>* Preencha o Campo Email</small></span>');
		}
		if(assunto==""){
			$("label[for=assunto]").html('Assunto:   <span class="text-red"><small>* Preencha o Campo Assunto</small></span>');
		}
		if(msg==""){
			$("label[for=msg]").html('Mensagem:   <span class="text-red"><small>* Preencha o Campo Mensagem</small></span>');
		}

		if((nome!="")&&(email!="")&&(assunto!="")&&(msg!="")){
			$.post("https://vitor-vitorgja.c9.io/portfolio/vitorgja.github.io/enviar.php", {
				nome: nome, 
				email: email, 
				assunto: assunto, 
				mensagem: msg }, function(data){

				if(data=="true"){
					$(".alert-success").html("Mensagem Enviada com sucesso!");
					$(".alert-danger").hide();
					$(".alert-success").show();
					setTimeout(function(){ 
						$(".alert-success").hide();
						$(".alert-danger").hide(); 
					}, 3000);
					limpar();
				}else if(data=="erro-1"){
					$(".alert-danger").html("Erro  no envio da Mensagem!");
					$(".alert-success").hide();
					$(".alert-danger").show();
					setTimeout(function(){ 
						$(".alert-success").hide();
						$(".alert-danger").hide(); 
					}, 3000);
				}else if(data=="erro-2"){
					$(".alert-danger").html("Preencha todos os campos para enviar a Mensagem!");
					$(".alert-success").hide();
					$(".alert-danger").show();
					setTimeout(function(){ 
						$(".alert-success").hide();
						$(".alert-danger").hide(); 
					}, 3000);
				}
			});
		}else{
			$(".alert-danger").html("Preencha todos os campos para enviar a Mensagem!");
			$(".alert-success").hide();
			$(".alert-danger").show();
			setTimeout(function(){ 
				$(".alert-success").hide();
				$(".alert-danger").hide(); 
			}, 3000);
		}
	});
}