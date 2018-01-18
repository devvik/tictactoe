$(document).ready(function(){
    let player = 0; // 0 = 'X', 1 = 'O'
    let turns = 0; 

    $('.box').click(function() {
        if (turns>8) {
            alert("Game Over. Refresh page to restart.");
        } else {
            console.log("Turn= "+turns);
            console.log("Player= "+player);
            if (Boolean(player)) {
            $(this).val("O");
            } else {
            $(this).val("X");
            }
            turns++;
            player = turns % 2;
            console.log("Next Turn= "+turns);
            console.log("Next Player= "+player);
            evaluateBoard();
            console.log("===============================");
        }
    });

    function evaluateBoard() {
        console.log("Looking for a win.");
        //hardcode 8 combinations for v1.0
        //top row same value
        if (($('#r0c0').val() === $('#r0c1').val()) && ($('#r0c0').val() === $('#r0c2').val())) {
            console.log("Winner: " + $('#r0c0').val());
            $('#winner').html("Winner: " + $('#r0c0').val());
            gameOver();
        }
        //middle row same value
        if (($('#r1c0').val() === $('#r1c1').val()) && ($('#r1c0').val() === $('#r1c2').val())) {
            console.log("Winner: " + $('#r1c0').val());
            gameOver();
        }
        //bottom row same value
        if (($('#r2c0').val() === $('#r2c1').val()) && ($('#r2c0').val() === $('#r2c2').val())) {
            console.log("Winner: " + $('#r2c0').val());
            gameOver();
        }
        //left most column same value
        if (($('#r0c0').val() === $('#r1c0').val()) && ($('#r0c0').val() === $('#r2c0').val())) {
            console.log("Winner: " + $('#r0c0').val());
            gameOver();
        }
        //middle column same value
        if (($('#r0c1').val() === $('#r1c1').val()) && ($('#r0c1').val() === $('#r2c1').val())) {
            console.log("Winner: " + $('#r0c1').val());
            gameOver();
        }
        //right most column same value
        if (($('#r0c2').val() === $('#r1c2').val()) && ($('#r0c2').val() === $('#r2c2').val())) {
            console.log("Winner: " + $('#r0c2').val());
            gameOver();
        }
        //diagonal from top left corner has same value
        if (($('#r0c0').val() === $('#r1c1').val()) && ($('#r0c0').val() === $('#r2c2').val())) {
            console.log("Winner: " + $('#r0c0').val());
            gameOver();
        }
        //diagonal from bottom left corner has same value
        if (($('#r2c0').val() === $('#r1c1').val()) && ($('#r2c0').val() === $('#r0c2').val())) {
            console.log("Winner: " + $('#r2c0').val());
            gameOver();
        }
    }

    function gameOver() {
        //turns=10; //to stop the game
    }

});