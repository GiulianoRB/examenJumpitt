Dashboard Jumpitt Labs
-----------------------

FUNCIONAMIENTO DE LA SOLUCION
===============================
Este sistema contempla un completo dashboard con informaión obtenida desde una API proporcionada por el cliente. contempla una parte de login el cual lleva directo a la seccion de inicio cargando los datos de la persona que ingreso y algunas de las estadisticas. Existen 5 tarjetas que permiten visualizar informacion en graficos, ingresos de mensajes, etc.
===============================

DETALLES TECNICOS DE LA SOLUCION
================================
Esta solucion hubiese sido muy interesante realizarla con arquitectura MVC o MVVM, pero como no existe un backend se utilizaron basicamente conceptos basados en aplicaciones SERVERLESS.
se obtuvieron los datos de la api http://www.mocky.io/v2/5ba409112f00005b00968a9d
los datos fueron consumidos con FETCH y situados en cada uno de los campos indicados en las instrucciones de la solución.
================================

LIBRERIAS UTILIZADAS
====================
Para esta solucion se utilizaron los siguientes frameworks:

frontend: esta aplicacion esta construida con REACT JS y BOOTSTRAP.
Graficos: para graficos se utilizo APEXCHARTS.
API: Para consumir la APi disponibilizada se utilizo FETCH de EcmaScript 6.
Navegacion: se utilizo REACT-ROUTER-DOM para la navegacion entre paginas.
====================