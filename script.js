  import cartas from './cartas.json' assert {type: 'json'};
  // var cartas;
  // var url = "./cartas.json";         
  // $.getJSON(url, function (data) {
  //   cartas = data; 
  //   console.log(cartas);
  // });
  // console.log(cartas);
  var cartaMaquina;
  var cartaJogador;
  var sortearBtn = document.getElementById("btnSortear");
  var jogarBtn = document.getElementById("btnJogar");
  console.log(cartas.length);

  $("#btnSortear").click(function() { 
    var numero = parseInt(Math.random() * cartas.length);
    console.log(numero);
    cartaMaquina = cartas[numero];

    console.log(cartaMaquina);
    var numero2 = parseInt(Math.random() * cartas.length);
    while (numero2 == numero) {
      numero2 = parseInt(Math.random() * cartas.length);
    }
  
    cartaJogador = cartas[numero2];
    var cardsArea = $('.hide-cards-area');
    $('.space').fadeOut("fast",function(){
        cardsArea.fadeIn("slow");
        
        displayCarta("card-place",cartaJogador);
        showOpts();
        sortearBtn.disabled = true;
        jogarBtn.disabled = false;
    });


  })

  
  function showOpts() {
    var divOpt = document.getElementById("opcoes");
    var optTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      optTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "' >" +
        atributo;
    }
    divOpt.innerHTML = optTexto;
  }
  
  function obterInputSelect() {
    var selectedAttr = document.getElementsByName("atributo");
    for (var i = 0; i < selectedAttr.length; i++) {
      if (selectedAttr[i].checked) {
        return selectedAttr[i].value;
      }
    }
    document.getElementById("resultado").innerHTML = "Escolha um atributo!";
    return false;
  }
  
  $("#btnJogar").click(function() {
    var atributo = obterInputSelect();
    if(atributo != false){
        var resultDiv = document.getElementById("resultado");
    var elementResultado = "";
    
    if (cartaJogador.atributos[atributo] > cartaMaquina.atributos[atributo]) {
      // Jogador Ganhou
      resultDiv.innerHTML = "Você Ganhou!";
    } else if (
      cartaJogador.atributos[atributo] < cartaMaquina.atributos[atributo]
    ) {
      // Jogador Perdeu
      resultDiv.innerHTML = "Você Venceu!";
    } else {
      // Empate
      resultDiv.innerHTML = "Você Empatou!";
    }
     $('#resultado').fadeIn();
     var enCard = $('#enemy');
     enCard.fadeOut("fast",function(){
        displayCarta("enemy",cartaMaquina);
        enCard.fadeIn("slow");
     });

    }
  
  });
  
  function displayCarta(id,carta){
    var elemento = '<div class="card">'+
          '<div class="name-card-cont">'+
          '<h2 class="nome-carta">'+carta.nome+'</h2>'+
          '<img src="'+carta.img+'" class="card-img" alt="card-img">'+          
          '</div>'+
          '<div class="atributos">'+
           '<div class="base">'+
              '<div class="attr-base">'+
                '<p class="nome">Ataque:</p>'+
                '<p class="valor">'+carta.atributos.ataque+'</p>'+
              '</div>'+
              '<div calss="attr-base">'+
                '<p class="nome">Defesa:</p>'+
                '<p class="valor">'+carta.atributos.defesa+'</p>'+
              '</div>'+
            '</div>'+
            '<div class="especial">'+
              '<div class="attr-esp">'+
                '<p>Estilo: '+carta.atributos.estilo+'</p>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
        var caseCard = document.getElementById(id);
      caseCard.innerHTML = elemento;
  }
  