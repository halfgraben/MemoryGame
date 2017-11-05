function assigner() {

  var cardIDs = $(".card").map(function() {
    return this.id;
  });

  var cards = [];

  for(i = 0; i < 16; i++) {
    cards[i] = new Object()
    cards[i].cardID = cardIDs[i];
    cards[i].cardIndex = Math.floor(Math.random() * 100);
  }

  cards.sort(function(a, b) {
    return a.cardIndex - b.cardIndex;
  });

  $('#' + cards[0].cardID).children('.front').addClass('fontawesome-bell');
  $('#' + cards[1].cardID).children('.front').addClass('fontawesome-bell');
  $('#' + cards[2].cardID).children('.front').addClass('fontawesome-bolt');
  $('#' + cards[3].cardID).children('.front').addClass('fontawesome-bolt');
  $('#' + cards[4].cardID).children('.front').addClass('fontawesome-key');
  $('#' + cards[5].cardID).children('.front').addClass('fontawesome-key');
  $('#' + cards[6].cardID).children('.front').addClass('fontawesome-trophy');
  $('#' + cards[7].cardID).children('.front').addClass('fontawesome-trophy');
  $('#' + cards[8].cardID).children('.front').addClass('fontawesome-beaker');
  $('#' + cards[9].cardID).children('.front').addClass('fontawesome-beaker');
  $('#' + cards[10].cardID).children('.front').addClass('fontawesome-lightbulb');
  $('#' + cards[11].cardID).children('.front').addClass('fontawesome-lightbulb');
  $('#' + cards[12].cardID).children('.front').addClass('fontawesome-star-empty');
  $('#' + cards[13].cardID).children('.front').addClass('fontawesome-star-empty');
  $('#' + cards[14].cardID).children('.front').addClass('fontawesome-lemon');
  $('#' + cards[15].cardID).children('.front').addClass('fontawesome-lemon');
};

function flip() {

  var listening = true;

  function firstListener() {
    if (listening) {
      $('.unflipped').one('click', function() {
        if(listening) {
          listening = false;
        }
        comparer(this);
      });
    }
  }

  function flipper(target) {
    $(target).removeClass('unflipped');
    $(target).addClass('flipped');
  };

  function comparer(target) {
    let class1 = ($(target).children('.front').attr('class').split(' ')[1]);
    console.log(class1);
    flipper(target);

    // $('.unflipped').one('click', function() {
    //   var class2 = ($(this).children('.front').attr('class').split(' ')[1]);
    //   console.log(class2);
    //   // $('.card').removeClass('unflipped');
    //
    // })
  }

/*
    function unflip() {
      $(that).removeClass('flipped');
      $(that).addClass('unflipped');
      console.log('unflipped');
    };

    setTimeout(unflip, 3000);
    */
    firstListener();
    listening = false;
};

assigner();
flip();
