const x = `<img src='images/X.png' width='100%'>`
const o = `<img src='images/O.png' width='100%'>`
let result = document.getElementById('result')
let currentChoice = o
let box1 = ""
let box2 = ""
let box3 = ""
let box4 = ""
let box5 = ""
let box6 = ""
let box7 = ""
let box8 = ""
let box9 = ""
let hasWinner = false
let _box1 = document.querySelector(".box-1")
let _box2 = document.querySelector(".box-2")
let _box3= document.querySelector(".box-3")
let _box4 = document.querySelector(".box-4")
let _box5 = document.querySelector(".box-5")
let _box6 = document.querySelector(".box-6")
let _box7 = document.querySelector(".box-7")
let _box8 = document.querySelector(".box-8")
let _box9 = document.querySelector(".box-9")
const playAgain = document.querySelector('#play-again')
const turn = document.querySelector('.turn')


 
_box1.addEventListener('click',function(e){
    if(hasWinner)  return;
   if(_box1.childNodes.length === 0)  {
    let target = e.target
 
   
    if(currentChoice === o){
        target.innerHTML = x
        currentChoice = x
        box1 = x
        turn.innerText = "Player O Turn"
    } else if(currentChoice === x){
        target.innerHTML = o
        currentChoice = o
        box1 = o
        turn.innerText = "Player X Turn"
    } 
}else{
    return
}

    determineWinner()
 
  console.log(currentChoice)
  console.log(_box1)
   
    })

    _box2.addEventListener('click',function(e){
    if(hasWinner) return;
    if(_box2.childNodes.length === 0)  {
     
    
    let target = e.target

    if(currentChoice === o){
        _box2.innerHTML = x
        currentChoice = x
        box2 = x
        turn.innerText = "Player O Turn"
    } else if(currentChoice === x){
        _box2.innerHTML = o
        currentChoice = o
        box2 = o
        turn.innerText = "Player X Turn"
    } 
}else{
    return
}

    determineWinner()
    console.log(currentChoice)
    console.log(_box2)
   
})

_box3.addEventListener('click',function(e){
    if(hasWinner) return;
    if(_box3.childNodes.length === 0)  {
    let target = e.target

    if(currentChoice ===o){
        _box3.innerHTML = x
        currentChoice = x
        box3 = x
        turn.innerText = "Player O Turn"
    } else if(currentChoice === x){
        _box3.innerHTML = o
        currentChoice =o
        box3 =o
        turn.innerText = "Player X Turn"
    } 
    }else{
        return
    }
        determineWinner()
        console.log(currentChoice)
        console.log(_box3)
})

_box4.addEventListener('click',function(e){
    if(hasWinner) return;
    if(_box4.childNodes.length === 0)  {
    let target = e.target
    
    if(currentChoice ===o){
        _box4.innerHTML = x
        currentChoice = x
        box4 = x
        turn.innerText = "Player O Turn"
    }else if(currentChoice === x){
        _box4.innerHTML = o
        currentChoice =o
        box4 =o
        turn.innerText = "Player X Turn"
    } 
    }else{
        return
    }
    determineWinner()
    console.log(currentChoice)
    console.log(_box4)
})

_box5.addEventListener('click',function(e){
    if(hasWinner) return;
    if(_box5.childNodes.length === 0)  {
    let target = e.target

    if(currentChoice ===o){
        _box5.innerHTML = x
        currentChoice = x
        box5 = x
        turn.innerText = "Player O Turn"
    } else if(currentChoice === x){
        _box5.innerHTML = o
        currentChoice =o
        box5 =o
        turn.innerText = "Player X Turn"
    } 
    }else{
        return
    }
    determineWinner()
    console.log(currentChoice)
    console.log(_box5)
})

_box6.addEventListener('click',function(e){
    if(hasWinner) return;
    if(_box6.childNodes.length === 0)  {
    let target = e.target

    if(currentChoice ===o){
        _box6.innerHTML = x
        currentChoice = x
        box6 = x
        turn.innerText = "Player O Turn"
    } else if(currentChoice === x){
        _box6.innerHTML = o
        currentChoice =o
        box6 =o
        turn.innerText = "Player X Turn"
    } 
    }else{
        return
    }
    determineWinner()
    console.log(currentChoice)
    console.log(_box6)
})

_box7.addEventListener('click',function(e){
    if(hasWinner) return;
    if(_box7.childNodes.length === 0)  {
    let target = e.target

    if(currentChoice ===o){
        _box7.innerHTML = x
        currentChoice = x
        box7 = x
        turn.innerText = "Player O Turn"
    } else if(currentChoice === x){
        _box7.innerHTML = o
        currentChoice =o
        box7 =o
        turn.innerText = "Player X Turn"
    } 
    }else{
        return
    }
    determineWinner()
    console.log(currentChoice)
    console.log(_box7)
})

_box8.addEventListener('click',function(e){
    if(hasWinner) return;
    if(_box8.childNodes.length === 0)  {
    let target = e.target

    if(currentChoice ===o){
        _box8.innerHTML = x
        currentChoice = x
        box8 = x
        turn.innerText = "Player O Turn"
    } else if(currentChoice === x){
        _box8.innerHTML = o
        currentChoice =o
        box8 = o
        turn.innerText = "Player X Turn"
    } 
    }else{
        return
    }
    determineWinner()
    console.log(currentChoice)
    console.log(_box8)
})

