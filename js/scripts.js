function rollDice() {
  var die1 = document.getElementById('die1');
  var die2 = document.getElementById('die2');
  var status = document.getElementById('status');
  //var total1 = document.getElementById('total1');
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  status.innerHTML ="your total is "+ diceTotal + ".";
  total1.innerHTML += status.innerHTML;
  //  for(diceTotal=status.innerHTML;diceTotal<==total1.innerHTML; diceTotal++);
  if (d1 == 1 && d2 == 1) {
    status.innerHTML -= status.innerHTML + 0; // "your total is 0"+"its player2 free turn!!";
    //  total1.innerHTML-=total1.innerHTML;
    $("#button-p1").hide('');
    $("#button-p2").show('');

  } else if (d1 == d2) {
    status.innerHTML += "Doubles!!You get a free turn!";
    //total1.innerHTML;

  } else {
    status.innerHTML;
    //total1.innerHTML;
  }
}


function rollDice2() {
  var die1 = document.getElementById('die1');
  var die2 = document.getElementById('die2');
  var status = document.getElementById('status');
  var status2 = document.getElementById('status2');
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 + d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  status2.innerHTML = "your total is  " + diceTotal + ".";
  if (d2 == 1 && d1 == 1) {

    status2.innerHTML -= status2.innerHTML + 0 //" its player1 turn!!";

    $("#button-p2").hide('');
    $("#button-p1").show('');
  } else if (d2 == d1) {
    status2.innerHTML += "Doubles!!You get a free turn!";
  } else {
    status2.innerHTML;

  }

}
