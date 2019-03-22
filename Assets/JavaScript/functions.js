var selectedChar = {};
var selectedEnem = {};
var selectedCard;
var enemiesDefeated = 0;
// put the cards in an array??
var charArray = [
char0 = {
    name:"Otto Von Bismarck",
    hp: 30,
    attack: 3,
    counterAttack: 3,

},
char1 = {
    name: "Klemens Von Metternich",
    hp: 15,
    attack: 5,
    counterAttack: 5,
},
char2 =  {
    name: "Talleyrand",
    hp: 24,
    attack: 4,
    counterAttack: 4,
}
];

var cardArray = [$('#bismarck'), $('#metternich'), $('#talleyrand')];

function infoUpdate() {
    for (i = 0; i < cardArray.length; i++) {
        cardArray[i].find('.name')
        .text(charArray[i].name);
        cardArray[i].find('.hp')
        .text("Tenacity: " + charArray[i].hp);
        cardArray[i].find('.atk')
        .text("Persuasion: " + charArray[i].attack);
    }   
}
function charSelect() {
    if ($(event.target).is('#00-char')) {
        selectedChar = char0;
        console.log(selectedChar);
    } 
    if ($(event.target).is('#01-char')) {
        selectedChar = char1;
        console.log(selectedChar);
    }
    if ($(event.target).is('#02-char')) {
        selectedChar = char2;
        console.log(selectedChar);
    }
    selectedCard = $(event.target).parent().parent();
    charSelectDOMStuff();
    console.log(selectedCard);
}
function enemySelect() { 
    if ($(event.target).is('#00-char')) {
        selectedEnem = char0;
        console.log(selectedEnem);
    } 
    if ($(event.target).is('#01-char')) {
        selectedEnem = char1;
        console.log(selectedEnem);
    }
    if ($(event.target).is('#02-char')) {
        selectedEnem = char2;
        console.log(selectedEnem);
    }
    selectedCard = $(event.target).parent();
    console.log(selectedCard);
    enemySelectDomStuff();
}
function charSelectDOMStuff() {
    
    infoUpdate();
    selectedCard.slideUp(2000);
    $('.char').addClass('enemy').removeClass("char");
    $('#charDisplay').slideDown(2000);
    selectedImg = $(event.target).siblings('.card-img-top').attr('src');
    $('#charDisplayImg').attr("src" , selectedImg);
    $('#charDisplayHP').text(selectedChar.hp);
    $('#charDisplayATK').text(selectedChar.attack);
    


}
function enemySelectDomStuff() {
    // hide all other cards
    selectedCard.addClass("opponent").removeClass("enemy");
    $('.enemy').slideUp(1000);
    // center enemy card
    // done via bootstrap i think
    // create attack button that executes attack function on click
    selectedCard.append("<button id='attack'>Negotiate</button>");
    $('#attack').click(function() {
        attack();
    });
}

function attack() {
     // selectedChar hp decreases by enemy catk
    console.log(selectedEnem.hp);
    selectedEnem.hp = selectedEnem.hp - selectedChar.attack;
    selectedChar.hp = selectedChar.hp - selectedEnem.counterAttack;
   
    // user atk increases
    selectedChar.attack = Math.floor(selectedChar.attack * 1.5);

    // detect if enemy hp = 0, if so execute enemyDefeat function

    infoUpdate();
    // additional info display I can't put in infoUpdate
    $('#charDisplayHP').text(selectedChar.hp);
    $('#charDisplayATK').text(selectedChar.attack);
    if (selectedEnem.hp === 0) {
        enemyDefeat();
    }
    // detect if user hp = 0, if so execute playerDefeat function
    if (selectedChar.hp === 0) {

    }
    
}

function enemyDefeat() {
    // enemiesDefeated var++
    // enemy card no longer displays on screen
    // return to enemy select screen
    // detect if enemies defeated = 5, if so reveal playerVictory elements and hide all else
}