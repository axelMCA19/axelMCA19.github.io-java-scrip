//-------------------------que es js------------------------------ 

//una variable
// es un espacio que guardamos en memoria//
//variables 
//tipos de datos : String, (number, boleano)
//los casos especiales de datos undefined, null, nan
//operadores aritmeticos 
//los operadores aritmeticos toman valores numericos (ya sean literales)
//o variables y retornan un valor unico.
//operadores de asignación asigna un valor al operando de la izquierda
//basado en el valor del operando de la derecha

// let nombre = "axel"
// alert(nombre)






//-------------------------ejemplo de operadores de suma---------------------------------- 

//lo mismo es con la resta y lo mismo es con la multiplicación
// //division y el resto, 
// numero = 10
// numero += 5
// document.write(numero)

// mas ejemplos de operadores de asignación
//este es solo para resta

// let numero  = 4 
// numero --;
// resultado = (numero)
// document.write(resultado) 

//existe otros operadores de asignación que son para
//expponecialización




//-------------------------ejemplos de exponencialización----------------------------

// //ejemplo de resto
//  let numero = 10 
//  numero %=6
//  document.write(numero)

//aqui en resto solo dividimos y ponemos en pantalla solo un numero
//entero

//forma correcta de trabajar con los operadores



//------------------------------------------suma----------------------------------------

// numero = 7
// numero2 = 8
// resultado = numero + numero2
// document.write(resultado)

// ejemplo de exponencialización

// numero  = 10
// numero2 = 5
// resultado = numero**2
// alert(resultado)

//de suma 

// numero  = 10
// numero2 = 5
// resultado = numero + numero2
// alert(resultado)

// de división

// numero  = 10
// numero2 = 5
// resultado = numero / numero2
// alert(resultado)



//-----------------------------------------------incremento--------------------------------------------------

// numero  = 10
// numero2 = 5
// numero ++
// resultado = numero
// alert(resultado)



//---------------------------------------------------resto -----------------------------------------

// numero  = 10
// numero2 = 5
// resultado = numero&numero2
// alert(resultado)

//división de resto divide y resta


//--------------------------------------------------sustracción-------------------------------------------------

// numero  = 10
// numero2 = 5
// resultado = numero - numero2
// alert(resultado)

//negación unaria

// numero  = 10
// numero2 = 5
// resultado = -numero
// alert(resultado)






//--------------------------------------------------------------------CONCATENACIÓN-------------------------------------------------

// saludo = "!hola axel¡"
// pregunta = " !como estas¡"
// frase = saludo + pregunta
// document.write(frase)

//nota las cadenas de textos pueden forzar en la sumatoria de 
//de concatenaciones 

// //ejemplo

// numero = 34
// numero1 = 2
// frase = "" + numero + numero1
// document.write(frase)
//aqui mi proceso detexto un string y todo lo convirtio en
//string ya no es suma si no 34 y 2

//una forma correcta de usar concat
// numero1 = "53"
// numero2 = 2
// frase = numero1.concat(numero2)
// document.write(frase)

//para poder usar mi concat se es necesario
//utilizar un parametro como minimo un string

//otra forma de utilizar concatenaciones es de esta forma
//pero solo funciona con baktikc

//NOTA ESTO SIRVE PARA CONJUGAR A UN INICIO DE SECIÓN
//YA SEA HOLA CONCATENADO EL NOMBRE QUE NOS DIO EL USUARIO

// nombre = "axel marcelo"
// frase = `soy ${nombre} y estoy caminando`
// document.write(frase)






//-----------------------------------------------------ESCAPE DE COMILLAS SIMPLES-----------------------------------------------

//EJEMPLO DE ESCAPE DE COMILLAS SIMPLES

// nombre = "axel marcelo"
// frase = `ni nombre es "AXEL" y soy un nose`
// document.write(frase)
//de esta manera inicializamos una oración con comillas unicas
//y las cerramos con comillas unicas
//y asi aprovechamos para resaltar lo que queriamos decir en nuestra 
//sin cambiar el parametro que tenia al inicio de la variable
//es cuestion de ideas









//-------------------------------------------------------OPERADORES INTERMEDIO------------------------------------------

//-----------------------------OPERADORES DE COMPARACIÓN

//Los operadores de comparación comparan dos expresiones y devuelven
//un valor Boolean que representa la relación de sus valores

// //ejemplo de igualdad 

// let numero = 23
// let numero2 = 23
// document.write(numero == numero2)
//aqui preguntamos si numero es igual a numero

//ejemplo de ineigualdad

// let numero = 23
// let numero2 = 13
// document.write(numero != numero2)

//ejemplo de identidad estrictamente igual

//aqui preguntamos si es mismo tipo de dato y ademas el mismo valor
//como 23 es un numero y numero2 es un string nos dira que 
//es false porque no son iguales ===

// let numero = 23
// let numero2 = "23"
// document.write(numero === numero2)

//ejemplo de geather than mayor que

// let numero = 23
// let numero2 = 13
// document.write(numero > numero2)

//otro ejemplo si es mayor o igual 
// let numero = 23
// let numero2 = 13
// document.write(numero >= numero2)

//otro ejemplo de almacenamiento de variables en memoria 
// let numero = 2
// let numero2 = 4
// let resultado = numero > numero2
//  alert(resultado)

//aqui nos botara falso ya que numero 2 no es mayor que numero 4
 //creamos un proceso lo guardamos mostramos solo el proceso 
//que en este caso es resultado







//-------------------------------OPERADORES LOGICOS-----------------------------------------------

//los operadores logicos nos devuelven un resultado a partir de que se cumpla
//(o no) una condición, su resultado es boolean y sus operando
//son valores logicos o asimilables a ellos.

//ejemplo de operadores logicos
// let valor = true
// let valor2 = true 



//------------------------------------AND-----------------------------------
// let resultado = valor && valor2
//aqui hacemos una operación por ejempo true y true es true 
//aqui tambien si decimos false y false es false pero si una es false todo
// es false 




//-----------------------------------OR---------------------------------------

//pero aquicon or sucede todo lo contrario con que hay solo una verdadera
//todo es como vimos en afirmación1 es false pero en afirmacion2 es veradero
//asi que todo nos dio coo resultado verdadero
// let numero = 12
// let numero2 = 24

// afirmacion1 = numero > numero2
// afirmacion2 = numero != numero2
// document.write(afirmacion1 || afirmacion2)



//---------------------------NOT LOGICO NOT (!)lógico-------------------------------------
//es cambiarle el valor de un resultado en su ejecución
//por Ejemplo con solo este signito ! solo funciona con true or false

// let numero = 23
// let numero2 = 12
// afirmacion1 = numero > numero2
// document.write(!afirmacion1)

//Ultimos ejemplos de operadores logicos

// num1 = 23
// num2 = 12
// num3 = 15
// num4 = 17
// num5  = 19
// op = (num1 > num2 && num5 < num1) || (!(num2 === num1) || num3 != num3)

// document.write(op)

