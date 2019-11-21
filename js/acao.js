window.onload = function() {
  L.mapquest.key = 'Tb4mQvnfzr5SSkAldnGNtLUzzpQTaaaL';

  var map = L.mapquest.map('map', {
    center: [-24.121955, -46.678716],    
    layers: L.mapquest.tileLayer('map'),
    zoom: 16
  });

  map.addControl(L.mapquest.control());
}


  /*Flip do carte do Erick*/
  $( "#virar" ).click(function() {
    $(".container1").css("transition", "3s");
    $(".container1").css("transform", "rotatey(180deg)");
    $(".container1").css("background-color", "#007bff");
    $(".container1").css("color", "#fff");
    $("#titulo1").css("display", "none");
    $("#redeSocial").css("display", "block");
    $("#virar").css("display", "none");
    $("#desvirar").css("display", "block");
  }); 
  $( "#desvirar" ).click(function() {
    $(".container1").css("transition", "3s");
    $(".container1").css("transform", "rotatey(0deg)");
    $(".container1").css("background-color", "#fff");
    $(".container1").css("color", "#000");
    $("#titulo1").css("display", "block");
    $("#redeSocial").css("display", "none");
    $("#virar").css("display", "block");
    $("#desvirar").css("display", "none");
  }); 

  /*Flip do carte do luiz G*/
  $( "#virar2" ).click(function() {
    $(".container2").css("transition", "3s");
    $(".container2").css("transform", "rotatey(180deg)");
    $(".container2").css("background-color", "#1ac6ff");
    $(".container2").css("color", "#fff");
    $("#titulo2").css("display", "none");
    $("#redeSocial2").css("display", "block");
    $("#virar2").css("display", "none");
    $("#desvirar2").css("display", "block");
  }); 
  $( "#desvirar2" ).click(function() {
    $(".container2").css("transition", "3s");
    $(".container2").css("transform", "rotatey(0deg)");
    $(".container2").css("background-color", "#fff");
    $(".container2").css("color", "#000");
    $("#titulo2").css("display", "block");
    $("#redeSocial2").css("display", "none");
    $("#virar2").css("display", "block");
    $("#desvirar2").css("display", "none");
  }); 

  /*Flip do carte do Luiz H */
  $( "#virar3" ).click(function() {
    $(".container3").css("transition", "3s");
    $(".container3").css("transform", "rotatey(180deg)");
    $(".container3").css("background-color", "#ff9966");
    $(".container3").css("color", "#fff");
    $("#titulo3").css("display", "none");
    $("#redeSocial3").css("display", "block");
    $("#virar3").css("display", "none");
    $("#desvirar3").css("display", "block");
  }); 
  $( "#desvirar3" ).click(function() {
    $(".container3").css("transition", "3s");
    $(".container3").css("transform", "rotatey(0deg)");
    $(".container3").css("background-color", "#fff");
    $(".container3").css("color", "#000");
    $("#titulo3").css("display", "block");
    $("#redeSocial3").css("display", "none");
    $("#virar3").css("display", "block");
    $("#desvirar3").css("display", "none");
  }); 
  
  /*Flip do carte do Vinicius*/
  $( "#virar4" ).click(function() {
    $(".container4").css("transition", "3s");
    $(".container4").css("transform", "rotatey(180deg)");
    $(".container4").css("background-color", "#ff5050");
    $(".container4").css("color", "#fff");
    $("#titulo4").css("display", "none");
    $("#redeSocial4").css("display", "block");
    $("#virar4").css("display", "none");
    $("#desvirar4").css("display", "block");
  }); 
  $( "#desvirar4" ).click(function() {
    $(".container4").css("transition", "3s");
    $(".container4").css("transform", "rotatey(0deg)");
    $(".container4").css("background-color", "#fff");
    $(".container4").css("color", "#000");
    $("#titulo4").css("display", "block");
    $("#redeSocial4").css("display", "none");
    $("#virar4").css("display", "block");
    $("#desvirar4").css("display", "none");
  }); 