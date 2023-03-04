console.log("hey")
window.addEventListener('keyup' , function(e){
   
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    
  audio.currentTime = 0;
        audio.play();

    
})