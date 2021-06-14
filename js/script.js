// Defi JavaScript 14.juin.2021
// 20 exercices basiques pour manipuler le langage javascript

// Exercice 1 : Inverser les valeurs de deux variables
var valeur1 = `Moi, j'était valeur1.`;
var valeur2 = `Moi, j'était valeur2.` ;

[valeur1, valeur2] = [valeur2, valeur1];

console.log('Maintenant, valeur1 dit : '+valeur1);
console.log('Maintenant, valeur2 dit : '+valeur2);

// Exercice 2 : Afficher des variables

var nom = 'Toto' ;
var age = 30 ;
var homme = true ;

console.log(`Nom = ${nom}`);
console.log(`Age = ${age}`);
console.log(`Home = ${homme}`);

// Exercise 3.1 Puissance de 2
var input = document.querySelector('#power2');

const btnPower2 = document.querySelector('#btn-power2');
const resultat = document.querySelector('#showsPower2');

btnPower2.onclick = function () {
	var power2 = parseInt(input.value);
	resultat.textContent = `2 puissance ${power2} est : ${2 ** power2 }` ;
	input.value = "" ;
}

// Exercise 3.2 fonction qui prend deux nombres comme 
//arguments et retourne leur somme.

function addition(a,b) {
	return `L'addition de ${a} plus ${b} est : ${a+b}` ;
}

// Exercise 3.3 fonction qui prend un nombre entier de 
// minutes et le convertit en secondes.

function min2sec(min) {
	return `${min} minute(s) = ${min * 60} secondes`;
}

// Exercise 4 fonction qui prend un nombre en argument, 
// incrémente le nombre +1 et renvoie le résultat.

function increment(a) {
	return a + 1;
}

// Exercise 5 fonction qui prend la base et 
// la hauteur d’un triangle et retourne sa surface. 

function triangle(b,a) {
	return (b * a) / 2 ;
}

// Exercise 6 : inverser une chaîne de caractères.


const btnInverse = document.querySelector('#btn-inverse');
const displayInverse = document.querySelector('#inverse-char');
var inverse = [];

btnInverse.onclick = function (){
	var phrase = document.querySelector('#inverse').value.split('');
	var result = []; 
	let initialLength = phrase.length;
	for (i = 0; i < initialLength ; i++) {
		result.push(phrase.pop()) 
	}
	displayInverse.innerHTML = result.join('') ;
}


// Exercise 7 : trouver le plus grand des trois entiers donnés.

function maximus(a,b,c) {
	return Math.max(a,b,c)
}

// Exercise 8 : fonction qui prend un tableau et renvoie le 
// premier élément.

function firstElement(tableau){
	return tableau[0];
}

// Exercise 9 : récupérer l’URL d’un site Web

var urlRetriever = document.querySelector('#urlRetriever');

urlRetriever.textContent = 'Vous êtes sur le site : ' + window.location.href

// Exercise 10 : renvoyer le reste de deux nombres. Deux nombres 
// sont transmis comme paramètres. Le premier paramètre divisé 
// par le deuxième paramètre.

function resteDiv(dividendo,divisor) {
	return `Le reste de ${dividendo} entre ${divisor} est : ${dividendo % divisor}`
}

// Exercise 11 : Avec deux nombres, retournez TRUE si la somme 
// des deux nombres est inférieure à 100. Sinon, retournez FALSE.

function checkCents(a,b) {
	return (a + b < 100) ;
}

// Exercise 12 : fonction qui convertit les heures en secondes.

function hours2sec(h) {
	return `${h} heure(s) = ${h * 60 * 60} secondes`
}

// Exercise 13 : fonction qui prend un nombre et renvoie TRUE 
// s’il est inférieur ou égal à zéro, sinon retournez FALSE.

function negatives(n) {
	return (n <= 0)
}

// Exercise 14 : fonction qui renvoie TRUE lorsque nbr1 est 
// égal à nbr2; sinon retournez FALSE.

function isEqual(a,b) {
	return (a === b)
}

// Exercise 15 : fonction qui renvoie TRUE si un entier est 
//divisible par 5, sinon retournez FALSE

function multiplesOfFive(n) {
	return ( n % 5 === 0)
}

// Exercise 16 : fonction qui prend deux entiers (heures, minutes) 
// et les convertit en secondes

function hhmm2sec(h,m) {
	return `${h} h  ${m} min = ${h * 3600 + m * 60} s`
}

// Exercise 17 : fonction pour inverser un tableau.

function reverseTab(array) {
	var reverse = new Array;
	var taille = array.length ;
	for (i = 0 ; i <= taille ; i++) {
		reverse.push(array.pop());
	}
	return reverse
}

// Exercise 18 : fonction qui prend un tableau et renvoie 
// le dernier élément du tableau.

function dernierElem(a) {
	return a[a.length - 1]
}

// Exercise 19 : fonction qui vérifier l’égalité de deux 
// paramètres a et b. La valeur et le type de paramètres doivent 
// être testés afin d’avoir une égalité. La fonction doit renvoyer 
// TRUE si les paramètres sont égaux et FALSE s’ils sont différents.

function sameType(a,b) {
	return (a === b)
}

// Exercise 20 : fonction qui renvoie TRUE si une chaîne est 
// vide et sinon renvoie FALSE.

function chaineVide(str) {
	return (str === '')
}























