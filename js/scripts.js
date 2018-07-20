function rollDice(){
  var die1 = document.getElementById('die1');
  var die2 = document.getElementById('die2');
  var status=document.getElementById('status');
  var d1 = Math.floor(Math.random()*6)+1;
  var d2 = Math.floor(Math.random()*6)+1;
  var diceTotal = d1+d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  status.innerHTML= "your total is "+ diceTotal+ ".";

  if (d1==1 && d2==1){
    status.innerHTML-=status.innerHTML+0;// "your total is 0"+"its player2 free turn!!";
  }
  else if (d1==d2){
    status.innerHTML+= "Doubles!!You get a free turn!";

  }
  else {
    status.innerHTML;
  }
}


function rollDice2(){
  var die1 = document.getElementById('die1');
  var die2 = document.getElementById('die2');
  var status=document.getElementById('status');
  var status2=document.getElementById('status2');
  var d1 = Math.floor(Math.random()*100)+1;
  var d2 = Math.floor(Math.random()*100)+1;
  var diceTotal = d1+d2;
  die1.innerHTML = d1;
  die2.innerHTML = d2;
  status2.innerHTML= "your total is  "+ diceTotal+".";
  if (d2==1 && d1==1 ){

    status2.innerHTML -=status2.innerHTML+0//" its player1 turn!!";
  }
  else if(d2==d1){
    status2.innerHTML+= "Doubles!!You get a free turn!";
  }

  else {
    status2.innerHTML;

  }

}
