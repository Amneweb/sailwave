Script que agrega un diamante del color de la flota al lado del puesto.
Se basa en la publicación en la que cada flota está en una columna diferente (x ejemplo para un campeonato de 4 flotas habrá 4 columnas para la regata 1, etc)

El archivo html se usó sólo a los efectos de probar el funcionamiento del script.

Para usar el script, una vez generado el html desde el sailwave, abajo (antes de cerrar el body) se debe agregar el enlace al script. En este caso:

```
<script src="./dom-manipulation.js"></script>

```

Se establecieron colores para 7 flotas (si hubiera más habría que agregar más opciones al array de colores - las opciones deben contener el nombre de un color existente, o el código HEX)
Los colores en el array se corresponden a los siguientes colores de flota, en el orden en que acá se muestran👇

- AMARILLO
- AZUL
- ROJO
- BLANCO
- VERDE
- MARRON
- VIOLETA
