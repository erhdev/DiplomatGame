var selectedChar = {};
var selectedEnem = {};
var selectedCard;
// put the cards in an array??
var charArray = [
char0 = {
    name:"The General",
    fullname: "General Bismacht of Hallenland",
    hp: 40,
    attack: 3,
    counterAttack: 4,

},
char1 = {
    name: "The Chancellor",
    fullname: "Chancellor Demena of Carthia",
    hp: 35,
    attack: 4,
    counterAttack: 5,
},
char2 =  {
    name: "The Prince",
    fullname: "His Lordship Prince Henrius of Aquitance",
    hp: 25,
    attack: 6,
    counterAttack: 3,
},
char3 = {
    name: "The Revolutionary",
    fullname: "Comrade Anna of the United Kielchek Republics",
    hp: 30,
    attack: 5,
    counterAttack: 7,
}
];
var enemies = 4;
var cardArray = [$('#general'), $('#chancellor'), $('#prince'), $('#revolutionary')];

function infoUpdate() {
    for (i = 0; i < cardArray.length; i++) {
        cardArray[i].find('.name')
        .text(charArray[i].name);
        cardArray[i].find('.fullname')
        .text(charArray[i].fullname);
        cardArray[i].find('.hp')
        .text("Tenacity: " + charArray[i].hp);
        cardArray[i].find('.atk')
        .text("Persuasion: " + charArray[i].attack);
        cardArray[i].find('.catk')
        .text("Stubborness: " + charArray[i].counterAttack);
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
    if ($(event.target).is('#03-char')) {
        selectedChar = char3;
        console.log(selectedChar);
    }
    enemies--;
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
    selectedCard.fadeOut(1000);
    $('.name').fadeOut(1000);
    $('.fullname').fadeIn(1000);
    $('.atk').fadeOut(1000);
    $('.catk').fadeIn(1000);
    $('.char').addClass('enemy').removeClass("char");
    $('#charDisplay').fadeIn(1000);
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
    selectedChar.attack = Math.floor(selectedChar.attack * 2);

    // detect if enemy hp = 0, if so execute enemyDefeat function

    infoUpdate();
    // additional info display I can't put in infoUpdate
    $('#charDisplayHP').text(selectedChar.hp);
    $('#charDisplayATK').text(selectedChar.attack);
    if (selectedEnem.hp <= 0) {
        enemyDefeat();
    } else if (selectedChar.hp <= 0) {
        playerDefeat();
    }
    
}
function enemyDefeat() {
    $('#attack').remove();
    enemies--;
    // enemy card no longer displays on screen
    selectedCard.fadeOut(2000);
    selectedCard.parent().fadeOut(2000);
    // return to enemy select screen
    $('.enemy').fadeIn(3000);
    // detect if enemies defeated = 5, if so reveal playerVictory elements and hide all else
    if (enemies === 0) {
        playerVictory();
    }
}

function playerDefeat() {
    $('.gameScreen').fadeOut(1000);
    $('#playerDefeat').fadeIn(2000);
    $('#tryAgain').click(function () {
        location.reload();
    });
}

function playerVictory() {
    $('.gameScreen').fadeOut(1000);
    $('#playerVictory').fadeIn(2000);
    $('#playAgain').click(function () {
        location.reload();
    });
}