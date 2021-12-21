<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>Prova P2 - ILP540</title>
</head>
<body>
    <div class="dados">
    <?php

    $Identificador = $_POST['Id_cliente'];
    $NomeCliente = $_POST['Nm_cliente'];
    $TelefoneCliente = $_POST['Num_celular_cliente'];
    $EmailCliente = $_POST['Email_cliente'];

           echo "<table>
                    <tr>
                        <td>Identificador:</td>
                        <td> <p> $Identificador </p></td>
                    </tr>

                    <tr>
                        <td>Nome Cliente:</td>
                        <td><p> $NomeCliente </p>
                    </tr>
                    <tr>
                        <td>Telefone:</td>
                        <td><p> $TelefoneCliente </p>
                
                    </tr>
                    <tr> 
                        <td>E-mail Cliente:</td>
                        <td><p> $EmailCliente </p>
                    </tr>
                </table>";      
        ?>
        <br>
        <a href="index.php"> <button>Voltar</button> </a> 
    </div>
</body>
</html>


