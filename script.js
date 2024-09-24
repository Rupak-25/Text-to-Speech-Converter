const playbutton = document.getElementById('Play-button')
const pausebutton = document.getElementById('Pause-button')
const stopbutton = document.getElementById('Stop-button')
const textinput = document.getElementById('text')
const speedinput = document.getElementById('speed')
let currentcharacter

playbutton.addEventListener('click',()=>{
    playText(textinput.value)
})
pausebutton.addEventListener('click',pauseText)
stopbutton.addEventListener('click',stopText)
speedinput.addEventListener('input',()=>{
    stopText()
    playText(utterance.text.substring(currentcharacter))
})

const utterance = new SpeechSynthesisUtterance()
    utterance.addEventListener('end', () =>{
        textinput.disabled = false
    })
    utterance.addEventListener('boundary',e=>{
        currentcharacter = e.charIndex
    })



function playText(text){
    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }
    if (speechSynthesis.speaking) return 
    utterance.text = text
    utterance.rate = speedinput.value
    textinput.disabled = true
    speechSynthesis.speak(utterance)
}
function pauseText(){
    if(speechSynthesis.speaking) speechSynthesis.pause()
}
function stopText(){
    speechSynthesis.resume()
    speechSynthesis.cancel()
}