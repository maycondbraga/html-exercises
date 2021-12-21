<?php

// Importa o outro arquivo para a conexão
include_once 'dbconn.php';

// Pega todas os dados
if(isset($_POST['submit'])) {
	$id = $_POST['id'];
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$gender = $_POST['gender'];

	// Montagem da Query
	$sql = "INSERT INTO NewsletterUsers (id,name,email,phone,gender)
	VALUES ('$id','$name','$email','$phone','$gender')";
	
	// Execução
	if (mysqli_query($conn, $sql)) {
		echo "Usuário adicionado com sucesso!";
	} else {
		echo "Error: " . $sql . ":-" . mysqli_error($conn);
	}
	mysqli_close($conn);
}

?>