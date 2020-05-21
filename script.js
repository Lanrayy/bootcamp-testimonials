
let activeCard = 0;
let hiddenCard = 1;
// Displays next Testiimonial
// console.log('Active Card is ' + activeCard);
// console.log('Hidden Card is ' + hiddenCard);

document.getElementById('icon-next').addEventListener('click', nextCard);
document.getElementById('icon-prev').addEventListener('click', nextCard);

function nextCard() {
    document.getElementById('card-' + activeCard).style.display = 'none';
    document.getElementById('card-' + hiddenCard).style.display = 'inherit';
    if (activeCard === 0) {
        activeCard = 1;
        hiddenCard = 0;
    } else {
        activeCard = 0;
        hiddenCard = 1;
    }
    console.log('Button clicked. Active Card is ' + activeCard);
    console.log('Button clicked. Hidden Card is ' + hiddenCard);

};