//lo que hicimos fue decir num1 > num2 lo que nos da true 
//luego num5 < num1 que fue true 
//num2 es identico num1 lo cual es falso pero lo ! de falso es true
//y num3 es != estrictamente distinto a num3 lo cual es false
//ya por ultimo lo que los divide a las dos es un or
//y los or actuan si cualquiera de los dos es true todo es true solo
//es false si los dos son false



//----------------------------------------------------------CAMEL CASE-------------------------------------------

//camel case es cuando escribimos la primeras letras con
//minuscula y las demas con mayusculas

//DEFINICIÓN 
//USOS 
//EJEMPLOS





//--------------------------------------CONDICIONALES------------------------------------------------

// if (true) {
    // alert("hola")
// estos son algunos de los mas ejemplos que reconocen como condicionales
//pero esto no acaba aqui
//  if (103>2){
//     alert("hola")
//  }

 //como aqui ya estamos viendo los condicionales ya se cumplieron
 //si un numero es mayor a otro se cumple una alerta
 //como resultado un valor bolean 
 //o como comparadores logicos
//OTROS TIPOS DE EJEMPLOS 
// let nombre = "axel marcelo"
// if (nombre = "axel marcelo"){
//     alert ("hola " + nombre)
// }

//no olvidemos que tambien existen otras posiblidades para
//respuestas de si
// let nombre = "axel"
// let apellido = "cartagena"
// if (nombre == "axel" && apellido == "cartagena"){
//     alert("tu nombre es este pelotudo " + nombre)
// }
// else if(nombre == "marcelo") {
//     alert("tu nombre es este " + nombre)
// }
// else {
//     document.write("tu nombre es otro")
// }

//DEFINICIÓN Y USOS
//-IF 
//ELSE IF 
//ELSE













//----------------------------------------HISTORIA DE COFLA Y PRACTICA QUE VEMO HACIENDO-------------------------------------------

//capitulo 1 

// dineroCofla = prompt("cuanto dinero tienes Cofla?")
// dineroRoberto = prompt("cuanto dinero tenes Roberto?")
// dineroPedro = prompt("cuanto dinero tienes pedro")
// dineroCofla = parseInt(dineroCofla)

// if(dineroCofla >= .6 && dineroCofla < 1){
//     alert("Cofla ;comprate el helado de agua")
//     alert ("y te sobran" + (dineroCofla - .6))
// }
// else if (dineroCofla >= 1 && dineroCofla < 1.6){
//     alert("Cofla ;comprate el helado de crema")
//     alert ("y te sobran" + (dineroCofla - 1))
// }
// else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
//     alert("Cofla ;comprate el helado heladix")
//     alert ("y te sobran" + (dineroCofla - 1.6))
// }
// else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
//     alert("Cofla ;comprate el helado de leche ")
//     alert ("y te sobran" + (dineroCofla - 1.7))
// }
// else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
//     alert("Cofla ;comprate el helado de heladovich")
//     alert ("y te sobran" + (dineroCofla - 1.8))
// }
// else if (dineroCofla >=2.9){
//     alert("Cofla ;comprate el helado de confites o el pote de 1/40")
// } else {
//     alert("Cofla ;lo siento pobre de mierda no te alcanza para ningu helado")
// }

// if(dineroRoberto >= .6 && dineroRoberto < 1){
//     alert("Roberto ;comprate el helado de agua")
// }
// else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
//     alert("Roberto ;comprate el helado de crema")
// }
// else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
//     alert("Roberto ;comprate el helado heladix")
// }
// else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
//     alert("Roberto ;comprate el helado de leche ")
// }
// else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
//     alert("Roberto ;comprate el helado de heladovich")
// }
// else if (dineroRoberto >=2.9){
//     alert("Roberto ;comprate el helado de confites o el pote de 1/40")
// } else {
//     alert("Roberto ;lo siento pobre de mierda no te alcanza para ningu helado")
// }

// if(dineroPedro >= .6 && dineroPedro < 1){
//     alert("Pedro ;comprate el helado de agua")
// }
// else if (dineroPedro >= 1 && dineroPedro < 1.6){
//     alert("Pedro ;comprate el helado de crema")
// }
// else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
//     alert("Pedro ;comprate el helado heladix")
// }
// else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
//     alert("Pedro ;comprate el helado de leche ")
// }
// else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
//     alert("Pedro ;comprate el helado de heladovich")
// }
// else if (dineroPedro >=2.9){
//     alert("Pedro ;comprate el helado de confites o el pote de 1/40")
// } else {
//     alert("Pedro ;lo siento pobre de mierda no te alcanza para ningu helado")
// }














//-------------------------------------------------------ARRAYS---------------------------------------------------_

// arrays frutas es un arrays normal que se puede
// lamar mediante su posicion 

// let frutas = ["bananas", "manzana", "mangos", "pera"];
// document.write(frutas [2])



// no olvidar que pc1 es un arrays asociativo
// y aqui en este arrays se puede llamr mediante su nombre


// let pc1 = {
//     nombre: "Paxwel",
//     procesador: "intel i3",
//     ram: "8Gb de ram",
//     espacio: "128GB",
// }
// document.write(pc1["procesador"])

// o tambien se puede hacer esto

// let nombre = pc1["nombre"];
// let procesador = pc1["procesador"]
// let ram = pc1["ram"]
// let espacio = pc1["espacio"]

// frase = `el nombre de mi pc es: <b>${nombre}</b> <br>
//          el procesador de mi pc es: <b>${procesador}</b> <br>
//          el ram de mi pc es: <b>${ram}</b> <br>
//          el espacio de mi pc es: <b>${espacio}</b> <br>`

// document.write(frase)
// nota no olvidar que tabien existen los arrays asociativos



//------------------------------------------------------------BUCLES E ITERACIONES-------------------------------------------------------------

//definicion y usos

//ejemplos de while ()

//ejemplos de while 
 //acomparación de if el while vuelve a preguntar
 //si la afirmación de nuevo es correcta

//ejemplo de if

// let numero = 1

// if (numero < 10) {
//     document.write(numero)
// }

//como vimos en if pregunto y lo mostro en pantalla pero en while
//no es asi ya que si pregunta lo muestra en pantalla 
//vuelve a preguntar

//ejemplo de while

// let numero = 1

// while (numero < 10) {
//     document.write(numero)
// }

//otro ejemplo de while solo con sumar 
//para que la iteración deje de ejecutarse

// let numero = 0

// while (numero < 10) {
//     numero ++;
//     document.write(numero + "<br>")
// }

//---------------------ahora investiguemos sobre la sentencia do while-------------------------------

// let numero = 0;

// do {
//     document.write(numero + "<br>");
//     numero ++;
// }




//--------------------------------------- while (numero <= 9)---------------------------------------------

//el do while primero
/*
lo que hace es primero ejecutarse y luego hace la pregunta
y asi sucecivamente hasta que se cumpla
*/

/*
AHORA VEAMOS SOBRE LA SENTENCIA BREAK 
QUE ES LA SENTENCIA BREAK?
LA SENTENCIA BREAK ES AQUELLA QUE TERMINA UN BUCLE 
*/

//----------------------------------EJEMPLO DE SENYTENCIA BREAK------------------------------------------------

// let numero = 0;

