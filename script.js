var cartas = [
    carta1 = {
      nome: "Dio Brando",
      img:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/71fbb00b-be92-4757-8791-0aaae3cc055d/ddo6tso-96deb885-0f72-4f0f-8fb9-0c4e1745b38c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcxZmJiMDBiLWJlOTItNDc1Ny04NzkxLTBhYWFlM2NjMDU1ZFwvZGRvNnRzby05NmRlYjg4NS0wZjcyLTRmMGYtOGZiOS0wYzRlMTc0NWIzOGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PcycMvPKchBs0cljRX8qUPsp4wftm1UCR_SAzzHEjKc",
      atributos: {
        estilo: 999,
        defesa: 60,
        ataque: 70
      }
    },
    carta2 = {
      nome: "Jotaro Kujo",
      img:
        "https://freepngimg.com/thumb/anime/118756-jotaro-png-file-hd.png",
      atributos: {
        estilo: 500,
        defesa: 80,
        ataque: 80
      }
    },
    carta3 = {
      nome: "Josuke Higashikata",
      img:
        "https://64.media.tumblr.com/ded526c0aac7aa9a37e0579dfad30330/9176885704b45ed8-06/s540x810/b74e2790da97b07d5fed6bb8ecfa26b8df1d311c.png",
      atributos: {
        estilo: 450,
        defesa: 90,
        ataque: 70
      }
    },
    carta4 = {
      nome: "Kira Yoshikage", img:"https://static.jojowiki.com/images/thumb/b/b2/latest/20210107192532/Yoshikage_Kira_Matured_Infobox_Anime.png/400px-Yoshikage_Kira_Matured_Infobox_Anime.png",
      atributos: {
        estilo: 600,
        defesa: 50,
        ataque: 90
      }
    }
  ];
  var cartaMaquina;
  var cartaJogador;
  var sortearBtn = document.getElementById("btnSortear");
  var jogarBtn = document.getElementById("btnJogar");
  
  function sortearCarta() {
    numero = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numero];
  
    numero2 = parseInt(Math.random() * cartas.length);
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


    
  }
  
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
    for (i = 0; i < selectedAttr.length; i++) {
      if (selectedAttr[i].checked) {
        return selectedAttr[i].value;
      }
    }
    document.getElementById("resultado").innerHTML = "Escolha um atributo!";
    return false;
  }
  
  function jogar() {
    var atributo = obterInputSelect();
    if(atributo != false){
        var resultDiv = document.getElementById("resultado");
    var elementResultado = "";
  
    if (cartaJogador.atributos[atributo] > cartaMaquina.atributos[atributo]) {
      // Jogador Ganhou
      resultDiv.innerHTML = "Você Ganhou contra:";
    } else if (
      cartaJogador.atributos[atributo] < cartaMaquina.atributos[atributo]
    ) {
      // Jogador Perdeu
      resultDiv.innerHTML = "Você perdeu contra:";
    } else {
      // Empate
      resultDiv.innerHTML = "Empate contra:";
    }
     enCard = $('#enemy');
     enCard.fadeOut("fast",function(){
        displayCarta("enemy",cartaMaquina);
        enCard.fadeIn("slow");
     });

    }
  
  }
  
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
  