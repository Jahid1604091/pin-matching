const submitBtn = document.getElementById('submit-btn')
const buttons  = document.getElementsByClassName('button')
const calcDisplay = document.getElementById('calc-display')
const pinDisplay = document.getElementById('pin-display')
const generatePin = document.getElementById('generate-pin')
const wrongNotify = document.getElementById('wrong')
const rightNotify = document.getElementById('right')



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',(e)=>{
        if(e.target.id == 'backspace'){
           let newValue =  calcDisplay.value.substring(0, calcDisplay.value.length  - 1)
           calcDisplay.value = newValue
        }
        else if(e.target.id == 'clear'){
            calcDisplay.value = ''
        }
        else{
            let output = calcDisplay.innerHTML
            if(output !=NaN){
                calcDisplay.value += e.target.innerHTML
            }
        }


    })
    
}


submitBtn.addEventListener('click',(e)=>{
   
    const calcDisplayValue = calcDisplay.value 

    if(calcDisplayValue == pinDisplay.value){
        rightNotify.style.display = 'block'
        wrongNotify.style.display = 'none'
    }
    else{
        rightNotify.style.display = 'none'
        wrongNotify.style.display = 'block'
        
    }
})

generatePin.addEventListener('click',(e)=>{
    const pin = Math.floor(Math.random()*10000)
    pinDisplay.value  = pin
})