// while (numero < 1000){
//     numero ++;
//     document.write(numero);
//     if (numero == 10 ){
//         break;
//     }
// }

// document.write("fin")

/*
NOTA !! la senytencia while son bucles 
que llegan a ser infinitos
*/

/*
Aqui en break dijimos declaramos una variable
luego creamos un bucle que preguntarasi numero es menor a mil
y como es true lo ejecuta 
y luego pregunta y suma un numero mas 
luego imprime numero hasta mil
pero si !!! numero es igual a 10
le terminamos con un break
y asi es como terminamos el bucle
con ub simple break
*/


/*
AHORA VEREMOS LA SENTENCIA FOR QUE TAMBIEN ES UN BUCLE
*/

// for (let i = 0; i < 6; i++){
//     document.write(i + "<br>")
// }

/*
otro ejemplo de for pereo esta ves en decremento
*/

// for (let i = 6; i >= 0; i--){
//     document.write(i + "<br>")
// }

/*
Otro ejemplo de for pero con break
*/

// for (let i = 0; i < 20; i++){
//     if (i == 12){
//         break;
//     }
//     document.write(i + "<br>")
// }

//nota aqui con el break lo terminamos el bucle
//y pum lo dejamos hast alli



/*
Otro ejemplo de for pero con continue
*/

//Nota aqui salteamos 8 con el continue 
//cuando numero es igual a 8
//salteamos 8 y continuamos con el bucle

// for (let i = 0; i < 15; i++){
//     if (i == 8){
//         continue;
//     }
//     document.write(i + "<br>")
// }


/*
AHORA VEREMOS LO QUE ES LA 
SENTENCIA FOR IN
SENTENCIA FOR OF
*/

/*
---------------------------------------EJEMPLO DE FOR IN------------------------------------------
*/

/*
Nota a comparación de los for comunes 
in es lo que hace es modificar la variable dentro del for
y darles vuelta al bucle.

*/

// let animales = ["perro", "gato", "loro"]

// for (animal in animales){
//     document.write(animales[animal] + "<br>");
// }

/*
Nota aqui en el bucle decimos que damos una vuelta al
bucle y mostramos en pantalla la posicion en la 
que se encuentra
NOTA AMBOS RECORREN EL ARRAYS PERO IN MUESTRA
LA POSICIÓN
*/

/*
Nota pero si queremos motrar el elemento del arrays que 
hay en el bucle simplemente ponemos [animale]
*/

// document.write("<br>");

// for (animal of animales){
//     document.write(animal + "<br>")
// }

/*
en este otro bucle decimos que damos una vuelta al bucle
y mostramos en pantalla el elemento que se encuentra
NOTA AMBPOS RECORREN EL ARRAYS PERO OF GUARDA EN LA VARIABLE
el valor de la posición
*/




/*
---------------------------------------------ahora lo que veremos a continuación será el label---------------------------------
*/

// let array1 = ["maria", "josefa", "roberta"];
// let array2 = ["pedro", "marcelo", array1, "josefina"];

// forAxels:
// for (let array in array2){
//     if (array == 2){
//         for(let array of array1){
//             document.write(array + "<br>");
//             continue forAxels;
//         }
//     } else{
//         document.write(array2[array] + "<br>")
//     }
// }

/*
Aqui lo que hicimos fue crear unos arrays en nuestro editor de codigos
y luego lo que hicimos fue crear un arrays dentro de un arrays
luego lo que hicimos fue crear un for el cual determinados una variable
arrays que tendra el valor del array2
luego dijimos que si arrays == 2 luego lo que hicimos 
fue crear otro bucle dentro del mismo bucle el cual 
nos ordene que 
*/





/*
Siguiente clase funciones 14
--------------------------------------------------FUNCIONES----------------------------------------------------------
*/
/*
las funciones nos solucionan las repeticiones de codigos
solo asignandoles un nombre asi que no olvidar que para eso sirve las 
funciones
*/

// function saludar(){

// respuesta = prompt("hola axel marcelo como estubo tu dia")
// if (respuesta == "bien"){
//     alert("me alegro")
// }else {
//     alert("una pena")
// }
// }

// saludar()
// saludar()

/*
de esta manera podemos guardar un proceso del codigo en una función
para ahorrarnos codigo que es muy importante para minimisar 
nuestro codigo.
AQUI EN ESTE EJEMPLO DE JAVA SCRIP LLAMAMOS A LA FUNCIÓN.
*/




/*
----------------------------------------CLASE DE FUNCIONES DE RETURN------------------------------------
*/

/*
ejemplo de return
*/

// function saludar(){
//     alert("hola")
//     return "hola este es un ejemplo de return"

// }
// let saludo = saludar();
// document.write(saludo)

/*nota aqui creamos una función dentro de la
función creamos una alerta y despues del codigo le 
pusimos un retorno que fue hola este es un ejemplo de return

despues lo que hicimos fue crear una variable que fue saludo
dentro de la variable guardamos la función saludar y despues
la mostramos en pantalla 
con un document.write que despues nos retorna el valor del return
ya que el la función no tiene ni un valor en especifico 
solo tiene un valor que es el del return
con esto estamos mas que claro con el return
*/



/*
AQUI VIENE LA CLASES DE LOS PARAMETROS QUE EXISTEN EN LAS FUNCIONES
Y EMPEZAMOS
*/

//ejemplo 

// let num1 = 2;
// let num2 = 4;
// let res = num1 + num2;
// document.write(res);

//esto en codio de funciones seria de esta forma

// function suma(){
// let num1 = 2;
// let num2 = 4;
// let res = num1 + num2;
// document.write(res);
// document.write("<br>")
// }
// suma()

//pero para intentar cambiar los valores en otras 
//llamadas de funciones tendriamos que cambiar los valores de 
//variables 
//asi como el sgt ejemplo

    // let num3 = 2;
    // let num4 = 5;
    // let res1 = num3 + num4;
    // document.write(res1);
    // document.write("<br>")

 //pero para evitar ese problema llamamos a los parametros
 //de esta forma

// function suma (num1,num2){
//     let res = num1 + num2;
//     document.write(res);
//     document.write("<br>")
// }

// suma(12,13)
// suma(34,23)

//de esta manera con los parametros podemos definir el valor de
//la variable que esta dentro de la función
//asi llamando a cada función no por retorno si no por valores 
// y de esta manera nos ahorrramos mas recursos de nuestro codigo
//con esto ya lo tenemos mas claro lo de las funciones y sus parametros

//otro ejemplo de funciones con parametros

// function suma(num1, num2){
//     let res = num1 + num2;
//     return res;
// }

// let resultado = suma(20,23);
// document.write(resultado)











//----------------------------otro ejemplo mas especifico en que lo podemos utilizar las funciones---------------------------

// let nombre = prompt("cual es tu nombre")

// function saludar(nombre){
//     let frase = `¡hola ${nombre} !¿como estas?`
//     document.write(frase)
// }

// saludar(nombre)


// otra forma de crear funciones es con funciones flechas de esta forma

