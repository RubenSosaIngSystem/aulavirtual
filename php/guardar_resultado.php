<?php
$conexion = new mysqli("localhost", "root", "", "aula_invertida");

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

$nombre = $_POST['nombre'];
$clase = $_POST['clase'];
$puntaje = $_POST['puntaje'];

$sql = "INSERT INTO resultados (nombre_completo, clase, puntaje) VALUES (?, ?, ?)";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("ssi", $nombre, $clase, $puntaje);
$stmt->execute();

echo "Resultado guardado";

$stmt->close();
$conexion->close();
?>
