# API Sistema de renta de libros - BackEnd

## Descripción
  Desarrollar el backend de una API REST FULL de un sistema de renta de libros conectada a una base de datos PGSQL(postgreSQL) y deployarla en un servicio de nube (heroku, gcp, aws, etc...)

API: https://libraryapipersonal.herokuapp.com/

Ejemplo De Peticiones : --> NAME(tipoDeVariable, requerido)

### __/rentas__
#### POST
Creamos una renta enviando un método post con el siguiente schema en el req.body
* fecha_de_prestamo(date, requerido)
* fecha_de_devolucion(date, requerido)
* titulo_del_libro(string, requerido)
* nombre(string)
* fecha_de_nacimiento(date)
* correo_electronico(string)
* telefono(number)
* direcciones(string)

### __/libros__
#### GET
Conseguimos todos los libros de la base de datos :)
#### POST
Creamos un nuevo libro
* titulo(string, requerido)
* genero(["Aventuras","Ciencia Ficcion","Policiaca","Terror y misterio","Romantica","Humor","Poesia","Mitologia","Teatro","Cuento"])
* mayoridad_de_edad(boolean, requerido)
* portada(string, requerido)
* cantidad(number, requerido)
* autor(string)
* editorial(string)
* fecha_de_impresion(date)
* numero_de_pagina(numero)
* isbn(string)
* idiomas(object --> { string, string } | string)
* tipo(string)
#### PUT
Se revisa el param id (/:id) en la url, el parametro id debe pertenecer a un id de uuid(14 caracteres) y luego se actualiza
 
* titulo(string, requerido)
* genero(string, requerido)
* cantidad(number, requerido)
* portada(string, requerido)
* mayoria_de_edad(boolean, requerido || default)
* tipo(string)
* editorial(string)

#### DELETE
Se elimina el libro al analizar si el id existe en la db