// let nombre = prompt("cual es tu nombre")
// let saludar = (nombre)=>{
//     let frase = `¡hola ${nombre} !¿como estas? bienvenido`
//     document.write(frase)
// }
// saludar(nombre)


//ejemplo de lo que hemos avanzado hasta el momento 
//sin lugar a duda sera lo mejor que haremos hasta el momento 
//porque ya dominamos todo lo que nos proponemos
//sera algo mejor por que quiero hacer de una ves

//dejar pasar a los mayores de edad

// let time = prompt("¿que hora tienes?")
// let free = false
// const validarCliente = (time)=> {
//     let edad = prompt("¿cual es tu edad?");
//     if (edad > 18){
//         if(time >= 2 && time < 7 && free == false){
//             alert("podes pasar gratis porque sos la primer persona despues de las 2 de las mañana");
//             free == true
//         }else {
//             alert(`son las ${time}:00Hr, y podes pasar pero tenes que pagar la entrada`)
//         }
//     }else {
//         alert("mira sos menor de edad asi que no podes pasar")
//     }
// }

// validarCliente(time)
// validarCliente(time)
// validarCliente(time)

//segundo ejemplo de de el primer nivel de java scrip 
//ejemplo de arrays asociativos

// let cantidad = prompt("¿cuantos alumnos son?");
// let alumnosTotales = [];

// for(i = 0; i < cantidad; i++){
//     alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)),0];

// }

// const tomarLista = (nombre,p)=>{
//     let presencia = prompt(nombre);
//     if (presencia)
// }

/*
OTRO EJEMPLO DE DE JAVA SCRIP QUE ESTAREMOS HACIENDO PARA EL DIA DE HOY
*/












/*
--------------------------PRACTICA DE JAVA SCRIP COFLA-----------------------------------
*/

/*
en este ejemplo lo que haremos es crear una calculadora que nos ayude
sumar a restar a multiplicar y a dividir
*/
//con exito hemos creado esta calculadora 

// const sumar = (num1,num2)=>{
//     return parseInt(num1) + parseInt(num2);
// }
// const restar = (num1,num2)=>{
//     return parseInt(num1) - parseInt(num2);
// }
// const multiplicar = (num1,num2)=>{
//     return parseInt(num1) * parseInt(num2);
// }
// const dividir = (num1,num2)=>{
//     return parseInt(num1) / parseInt(num2);
// }

// alert("¿que operacion deseas realizar?");
// let operacion = prompt("1: suma, 2: resta, 3: multiplicar, 4 :dividir");

// if (operacion == 1){
//     let numero1 = prompt("primer numero para sumar");
//     let numero2 = prompt("segundo numero para sumar");
//     let resultado = sumar(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 2){
//     let numero1 = prompt("primer numero para restar");
//     let numero2 = prompt("segundo numero para restar");
//     let resultado = restar(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 3){
//     let numero1 = prompt("primer numero para multiplicar");
//     let numero2 = prompt("segundo numero para multiplicar");
//     let resultado = multiplicar(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 4){
//     let numero1 = prompt("primer numero para dividir");
//     let numero2 = prompt("segundo numero para dividir");
//     let resultado = dividir(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else {
//     alert("no se ha encontrado el dato")
// }

















/*
----------------------------Programación orientaa a objetos-------------------------------------
*/

//15 POO

// - definicion y usos
// -ejemplos 
// -instanciación

//ejemplo de programacion horientada a objetos

// este sera nuestro primer ejemplo de progrmación orientada a objetos
//y sera para resolver problemas de una mejor forma
//para crear objetos los objetos son creados por objetos
// class animal{
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.información = `Soy ${this.especie}, tengo ${this.edad} años, soy de color ${this.color}`
//     }
// };

// let perro = new animal("perro",6,"blanco");
// let pajaro = new animal("pajaro",5,"verde");
// let gato = new animal("gato",9,"marron");

//ahora veremos lo que son los metodos en las clases ya que tenemos en
//claro lo que es 
// document.write(gato.información + "<br>");
// document.write(perro.información + "<br>");
// document.write(pajaro.información + "<br>");

//Ahora es posible crear un poco de programación orientada a objetos
//nos funciona para crear objeto de en especifico
// y ademas tiene un muchas mas caracteristicas y quye ademas tienen las cualidades de un objeto


// class animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }

// let perro = new animal("perro",6,"blanco");
// let gato = new animal("gato",3,"gris");
// let pajaro = new animal("pajaro",1,"white");

// perro.verInfo();
// gato.verInfo();
// pajaro.verInfo();











//tambien existen la programción orientada a objetos los metodos que sirven mucho para facilitar
//el trabajo de las funciones que nos ayude a mejorar nuestro codigo de manera que se comporten
//de manera que los metodos cambien a la impresion de documentos y que nos faciliten los metodos que nos dan en las clases
//pero que al final los metodos nos ayuden a mejorar un codigo de manera que sea mas optimo

// de esta manera hemos creao nuestros metodos que nos yudaran para en un futuro crear nuestros
//futuros metodos y de esta manera poder crear nuestros metodos de una manera efectiva y poder

//aqui explicare un poco de como es que funciona los metodos en las clases y sobre como lo podemos invocar a nuestros metodos de un metodo
// que podamos explicar que nuestros metodos sea mas efectivo 
//lo que hicimos fue crear una clase cualquiera para luego crear un metodo que fue el ver info 
//para luego crear verInfo(){}
// el cual fue crear una impresion de documento llamamos al objeto que aniteriormente hemos 
//modificado y aumentamos un br en el codigo para botar todo lo que venga mas abajo para luego
// que cuando lo llamemos al metodo por el el this lo que nos venga sea llamar al metodo 
// con la variable que decidimos escribir para asi de esa manera poder manipular los datops que de esta 
//forma nuestros datos esten de una forma mas auto didacta 
// lo que nuestro codigo necesita es un poco mas d elogica que nuestro sistema este en un nivel de mejor posicion
//pero de esta manera lo que hacemos es mejorar nuestro codigo y poder mejorar nuestro codigo que de esta manera 
// este de unamanera que no este  de manera que la mayoria de las formas que sobre esvcribamos esten de una anera que no nos afecten de manera que con la logica podamos entender mejor
// lo que no pude explicar en este paso fue que cuando creamos nuestras variables 
//lo que hacemos es crear  3 tipos de datos para que el lenguaje
// los identifique y de esta manera los adjunte y los identifique como un objeto y de esta manera se sienta
// identificadoy asi de esta manera cuando llamamos al metodo verInfo()
//lo que haga este metodo es adjuntarse a una variable que anteriormente ya esta adjudicada






//abstracción
//modularidad
//encapsulamiento
//polimorfismo




//-------------------------------------------HERENCIA--------------------------------------------

// class animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
//     ladrar(){
//         if (this.especie == "perro"){
//             document.write("!guau¡ <br>");
//         }else {
//             document.write("no puede ladrar ya que es un " + this.especie + "<br>")
//         }
//     }
// }

// let perro = new animal("perro",6,"blanco");
// let gato = new animal("gato",3,"gris");
// let pajaro = new animal("pajaro",1,"white");

// perro.ladrar();
// gato.ladrar();
// pajaro.ladrar();

