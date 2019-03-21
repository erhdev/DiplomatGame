var selectedChar = {};
var selectedEnem = {};
var selectedCard;
var selectedImg;

var char1 = {
    name:"Otto Von Bismarck",
    hp: 30,
    attack: 3,
    counterAttack: 3,

};

var char2 = {
    name: "Klemens Von Metternich",
    hp: 15,
    attack: 5,
    counterAttack: 5,
};


function charSelect() {
    if ($(event.target).is('#00-char')) {
        selectedChar = char1;
        console.log(selectedChar);
    } 
    if ($(event.target).is('#01-char')) {
        selectedChar = char2;
        console.log(selectedChar);
    }
    selectedCard = $(event.target).parent().parent();
    charSelectDOMStuff();
    console.log(selectedCard);
}

function charSelectDOMStuff() {
    
    
    selectedCard.fadeOut(2000);
    $('button').removeClass("char").addClass('enemy');
    
    selectedImg = $(event.target).siblings('.card-img-top').attr('src');
    $('#charDisplayImg').attr("src" , selectedImg);
    $('#charDisplayHP').text(selectedChar.hp);
    $('#charDisplayATK').text(selectedChar.attack);


    $('#charDisplay').fadeIn(2000);


}

//code an empty object and have the lower card be written by its values, and have the charSelect function set its values equal to the
// selected character




function enemySelect() {
   
    if ($(event.target).is('#00-char')) {
        selectedEnem = char1;
        console.log(selectedChar);
    } 
    if ($(event.target).is('#01-char')) {
        selectedEnem = char2;
        console.log(selectedChar);
    }
}

$(document).ready(function () {
    
    $('button').on("click", function () {
        if ($(event.target).is('.char')){
        charSelect();
        } else if ((event.target).is('.enemy')) {
        enemySelect();
        }
      })  
     
      console.log(Math.floor(Math.random() * 8));     



});
