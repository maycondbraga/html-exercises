<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="style.css" />
        <title>Prova P2 - ILP540</title>
    </head>
    <body>
        <div class="form">
            <form action="dados.php" method="POST">
                <table>
                    <tr><th colspan="3">Consultar Cliente</th></tr>
                    <tr>
                        <td>
                            <label for="Id_cliente">Identificador</label> 
                        </td>
                        <td>
                            <input type="number" name="Id_cliente" style="margin-left: 30px">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="Nm_cliente">Nome Cliente</label> 
                        </td>
                        <td>
                            <input type="text" name="Nm_cliente" style="margin-left: 30px">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="Num_celular_cliente">Telefone</label> 
                        </td>
                        <td>
                            <input type="text" name="Num_celular_cliente" placeholder="xx xxxx-xxxx" 
                                pattern="[0-9]{2}\s([9]{1})?([0-9]{4})-([0-9]{4})" 
                                title="Número de telefone precisa ser no formato xx xxxx-xxxx" 
                                required="required" style="margin-left: 30px"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="Email_cliente">E-mail Cliente</label>
                        </td>
                        <td>
                            <input type="email" name="Email_cliente" style="margin-left: 30px">
                        </td>
                    </tr>
                </table>
                <br>
                <input type="submit" name="Enviar" style="margin-left: 120px;">       
            </form>
        </div>
        <script src="main.js"></script>
    </body>
</html>