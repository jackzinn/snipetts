<?php

$arquivo = $_POST["name"].".xlsx";		
			
// Configurações header para forçar o download
header ("Last-Modified: " . gmdate("D,d M YH:i:s") . " GMT");
header ("Cache-Control: no-cache, must-revalidate");
header ("Pragma: no-cache");
header ("Content-type: application/vnd.ms-excel");
header ("Content-Disposition: attachment; filename=\"{$arquivo}\"" );
header ("Content-Description: PHP Generated Data" );
// Envia o conteúdo do arquivo

echo $html = $_POST['XLS']; // passa a string com o HTML aqui

exit;

?>