//de esta manera creamos polimorfismo pero para rear bucles de accesos mas rapidos que de la manera tradicional





//-------------------------------------HERENCIA ------------------------------------------------------------
// class Animal {
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }

// class Perro extends Animal {
//     constructor(especie,edad,color,raza){
//         super(especie,edad,color);
//         this.raza = raza;
//     }
//     ladrar(){
//         alert("¡waw!")
//     }
// }

// let perroo = new Perro("perro",6,"blanco","rokwiler");
// let gato = new Animal("gato",3,"gris");
// let pajaro = new Animal("pajaro",1,"white");

// perroo.ladrar();
// gato.ladrar();
// pajaro.ladrar();








//-----------------------------------------------METODOS ESTATICOS----------------------------------------

//----------------------------------------METODOS ACCESORES (gett,setters)-----------------------------------

//la diferencia entre gets y sett 
//es q8ue los sets pueden modificar un vqlor mientras que los gets retoran un valor predterminado por nostros

//OTRA PRACTICA DE LOS QUE HEMOS ESTADO PONIENDO EN PRACTICA







//------------------------------------------------CON PROBLEMAS DE COFLA------------------------------------------

// class Celular {

//     constructor(color,peso,rdp,rdc,ram){
//         this.color = color;
//         this.peso = peso;
//         this.ResolucionDePantalla = rdp;
//         this.ResolucionDeCamara = rdc;
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }

//     presionarBotonEncendido(){
//         if (this.encendido == false){
//             alert("celular encendido");
//             this.encendido = true;
//         }else{
//             alert("celular apagado");
//             this.encendido = false;
//         }
//     }

//     reiniciar(){
//         if (this.encendido == true) {
//             alert("reiniciando celular");
//         } else {
//             alert("el celular esta apagado");
        
//         }
//     }

//     tomarFoto(){
//         alert(`foto tomada en una resolución de: ${this.ResolucionDeCamara}`)
//     }

//     grabarVideo(){
//         alert(`grabando video en ${this.ResolucionDeCamara}`)
//     }

//     mobileInfo(){
//         return `
//         color: <b>${this.color}</b> </br>
//         pesos: <b>${this.peso}</b> </br>
//         tamaño: <b>${this.ResolucionDePantalla}</b> </br>
//         resolución de video: <b>${this.ResolucionDeCamara}</b> </br>
//         memoria ram: <b>${this.memoriaRam}</b> </br>
//         `
//     }
// }

// const celular1 = new Celular("rojo","150g","5p","hd", "1gb");
// const celular2 = new Celular("verde","155g","5p","full hd","2gb");
// const celular3 = new Celular("negro","158g","5p","full hd","2gb");

// document.write(`
// ${celular1.mobileInfo()} <br>
// ${celuar2.mobileInfo() } <br>
// ${celular3.mobileInfo()} <br>
//                              `);










// class Celular {

//     constructor(color,peso,rdp,rdc,ram){
//         this.color = color;
//         this.peso = peso;
//         this.ResolucionDePantalla = rdp;
//         this.ResolucionDeCamara = rdc;
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }

//     presionarBotonEncendido(){
//         if (this.encendido == false){
//             alert("celular encendido");
//             this.encendido = true;
//         }else{
//             alert("celular apagado");
//             this.encendido = false;
//         }
//     }

//     reiniciar(){
//         if (this.encendido == true) {
//             alert("reiniciando celular");
//         } else {
//             alert("el celular esta apagado");
//         }
//     }

//     tomarFoto(){
//         alert(`foto tomada en una resolución de: ${this.ResolucionDeCamara}`)
//     }

//     grabarVideo(){
//         alert(`grabando video en ${this.ResolucionDeCamara}`)
//     }

//     mobileInfo(){
//         return `
//         color: <b>${this.color}</b> </br>
//         pesos: <b>${this.peso}</b> </br>
//         tamaño: <b>${this.ResolucionDePantalla}</b> </br>
//         resolución de video: <b>${this.ResolucionDeCamara}</b> </br>
//         memoria ram: <b>${this.memoriaRam}</b> </br>
//         `
//     }

// }

// class CelularAltaGama extends Celular{
//     constructor(color,peso,rdp,rdc,ram,rdce){
//         super(color,peso,rdp,rdc,ram);
//         this.resoluciónDeCamaraExtra = rdce;
//     }
//     gabrarVideo (){
//         alert("estas grabando en camfra lenta");
//     }
//     reconocimientoFacial(){
//         alert("vamos a iniciar un reconocimiento facial")
//     }
//     infoAltaGama(){
//         return this.mobileInfo() + `resolucion de camara extra: ${this.resoluciónDeCamaraExtra}`
//     }
// }

// celular1 = new Celular("rojo","150g","5p","hd", "1gb");
// celular2 = new Celular("verde","155g","5p","full hd","2gb");
// celular3 = new Celular("negro","158g","5p","full hd","2gb");

// celular1.presionarBotonEncendido()
// celualar1.tomarFotos()
// celular1.grabarVideos()
// celular1.reiniciar()
// celualar1.presionarBotonEncendido()

///---------------------------------------------------

// celular1 = new CelularAltaGama("rojo","130g", "5,2","4k", "3GB", "full hd")
// celular2 = new CelularAltaGama("negro","130g", "5,2","4k", "4GB","hd")

// document.write(`
// ${celular1.infoAltaGama()} <br><br>
// ${celular2.infoAltaGama() } <br>
//                              `);










// nota aqui en este cidigo nuca debemos de olvidar que los errores se cometen en dia a dia
// y que si no funciona el codigo hay que intentar eh intentar una y otra ves
// en este codigo quer escribimo el error estaba en una letra que pusimos 
// en celular 2 que no lahabiamos definido y que de este modo nos generaba un error que de manera que no se miraba
// en el codigo fuente pero que de esta manera sabiendo mencionar que lo que escribimos de manera que nos salga mal 
// en este ejemplo nos pedia un sistema que a base de POO 
//hagamos un sistema que permita mostrar los precios de los productos y que tambien
// muestre las caracteristicas especificas de los celukares

// de esta manera creamos el sistema que nos permite darle ayuda a cofla el viejo amigo


//ahora que ya creamos un sistema de celulares de alta gama utilizando los metodos
//extends y para esto es que nos sirvio crear el metodo de celulares de alta gama
//que luego se extienda a celulares que herede algunos elemento de esta classes 
// y que modifique algunos metodos que luego lo mostramos en pantallla
// ahora si podemos decir que estamos llevando aotro nivel de parendisaje de js
// qiue luego es para que estemos de forma mas educada en nuestro nivel de js

//ahora hay que hacer otra practica de la situacion de cofla donde nos indique
//la cantidad de descarga y la puntuación ahora pongamos a la practica todo lo que hemos visto hasta hoy dia







// class app {
//     constructor(descargas,puntuación,peso){
//         this.descargas = descargas;
//         this.puntuación = puntuación;
//         this.peso = peso;
//         this.instalada = false;
//         this.iniciada = false;
//     }
   
