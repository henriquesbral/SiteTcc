$('#').submit(function(){
    var email = $('#email');
    var senha = $('#seatual');
    var novasenha = $('#novasenha');
    var erro = $('.alert');
    var campo = $('#campo-erro')
    
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid')

    //valida o campo email
    if (email.val() == ''){
        erro.removeClass('d-none');
        campo.html('e-mail'); //Nome Do Campo Não Preenchido
        email.focus();
        email.addClass('is-invalid');
        return false;
    }

    //valida o campo senha atual
    if (senha.val() == ''){
        erro.removeClass('d-none');
        campo.html('senha atual'); //Nome Do Campo Não Preenchido
        senha.focus();
        senha.addClass('is-invalid');
        return false;
    }

    //valida o campo nova senha
    if (novasenha.val() == ''){
        erro.removeClass('d-none');
        campo.html('nova senha'); //Nome Do Campo Não Preenchido
        novasenha.focus();
        novasenha.addClass('is-invalid');
        return false;
    }

    //se inserir todos os campos, seguir com a alteração da senha
    return true;
});