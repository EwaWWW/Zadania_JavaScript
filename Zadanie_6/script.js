/*1. Napisz funkcję, która przyjmuje trzy parametry - (sender, sms, receiver)
a następnie zwraca stringa w następującym formacie:

"(FROM: sender) (TO: receiver) (MESSAGE: sms)"*/

var sender = 'ewa'
var sms =  '   Hello Justyna, I am really tired today, I will call you tommorrow.         ';
var receiver = 'JUSTYNA'

sender = sender.charAt(0).toUpperCase() + sender.substring(1);
sms = sms.trim();
receiver = receiver.charAt(0).toUpperCase() + receiver.substring(1).toLowerCase();

function message (sender, sms, receiver) {
    return '(FROM: '+ sender + ')' + ' (TO: ' + receiver + ' ) (MESSAGE:' + sms + ')';
}

console.log(message(sender, sms, receiver));

/*2. Napisz funkcję, która przyjmuje dwa parametry - firstName oraz lastName,
a następnie zwraca inicjały rozdzielone kropką, zwrócony string powinien składać się z wielkich liter.
Przykładowy wynik dla następujących zmiennych: var firstName = 'john'; var lastName = 'doe'; WYNIK = 'J.D';*/

var firstName = 'ewa';
var lastName = 'węgierska';


function id (firstName, lastName) {
    return firstName.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase();
}

console.log(id(firstName, lastName));

/* 3. Napisz funkcję, która generuje losową liczbę, zaokrągloną do dwóch liczb po przecinku
a następnie zwraca stringa "Twoja szczęśliwa liczba to: TUTAJ_TA_LOSOWA_LICZBA"*/

function luckyNumber() {
    return (Math.random()*100).toFixed(2);
}

console.log('Twoja szczęśliwa liczba to: ' + luckyNumber());

/* 4. Napraw bugi we funkcji oraz popraw formatowanie nazewnictwa. Funkcja powinna zwrocić sumę tip i price

 Function get_dinner_price {
   tip: '20';
   tip + price;
   var price = 100;
 }
get_dinner_price(); // musi zwrócić liczbę o wartości 120 (100 + 20)*/

var tip = 20;
var price = 100;

function get_dinner_price() {
    return tip + price;
}

console.log( get_dinner_price());

function getDinnerPrice() {
    var tip = 20;
    var price = 100;
    return tip + price;
}
console.log(getDinnerPrice());