//     instalar (){
//         if(this.instalada == false){
//           this.instalada == true;
//           if (this.instalada == true)
//             alert("app instalada correctamente")
//         }
//     }
//     desinstalar (){
//         if(this.instalada == true){
//           this.instalada == false
//             alert("app desinstalada correctamente")
//         }
//     } 
//     abrir (){
//         if (this.iniciada == false && this.instalada == true){
//             this.iniciada == true;
//             alert("app iniciada");
//         }
//     }
//     cerrar (){
//         if (this.iniciada = true && this.instalada == true){
//             this.iniciada == false;
//             alert("app cerrada");
//         }
//     }
//     appInfo(){
//         return`
//         descargas:<b>${this.descargas}</b></br>
//         descargas:<b>${this.puntuación}</b></br>
//         descargas:<b>${this.peso}</b></br>
//         `
//     }
// }

// app = new App1("16.000", "5 estrellas", "900mb");
// app = new App2("16.000", "5 estrellas", "900mb");
// app= new App3("16.000", "5 estrellas", "900mb");
// app = new App4("16.000", "5 estrellas", "900mb");
// app = new App5("16.000", "5 estrellas", "900mb");
// app = new App6("16.000", "5 estrellas", "900mb");
// app = new App7("16.000", "5 estrellas", "900mb");

// document.write(
//     `
//     ${app.appInfo()}<br>
//     ${app2.appInfo()}<br>
//     ${app3.appInfo()}<br>
//     ${app4.appInfo()}<br>
//     ${app5.appInfo()}<br>
//     ${app6.appInfo()}<br>
//     ${app7.appInfo()}<br>
//     `
// )

// app.instalar()
// app.desinstalar()
// app.abrir()
// app.cerrar()

// class App {
//     constructor(descargas,puntuacion,peso){
//         this.descargas = descargas;
//         this.puntuacion = puntuacion;
//         this.peso = peso;
//         this.instalada = false;
//         this.iniciada = false;
//     }
// mobileInfo(){
//     return`
//     descargas: <b>${this.descargas}<b> <br>
//     puntuacion: <b>${this.puntuacion}<b> <br>
//     peso: <b>${this.peso}<b> <br>
//     `
// }
// }

// app = new App("15","3 estrellas","35mb")
// app2 = new App("15","3 estrellas","35mb")
// app3 = new App("15","3 estrellas","35mb")
// app4 = new App("15","3 estrellas","35mb")
// app5 = new App("15","3 estrellas","35mb")

// document.write(`
//   ${app.mobileInfo()} <br>
//   ${app2.mobileInfo()} <br>
//   ${app3.mobileInfo()} <br>
//   ${app4.mobileInfo()} <br>
//   ${app5.mobileInfo()} <br>

//    `)

   // de esta manera ya creamos nuestro segundo programa que esta echo con metodos y un clase con objetos



// class mobile {
//     constructor(encender,apagar){
//         this.encender = encender;
//         this.apagar = apagar;
//         this.instalar = false;
//         this.deinstalar = false;
//     }
//     instalada(){
//         if(this.instalar == false){
//             alert("app instalada correctamente")
//         }
//     }
//     Deinstalar(){
//         if(this.deinstalar == false){
//             alert("app desinstalada correctamente")
//         }
//     }

// }

// mobile.instalada()
// mobile.Deinstalar()



























//seguiremos con el capitulo de java scrip
// este capitulo que culmino fue el 13








// ------------------------------------------------ahora veremos los metodos de cadenas-----------------------------------


//------------------------------------------------concat---------------------------------------------

// let cadena = "cadena de prueba";
// let cadena2 = " cadena 2"
// resultado = cadena.concat(cadena2)
// document.write(resultado)






//-------------------------------------------------starsWith-----------------------------------------------------------

// let cadena = "cadena de prueba";
// let cadena2 = "cadena "
// resultado = cadena.startsWith(cadena2)
// document.write(resultado)



//-------------------------------------------------endsWith -----------------------------------------------------------

// let cadena = "cadena de prueba";
// let cadena2 = "a"
// resultado = cadena.endsWith(cadena2)
// document.write(resultado)

// ahora ya nos vamos dando cuenta que en los metodos de cadena
// starsWith decimos si es cierto que una palabra empieza con algo o no
// devuelven valores booleans
// con endsWith decimos si termina con el final

// ahora tambien esta el metodo de cadena de 
// includes

// let cadena = "sigo axel en facebook";
// let cadena2 = "e"
// resultado = cadena.includes(cadena2);

// document.write(resultado)

//como ya vimos el metodo de cadena escoje a todo lo que este contenido
//en el que esta comparando con el concat con este metodo 
//nos ayuda a buscar ya sea en el principio o en el final










//--------------------------------------------------indexoff--------------------------------------

// la diferencia con este es que devuelve un valor numerico como indice
// de donde comienza una letra de una cadena de texto

// let cadena = "sigo axel en facebook";
// let cadena2 = ""
// resultado = cadena.indexOf("facebook");

// document.write(resultado)

//con esto nos damos cuenta que indexof esta muestra la posicion en la que se
//encuentra la posicion de facebook como pudimos corroborar facebook se encuentra
//en la posicion 13 con la primera letra 
// de esta manera podemos crear los indicadores de la pagina de donde se encuentrta 
//un objeto

//pero ahora si queremos hacer lo mismo pero que tome el ultimo valor que encuentre 
//de esta manera existe este metodo de cadena que es el metodo de lastIndexOf

// let cadena = "sigo axel en facebook facebook facebook";
// let cadena2 = ""
// resultado = cadena.lastIndexOf("facebook");

// document.write(cadena[0] + cadena[1] + cadena[2])

//de esta manera podemos crear con lastIndexOf para encontrar el ultimo sque sea identico
// nota no olvidar que tambien podemos concatenar no olvidar que de todo se puede hacer 








// --------------------------------------------------------padStart()----------------------------------------------------

//lo que hace padStart es rellenar lo que falta pero al principio

// let cadena = "123";
// let cadena2 = ""
// resultado = cadena.padStart(13,"@gmail.com");

// document.write(resultado)






//--------------------------------------------------------padEnd()-----------------------------------------------------------
// lo que hace es rellenar lo que falta pero al final de lo que deseamos escribir

// let cadena = "123";
// let cadena2 = ""
// resultado = cadena.padEnd(13,"@gmail.com");

// document.write(resultado)






//-----------------------------------------------------------repeat()---------------------------------------------------------

// let cadena = "hola ";
// let cadena2 = ""
// resultado = cadena.repeat(13);

// document.write(resultado)

//ahora miraremos paras que nos puede servir split
// let cadena = "hola mundo que tal todo";
// let cadena2 = ""
// resultado = cadena.split(" ");

// document.write(resultado[2])

// de esta manera hemos creamos un arrays con split par que nos pueda separar 
//todo de manera que podamos seleccionar los elementos que queremos usar
// se pude separa tambien con espacios y tambien con letras






//------------------------------------------------------------subString------------------------------------------------------

// let cadena = "abcdefghijkl";
// resultado = cadena.substring(0,3);

// document.write(resultado)

