<?php
// criar variaveis os valores necessarios para aceder a base de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "secureDevDB";

// criar conexao nova, com os valores atribuidos em cima
$conn = new mysqli($servername, $username, $password, $dbname);

// no caso de erro, mostra a razao pela qual a conexao falhou
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// criar uma nova variavel email, que guarda o input do utilizador do popup da Newsletter
$email = $_POST["email"];

// insere o valor da variavel email na tabela "newsletterEmails"
$sql = "INSERT INTO newsletterEmails (email)
VALUES ($email)";

// se executar o comando da variavel $sql com sucesso, retorna TRUE e mostra a mensagem "Added new record."
if ($conn->query($sql) === TRUE) {
    echo "Added new record.";
} else {
// se nao conseguir executar o comando da variavel $sql, retorna FALSE e mostra a mensagem
// "Error -valor da variavel $sql-" e na linha em baixo mostra informacao erro default da conexao.
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// quando tiver corrido tudo, fecha a conexao
$conn->close();
?>