_box9.addEventListener('click',function(e){
    if(hasWinner) return;
    if(_box9.childNodes.length === 0)  {
    let target = e.target

    if(currentChoice ===o){
        _box9.innerHTML = x
        currentChoice = x
        box9 = x
        turn.innerText = "Player O Turn"
    } else if(currentChoice === x){
        _box9.innerHTML = o
        currentChoice =o
        box9 =o
        turn.innerText = "Player X Turn" 
    } 
    }else{
        return
    }
    determineWinner()
    console.log(currentChoice)
    console.log(_box9)
     
})

// parentDiv.firstElementChild; 
   
    function determineWinner() {

     
        if(box1 === x && box2 === x && box3 === x) {
            _box1.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box2.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box3.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"         
            console.log("Player X Win!")
            hasWinner = true
            result.innerText = "Player X Win!"
            playAgain.style.display = "block"
             turn.innerText = ""       
        } 
        if (box1 === x && box4 === x && box7 === x) {
            _box1.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box4.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box7.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"          
            console.log("Player X Win!")
            hasWinner = true
            result.innerText = "Player X Win!"
            playAgain.style.display = "block"
             turn.innerText = ""      
        } 
        if(box7 === x && box8 === x && box9 === x)  {
            _box7.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box8.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box9.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"     
            console.log("Player X Win!")
            hasWinner = true
            result.innerText = "Player X Win!"
            playAgain.style.display = "block"
             turn.innerText = ""           
        } 
        if(box4 === x && box5 === x && box6 === x) {
            _box4.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box5.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box6.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"   
            console.log("Player X Win!")
            hasWinner = true
            result.innerText = "Player X Win!"
            playAgain.style.display = "block"
             turn.innerText = ""             
        } 
        if(box1 === x && box5 === x && box9 === x) {
            _box1.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box5.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box9.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"       
            console.log("Player X Win!")
            hasWinner = true
            result.innerText = "Player X Win!"
            playAgain.style.display = "block"
             turn.innerText = ""         
        } 
        if(box3 === x && box5 === x && box7 === x) {
            _box3.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box5.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box7.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"     
            console.log("Player X Win!")
            hasWinner = true
            result.innerText = "Player X Win!"
            playAgain.style.display = "block"
             turn.innerText = ""           
        }
        if(box3 === x && box6 === x && box9 === x) {
            _box3.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box6.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box9.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"   
            console.log("Player X Win!")
            hasWinner = true
            result.innerText = "Player X Win!"
            playAgain.style.display = "block"
             turn.innerText = ""             
        }
        if(box2 === x && box5 === x && box8 === x) {
            _box2.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box5.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box8.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"   
            console.log("Player X Win!")
            hasWinner = true
            result.innerText = "Player X Win!"
            playAgain.style.display = "block"
             turn.innerText = ""             
        }


// O winning
        if(box1 === o && box2 === o && box3 === o) {
            _box1.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box2.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box3.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"         
            console.log("Player O Win!")
            hasWinner = true
            result.innerText = "Player O Win!"
            playAgain.style.display = "block"
             turn.innerText = ""       
        } 
        if (box1 === o && box4 === o && box7 === o) {
            _box1.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box4.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box7.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"          
            console.log("Player O Win!")
            hasWinner = true
            result.innerText = "Player O Win!"
            playAgain.style.display = "block"
             turn.innerText = ""      
        } 
        if(box7 === o && box8 === o && box9 === o)  {
            _box7.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box8.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box9.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"     
            console.log("Player O Win!")
            hasWinner = true
            result.innerText = "Player O Win!"
            playAgain.style.display = "block"
             turn.innerText = ""           
        } 
        if(box4 === o && box5 === o && box6 === o) {
            _box4.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box5.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box6.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"   
            console.log("Player O Win!")
            hasWinner = true
            result.innerText = "Player O Win!"
            playAgain.style.display = "block"
             turn.innerText = ""             
        } 
        if(box1 === o && box5 === o && box9 === o) {
            _box1.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box5.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box9.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"       
            console.log("Player O Win!")
            hasWinner = true
            result.innerText = "Player O Win!"
            playAgain.style.display = "block"
             turn.innerText = ""         
        } 
        if(box3 === o && box5 === o && box7 === o) {
            _box3.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box5.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box7.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"     
            console.log("Player O Win!")
            hasWinner = true
            result.innerText = "Player O Win!"
            playAgain.style.display = "block"
             turn.innerText = ""           
        }
        if(box3 === o && box6 === o && box9 === o) {
            _box3.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box6.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box9.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"   
            console.log("Player O Win!")
            hasWinner = true
            result.innerText = "Player O Win!"
            playAgain.style.display = "block"
             turn.innerText = ""             
        }
        if(box2 === o && box5 === o && box8 === o) {
            _box2.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box5.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)" 
            _box8.style.background= "linear-gradient(to right, rgb(255, 192, 203), rgb(238, 130, 238)"   
            console.log("Player O Win!")
            hasWinner = true
            result.innerText = "Player O Win!"
            playAgain.style.display = "block"
             turn.innerText = ""             
        }

    else if(_box1.childNodes.length === 1 && _box2.childNodes.length === 1 && _box3.childNodes.length === 1 && _box4.childNodes.length === 1 && _box5.childNodes.length === 1 && _box6.childNodes.length === 1 && _box7.childNodes.length === 1 && _box8.children.length === 1 && _box9.children.length === 1 && hasWinner === false){
        result.innerText = "Tie!"
         turn.innerText = ""
        
        playAgain.style.display = "block"
      }

  
    }
    playAgain.addEventListener('click',function(){
        location.reload()
    })



  