//como ya vimos substring crea un nuevo modelo de arrays que esta 
//redefiniendo los valores de orden del arrays que queremos modificar
//nos muestra la que arranca pero no lo que termina 
// de esta manera podemos crear un inicio que nos los muestrra 
// pero no muestra el valor con el que termina







//-----------------------------------------------------------------toLowerCase()-------------------------------------

// let cadena = "ABCDEFGHIJKLMÑOPQRSTUVWXYZ";
// resultado = cadena.toLowerCase();

// document.write(resultado)
//con este metodo de cadena convertimos de mayuscula a minusculas




//tambien esta el toUpperCase()
//convierte de minuscula a mayusculas

// let cadena = "axel es el mejor de todos ";
// resultado = cadena.toUpperCase();

// document.write(resultado)









//----------------------------------------------toString()--------------------------------------------------------

//convierte un numero a cadena de texto
// let cadena = 50;
// resultado = cadena.toString();

// document.write(2 + cadena)
//como ya pudimos observar esto convierte de numero a cadena de texto
//si no nos podemos ubicar digamos 2 y 2 es igual 22
//mientras que 2 + 2 = 4 esa es la diferencia entre convertir toString








// -----------------------------------------------length----------------------------------------------------------

// let cadena = "   axel   ";
//  let resultado = cadena.trim();

//  document.write(resultado.length)

//con trim() podemos hacer que solo lea los acracteres que escribimos y no
//asi los caracteres con espacios
// para no estra escribiendo de nuevo cod
//explicaremos para que sirve trimStar quita espacio del principio
// trimEnd quita los espacios del final

//y tambien aprendimos para que sirve la propiedad length que sirve para 
//mostrar cuantos caracteres hay en nuestra cadena de texto








//---------------------------------------------metodos de arrays--------------------------------------------------------

// ahora veremos un metodo de arrays
//  let nombre = ["axel","ario","jose"];
//  document.write(nombre + "<br>")
//  let resultado = nombre.pop();
//  document.write(resultado + "<br>");
//  document.write(nombre)

//  ahora ya vimos que pop elimina el ultimo elemnto de nuestro arrays
// y luego lo muestra en pantalla





// ---------------------------------------------shift()----------------------------------------
// como vimos elimina el primero y luego lo muestra en pantalla

// let nombre = ["axel","ario","jose"];
// document.write("Arrays original: <b>" + nombre + "<b><br>")
// let resultado = nombre.shift();
// document.write("Elemento removido: <b style= >" + resultado + "<b><br>");
// document.write("resultado: <b>" + nombre + "</b>")









//--------------------------------push------------------------------------------------

// let nombre = ["axel","ario","yuler","xd"]

// document.write(nombre + "<br>");

// let resultado = nombre.push("jose");

// document.write(nombre)

// ahora ya vimos lo que puede llegar a hacer push 
// que puede llegara  agregar elementos al final de la lista 
// en este ejemplo tenemos un arrays inicial 
// luego lo mostramos en pantalla
// luego le agregamos un nuevo elemento al arrays y luego
// lo kostramos en pantallas
// con el arrays modificado





//------------------------------------------------------reverse------------------------------------------------------
 
// let nombre = [1,2,3,4,5,6,7]

// document.write(nombre + "<br>");

// let resultado = nombre.reverse();

// document.write(resultado)

// como pudimos observar reverse lo rivierte el orden de los arryas


//--------------------------------------------------------sort()-------------------------------------------------------

// let numeros = [1,5,3,2,1,6,7,9,4];
// document.write(numeros + "<br>");

// numeros.sort()

// document.write(numeros)

// ahora como vimos sort los ordena los numeros de orden alfabetico 
// o ya sea de mayor a menor como diccionario









//--------------------------------------------------------splice()---------------------------------------------------

// let numeros = ["axel", "bar", "xd", 3, "de todo", "man"];
// document.write(numeros + "<br>");

// numeros.splice(1,2, "axel", "dedo")

// document.write(numeros)

// ahora uya entendimos que splice elimina los elemento de un arrays
// de esta manera entendimos lo que puede llegar a hacer

// tambien podemos llegar agregar mas elementos a este arryas

//no debemos olvidar que splice hace dos tipos de trabajo
//arranca elimina, agrega












//------------------------------------------------------ METODOS ACCESESORES-----------------------------------------

// ---------------------------------------------------------join()---------------------------------------------

// let numeros = ["abecedario", "manzana", "axel", "marcelo"];
// document.write(numeros + "<br>");

// let resultado = numeros.join(" <br> elemeto:");

// document.write("elemento:" + resultado)

// join sirve para separar cosas o elementos





// -----------------------------------------------------------slice()-------------------------------------------------

// let numeros = ["abecedario", "manzana", "axel", "marcelo"];
// document.write(numeros + "<br>");

// let resultado = numeros.slice(0,3);

// document.write( resultado)

// ahora para dejar de seleccionar los ultimos simplementes no seleccionamos
// -1 o -2 para no mostrar los ultimos















// ------------------------------------------------filter()-----------------------------------------------
// iteraciones

// let numeros = ["abecedario", "manzana", "axel", "marcelo"];

// numeros.filter(numero => document.write(numero + "<br>"))

// ahora un ejemplo mas claro de filter

// let numero = ["abecedario", "manzana", "axel", "marcelo"]

// resultado = numero.filter(numero => numero.length > 3);

// document.write(resultado)

// como pudimos observar filter sirve para
// nota no olvidar para que sirve length en los string sirve para determinar cuantas letras tiene 
// mientras que en los arrays sirve para determinar cuantos elementos tienen

//  en este ejemplo pudimos determinar que aqui detrminamos que si tiene mas de 3 letras lo mostramos en 
// en pantalla



// AHORA VEAMOS LO QUE ES UN OBJET MATH-basico

// ---------------------------------------metodos---------------------------------------------------------------

//  ejemplos de math


// ----------------------------------------------sqrt--------------------------------------------------------
// raiz cuadrada
// numero = Math.sqrt(25)
// document.write(numero)

//  --------------------------------------------cbrt-------------------------------------------------
// raiz cubica

// numero = Math.cbrt(27)
// document.write(numero)


// --------------------max---------------------
// devuelve el numero mas grande
// numero = Math.max(25,67,23,1,45,456)
// document.write(numero)



// -------------------min----------------------
// devuelve el numero mas pequeño
// numero = Math.min(25,2,3,4,6,0.1, 4)
// document.write(numero)



// ------------------random---------------------
// numro pseudo aleatorio de 0 a 1
// numero = Math.random()
// document.write(numero)



// ------------------random---------------------
// tambien se puede hacer con numeros deñl 1 al 100
// numero = Math.random()*100;
// numero = numero.toString();
// num = numero[0] + numero[1];
// if(numero[1] == "."){
//     num == numero [0];
// }
// document.write(num)
// en este ejemplo hemos echo un ejemplo
// de los numeros aleatorios que hay en un random
// pero esta no es la mejor manera que hay de redondear un numero 
// almas cercano la mejor manera que hay de redondear un numero es con
// round
// ya que lo que hicimos anteriormente fue para un numero aleatorio a cadena
// de texto y despues que el numero se rendee a un numero entero




