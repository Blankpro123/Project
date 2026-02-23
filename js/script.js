var tweetArea = document.getElementsByClassName("tweetArea")[0];
var tweetButton = document.getElementsByClassName("tweetButton")[0];
var charRemaining = 160;

function updateChar(){
  charRemaining = 160 - tweetArea.value.length;
  document.getElementById("charRemaining").innerHTML = charRemaining + " char remaining";
}

function charLimit(){
  updateChar();
  if(charRemaining < 0){
    tweetButton.disabled = true;
  }
  else{
    tweetButton.disabled = false;
  }
}

tweetArea.addEventListener("input", charLimit);

