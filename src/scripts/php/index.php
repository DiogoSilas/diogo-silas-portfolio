<!-- 
O problema pode estar relacionado ao fato de que o GitHub Pages não suporta execução de scripts do lado do servidor, incluindo o envio de e-mails através da função mail() do PHP.

O GitHub Pages é um serviço de hospedagem estática, o que significa que ele serve apenas arquivos HTML, CSS, e JavaScript estáticos, sem suporte para processamento de scripts do lado do servidor.
-->
<?php
    $username = addslashes($_POST['username']);
    $email = addslashes($_POST['email']);
    $phone = addslashes($_POST['phone']);
    $message = addslashes($_POST['message']);

    $for = "diogosilascontato@gmail.com";
    $subject = "Entrar em Contato - Diogo Silas (Portfólio)";
    $body = "Nome: ".$username."\n"."E-mail: ".$email."\n"."Telefone: ".$phone."\n"."Mensagem: ".$message."\n";

    $header = "From: diogosilascontato@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($for, $subject, $body, $header)) {
        echo("E-mail enviado com sucesso!");
    } else {
        echo("Houve um erro ao enviar o email");
    }
?>