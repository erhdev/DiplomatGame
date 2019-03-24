
$(document).ready(function () {
    infoUpdate();
    $('#begin').on('click', function(){
      $('#intro').fadeOut(1000);
      $('.gameScreen').fadeIn(1000);
    })
    $('button').on("click", function () {
        if ($(event.target).is('.char')){
        charSelect();
        } else if ($(event.target).is('.enemy')) {
        enemySelect();
        }
      })
          
});
