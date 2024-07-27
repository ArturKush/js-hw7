'use strict'

const friends =['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for (let i = 0; i < friends.length; i++) {
    string += friends[i];
    if (i < friends.length - 1) {
      string += ",";
    }
    console.log(string);  
}

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
 ];

const cardToRemove1 = 'Карточка-3';
const indexToRemove = cards.indexOf(cardToRemove1);
if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
}
console.log(cards);

cards.push('Карточка-6')
console.log(cards);

const cardToUpdate = 'Карточка-4'
const indexToUpdate = cards.indexOf(cardToUpdate)
if(indexToUpdate !== -1) {
    cards[indexToUpdate] = 'оновленно карт-4'
}
console.log(cards);