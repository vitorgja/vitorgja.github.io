function submit(){
	// BOTÂO DE ENVIAR
	$("button[data-input=submit], input[data-input=submit],a[data-input=submit]").click(function(){
		var nome = $("input[name='nome']").val();
		var email = $("input[name='email']").val();
		var assunto = $("input[name='assunto'], select[name='assunto']").val();
		var mensagem = $("textarea[name='mensagem']").val();

		$.ajax({
			type: "POST",
			url: "http://sifatec.esy.es/vitorgja.github.io/enviar.php",
			dataType : "json",
			crossDomain: 'true',
			data: {
				nome: nome,
				email: email,
				assunto: assunto,
				mensagem: mensagem
			},
			error: function (jqXHR, textStatus, errorThrown) {
            	console.log(jqXHR)
        	},
			success: function(data){
				if(data.tipo == "sucesso"){	// Enviou
					BootstrapDialog.show({
						title: 'Sucesso',
						type: BootstrapDialog.TYPE_SUCCESS, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
						message: data.mensagem
					});
				} else if(data.tipo == "erro-01"){ // Erro ao enviar
					BootstrapDialog.show({
						title: 'Erro',
						type: BootstrapDialog.TYPE_DANGER, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
						message: data.mensagem
					});
				} else if(data.tipo == "erro-02"){ // Erro nao preencheu todos os campos
					BootstrapDialog.show({
						title: 'Erro',
						type: BootstrapDialog.TYPE_DANGER, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
						message: data.mensagem + '\n' + data.campos
					});
				}
			}

		});
	});
}
