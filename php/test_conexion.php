<?php
$conexion = new mysqli("localhost", "root", "", "aulavirtual");

if ($conexion->connect_error) {
    die("❌ Conexión fallida: " . $conexion->connect_error);
}
echo "✅ Conexión exitosa";
$conexion->close();
?>
