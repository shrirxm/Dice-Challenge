

    var n=Math.random();
    var randomVariable=Math.floor(n*6)+1;
    var image=randomVariable+".png";
    var source="images/"+image;

    var n1=Math.random();
    var randomVariable1=Math.floor(n1*6)+1;
    var image1=randomVariable1+".png";
    var source1="images/"+image1;

  document.querySelectorAll("img")[0].setAttribute("src",source);
  document.querySelectorAll("img")[1].setAttribute("src",source1);
  var count1;
if(randomVariable>randomVariable1){
  document.querySelector("h1").innerHTML="👑Player 1 wins";
}
else if (randomVariable===randomVariable1) {
    document.querySelector("h1").innerHTML="Roll Again";
}
else{
  document.querySelector("h1").innerHTML="👑Player 2 wins";
}
