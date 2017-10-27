# Markdown y GitHub
## Práctica 2.2.3.

Ya que la práctica consiste en modificar este fichero utilizando Markdown y tiene que incluir sus concepto básicos, este _readme_ consistirá en cómo se utiliza dicho lenguaje.

Para empezar el ejercicio debe contener:

- Listas
- Enlaces
- Textos en negrita y cursiva
- Code and Syntax Highlighting
- Tablas

Dicho esto, empecemos con el ejercicio.

## Ejercicio 2.2.3 - Markdown ##

Los encabezados se escriben utilizando la almohadilla (#), desde una sola hasta 6

~~~
- #Encabezado con una 1
- ###Encabezado con 3
- ######Encabezado con 6
~~~
El resultado es:

# Encabezado con 1
### Encabezado con 3
###### Encabezado con 6

## Listas
Para crear listas **desordenadas** podemos utilizar asteriscos (\*), guiones (\-) o el símbolo más (\+)
~~~
* Linea 1
- Linea 2
+ Linea 3
~~~
Como vemos el resultado no varía
* Linea 1
- Linea 2
+ Linea 3

También podemos crear listas anidadas a otras _añadiendo **cuatro** espacios_

~~~
* Linea 1
    + Linea 1.1
- Linea 2
    * Linea 2.1
    - Linea 2.2
+ Linea 3
    + Linea 3.1
        - Linea 3.1.1
    * Linea 3.2
~~~

* Linea 1
    + Linea 1.1
- Linea 2
    * Linea 2.1
    - Linea 2.2
+ Linea 3
    + Linea 3.1
        - Linea 3.1.1
    * Linea 3.2

Para terminar con las listas podemos crear listas **ordenadas** (las cuales se pueden anidar a listas desordadas) de la siguiente manera:

~~~
1. Punto 1
2. Punto 2
    - Punto 2.1
3. Punto 3
~~~

1. Punto 1
2. Punto 2
    - Punto 2.1
3. Punto 3

## Enlaces

Se crean escribiendo el texto entre corchetes seguido del enlace o _link_ entre paréntesis
~~~
- [Google](http://www.google.es/)
- [Random](http://www.theuselessweb.com/)
~~~

- [Google](http://www.google.es/)
- [Random](http://www.theuselessweb.com/)

También se pueden asignar palabras clave a una _URL_, de esta manera cada vez que queramos un enlace a dicha web solo tendremos que escribir la palabra clave a la web que deseemos

~~~
Gracias a [google][google] podemos buscar y encontrar muchísima información que antes era realmente difícil de encontrar. Además haciendo click [aqui][google] el navegador nos redirecciona a su web.

Att. [Una frase entera que lleva a google :D][google]

[google]:http://www.google.es/
~~~

Gracias a [google][google] podemos buscar y encontrar muchísima información que antes era realmente difícil de encontrar. Además haciendo click [aqui][google] el navegador nos redirecciona a su web.

Att. [Una frase entera que lleva a google :D][google]

[google]:http://www.google.es/

## Textos en negrita y en cursiva

Para añadir un texto en cursiva simplemente tenemos que rodear la palabra entre asteriscos(\*)/barras bajas(\_), y para ponerla en negrita simplemente habrá que poner dos asteríscos (\*\*)o dos barras bajas (\_\_):
~~~
- *cursiva*
- _cursiva_
- **negrita**
- __negrita__
- ~~tachado~~
~~~

- *cursiva*
- _cursiva_
- **negrita**
- __negrita__
- ~~tachado~~

Además, se pueden combinar para juntar cursiva y negrita:

~~~
- ***cursiva y negrita***
- ___cursiva y negrita___
~~~

- ***cursiva y negrita***
- ___cursiva y negrita___
- ~~**Texto tachado y en negrita**~

## Code and Syntax Highlighting

A lo largo de la práctica he ido escribiendo código que no era afectado por la sintaxis del markdown, para ello  se tiene que añadir "\~\~~" al principio y al final del código que deseemos mostrar

~~~
\~~~
Esto es código :D
\~~~

`
Esto también lo es
`

~~~

La contrabarra (\\) es para que lo trate como texto y no como código. De esta forma también se puede escribir  \*\*código\*\* sin que afecte a la sintaxis

~~~
Esto es código :D
~~~

`
Esto también lo es
`

La diferencia es que si escribimos "\`" HTML lo traduce como `<code>`, y si escribimos \~~~ no. A la hora de crear un documento (como este) no tiene mucha importancia qué etiqueta utilicemos, pero si quieremos crear una página web sí deberíamos tenerlo en cuenta.

##Tablas

Para crear tablas debemos empezar con el carácter "\|" y usarlo como separador. La segunda línea empezará y terminará también con "\|" pero estará ocupada por "\-" para indicar que la primera línea es la cabecera.

~~~~
| Cabecera 1       | Cabecera 2       |
| -------------    | -------------    |
| Contenido celda  | Contenido celda  |
| Contenido celda  | Contenido celda  |
~~~~
Podemos añadir espacios en blanco en la tabla para que sea más legible

| Cabecera 1  | Cabecera 2 |
| ------------- | ------------- |
| Contenido celda  | Contenido celda  |
| Contenido celda  | Contenido celda  |

Podemos añadir negrita, cursiva, enlaces, listas e incluso alinear el texto hacia la izquierda, centro o derecha.

~~~
| Cabecera 1   A LA IZQUIERDA    | Cabecera 2   CENTRO    | Cabecera 3 A LA DERECHA           |
| :---                           |        :---:           |                               ---:|
| \*Contenido*                   | Contenido             | \[Contenido](http://www.google.es) |
| \_\_Contenido                  | Contenido            | Contenido__                         |
~~~

| Cabecera 1   A LA IZQUIERDA    | Cabecera 2   CENTRO    | Cabecera 3 A LA DERECHA          |
| :---                           |        :---:           |                              ---:|
| **Contenido**                  | Contenido              | [Contenido](http://www.google.es)|
| _Contenido_                    | Contenido              | _Contenido_                      |