// ------------------round----------------------------

// let numero = Math.random()*100;
// numero = Math.round(numero);
// document.write(numero)

// como pudimos observar con Math.round redondeamos el numero aleatorio
//  aun numero entero que mas cercano que encontramos ya que si declaramos
// math.random solo declaramos que muestre un numero aleatorio mas cercano pero 
// con decimales



// ------------------floor---------------------------
// con floor redondeamos al numero que sea menor que el que se desea
//  4.7 = 4 o 4.3 = 4    o   4.9 = 4

// let numero = Math.random()*100;
// numero = Math.floor(4.1);
// document.write(numero);

// de esta manera hemos podido hacer un objeto floor que redondea un numero mas cercano al menor

// otro ejemplo de floor

// for (var i = 0; i < 1000; i++){
//     let numero = Math.random()*99;
//     numero = Math.floor(numero+1);
//     document.write(numero + "<br>")
// }


//------------------------trunc-------------------------------
// trunc lo qu ehace es eliminar los decimales

// let numero = Math.trunc(9.9)
// document.write(numero)






// ------------------------------COFLA------------------------------------


// class Calculadora {
// sumar(num1,num2){
//     return parseInt(num1) + parseInt(num2);
// }
//  restar(num1,num2){
//     return parseInt(num1) - parseInt(num2);
// }
//  multiplicar(num1,num2){
//     return parseInt(num1) * parseInt(num2);
// }
//  dividir(num1,num2){
//     return parseInt(num1) / parseInt(num2);
// }
// potenciar(num,exp){
//     let numero = num;
//     for (var i = 1; i < exp; i++) {
//         numero = numero * num;
//     }
//     return numero;
// }
// raizCuadrada(num){
//     return Math.sqrt(num);
// }
// raizCubica(num){
//     return Math.cbrt(num);
// }

// }

// const calculadora = new Calculadora();
// alert("¿que operacion deseas realizar?");
// let operacion = prompt("1: suma, 2: resta, 3: multiplicar, 4:dividir, 5: potenciación, 6:raiz Cuadrada, 7:raizcubica");

// if (operacion == 1){
//     let numero1 = prompt("primer numero para sumar");
//     let numero2 = prompt("segundo numero para sumar");
//     let resultado = calculadora.sumar(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 2){
//     let numero1 = prompt("primer numero para restar");
//     let numero2 = prompt("segundo numero para restar");
//     let resultado = calculadora.restar(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 3){
//     let numero1 = prompt("primer numero para multiplicar");
//     let numero2 = prompt("segundo numero para multiplicar");
//     let resultado = calculadora.multiplicar(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 4){
//     let numero1 = prompt("primer numero para dividir");
//     let numero2 = prompt("segundo numero para dividir");
//     let resultado = calculadora.dividir(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 5){
//     let numero1 = prompt("primer numero a potenciar");
//     let numero2 = prompt("exponente");
//     let resultado = calculadora.potenciar(numero1,numero2);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 6){
//     let numero1 = prompt("conocer la raiz cuadrada");
//     let resultado = calculadora.raizCuadrada(numero1);
//     alert(`tu resultado es ${resultado}`);
// }
// else if (operacion == 7){
//     let numero1 = prompt("conocer la raiz cubica");
//     let resultado = calculadora.raizCubica(numero1);
//     alert(`tu resultado es ${resultado}`);
// }
// else {
//     alert("no se ha encontrado el dato")
// }

// ahora el otro que va hacer calcular potencias raices cuadradads y cubicas




// --------------------------------cofla-------------------------------

// const obtenerInformacion = (materia)=> {
//    const materias = {
//       fisica: ["cartagena","axel","alex","mrtt","maria"],
//       Programación: ["dimitri","axel","alex","mr tt","maria"],
//       Logica: ["rivas","axel","alex","mrtt","maria"],
//       Quimica: ["male","axel","alex","mrtt","maria"],

//     }
//     if (materias[materia] !== undefined){
//         return [materias[materia],materia,materias];
//     }else{
//         return materias;
//     }
// }

// const mostrarInformacion = (materia)=>{
//     let informacion = obtenerInformacion(materia);

// if(informacion !== false){
//     let profesor = informacion[0][0]
//     let alumnos = informacion[0];
//     alumnos.shift();
//     document.write(`el profesor de  <b>${informacion[1]}</b>: <b style='color:red'>${profesor}</b><br>
//     los alumnos son: <bstyle='color:blue'>${alumnos}</b><br><br>
//     `);
// }
// }

// const cantidadDeClases = (materia)=>{
//     let informacion = obtenerInformacion()
//     let clasesPresentes =[];
//     let cantidadTotal = 0;
//     for (info in informacion) {
//         if(informacion[info].includes(alumnos)){
//             cantidadTotal++;
//             clasesPresentes.push[" " + info]
//         }
//     }
//     return `<b style='color:blue'>${alumno}</b> esta en <b>${cantidadTotal} clases</b><br>
//     Esta cursando las clases: <b>${clasesPresentes}</b> <br>
//     `;
// }
// mostrarInformacion("fisica");
// mostrarInformacion("Programación");
// mostrarInformacion("Logica");
// mostrarInformacion("Quimica");

// document.write(cantidadDeClases("mrtt"))
// document.write(cantidadDeClases("axel"))
// document.write(cantidadDeClases("maria"))
// document.write(cantidadDeClases("male"))

//de esta manera creamos una const que tenia una funtion
// no se donde esta mi error qu esta mal compilando mi codigo pero
// estoy revisando lo mas que puedo para perfeccionarlo





// de esta manera hicimos un sistema que nos muestre 
// la cantidad de estudiantes que estan en una materia
// para luego hacer un array que contenga las materia y los 
// universitarios que esten en ellas
// y despues hicimos otra validacion que sea 
// si un materia no esta nos devolvera un valor la materia no existe
// todo esto creandolo apartir de funcipones






// -------------------------------COFLA---------------------------

// const materias = {
//           fisica: ["cartagena","axel","alex","mrtt","maria"],
//           Programación: ["dimitri","axel","alex","mr tt","maria"],
//           Logica: ["rivas","axel","alex","mrtt","maria"],
//           Quimica: ["male","axel","alex","mrtt","maria"],
    
//         }

// const inscribir = (alumno,materia) => {
//     alumnos = materias[materia]
// } 

// de ets amanera creamos nuestro que esta en nuetro sistema de compilacion de datos
//pero al final estara de manera autonoma que este
// entonces lo sgt que estaremos viendo sera los metodos de cadenas






// LA CONSOLA DE JS
// console



//---------------------------ASSERT ()-------------------------

// es mas que todo para acertar 
//  console.assert(5 < 3)


// ----------------------clear()---------------------

// es mas que todo para limpiar la consola
//  console.clear()

 //----------------------error()-----------------------

// es para tirar un mensaje de error
// console.error("oye que has echo")

// -----------------------table()----------------------
// console.info([2,2,3,34,4,1,2,3,2,2,3,43,3,2,])


// ------------------------dir()------------------------
// console.dir([1,2,3,3,45])

