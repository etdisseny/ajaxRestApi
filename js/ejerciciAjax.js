$(document).ready(function(){
    $('#aleatorio').click(function(){
        //cargo el chiste
            $.get("http://api.icndb.com/jokes/random", function(respuesta){    
                $('#box').html(respuesta.value.joke);
                });
    });
  
});