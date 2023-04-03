
/*

Selecionando Elementos:

- getElementsById() // Trás apenas um elemento (element)
- getElementsByClassName() // Trás diversos elementos (HTML Collection)
- getElementsByTagName() // Trás diversos elementos (HTML Collection)
- getElementsByName() // Trás os elementos com o nome selecionado (NodeList)

- querySelector // Trás apenas um elemento, o primeiro que encontrar (element)
- querySelectorAll // Trás TODOS os elementos que encontrar (NodeList)

*/

//Selecionando Elementos:
//const element = document.getElementById("main-text")
//const element = document.getElementsByClassName("paragraph")
//const element = document.getElementsByTagName('h1')
/*const element = document.getElementsByName('my-input')
console.log(element)*/

//const element = document.querySelector('p') // para retornar a class tem que colcar o ponto na frente ex: (.paragraph)
/*const element = document.querySelectorAll('p') // O querySelectorAll com o NodeList ele consegue interar 
element.forEach(element =>{
    console.log(element)
});*/


/*const element = document.querySelector('input') // (Selecionando atributos) seleciona sempre pela tag utilizada
console.log(element.value)*/


//Manipulando textos:
//const element = document.querySelector('h1') 
//element.innerText = "Texto Alterado" // chamado a variável ex element.innerText eu posso adicionar textos dentro da tag
//element.textContent = "Texto Alterado" // tem a mesma função do innertext eles só alteram o texto
//element.innerHTML = "Texto Alterado <p>Incluindo um paragrafo</p>" // Além de alterar texo o innerHTML permite que seja adicionado código HTML


/*Manipulando estilos:
const element = document.querySelector('h1')
   element.style.color = "red" // altera a cor do texto que está na tag
*/

/*Eventos:
const element = document.querySelector('button') // pode ser usado no button, também no inpput
   element.onclick = () =>{
       alert ("Fui pressionado")
    }
*/

/*Propriedade eventos:
const element = document.querySelector('button')
element.onclick = (event) =>{
   console.log(event)
}
*/

//Event lisening:
const input = document.querySelector("input")
const select = document.querySelector("select")
const button = document.querySelector("button")

 input.addEventListener('focus' , () => {
    console.log('Dei um foco')
 })    
    
 select.addEventListener('change', () =>{
    console.log(select.value)
 })

 button.addEventListener('click' , () =>{
    alert('O botão foi clicado')
 })
 /*fazer de outra forma:

 const clickButton = () => {
    alert('O botão foi clicado')
    button.addEventListener('click' , clickButton

 })
 */