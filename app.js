$(document).ready(function(){
    $('input[type=text]').change(function(){
        console.log($(this).val());
        let enteredValue = $(this).val();
        console.log(enteredValue);
        if (enteredValue !== x || enteredValue !== 0) {
            //$(this).val() =  '';
            alert ("Only valid entries are x or 0. Please retry.");
        }
    });
});