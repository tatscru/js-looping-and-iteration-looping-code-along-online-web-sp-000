// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);


function writeCards(name, event) {
  for (let i = 0; i < name.length; i++) {
    console.log(`Thank you, ${`name`[i]}, for the wonderful ${event} gift`);
  }
  return writeCards(name,gift');
}
