
$(document).ready(function () {
    infoUpdate();
    $('button').on("click", function () {
        if ($(event.target).is('.char')){
        charSelect();
        } else if ($(event.target).is('.enemy')) {
        enemySelect();
        }
      })      
});
