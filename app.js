$(document).ready(function(){
    let player = 0; // 0 = 'X', 1 = 'O'
    let turns = 0; 
    $('.box').click(function() {
        if (!$(this).val()) { 
          if (player) {
            $(this).val("O");
          } else {
            $(this).val("X");
          }
          turns++;
          player = turns % 2;
          evaluateBoard();
       }
    });

    function evaluateBoard() {
      console.log("looking for win")
      if (($('#r0c0').val() === $('#r0c1').val()) && 
          ($('#r0c0').val() === $('#r0c2').val())) {
        console.log("Winner: " + $('#r0c0').val())
      }
    }

});