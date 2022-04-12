const main=document.body
allKeys = document.querySelectorAll('.keys')
let KeyA = document.getElementById('a-key')
const KeyS= document.getElementById('s-key')
const KeyD= document.getElementById('d-key')
const KeyF= document.getElementById('f-key')
const KeyG= document.getElementById('g-key')
const KeyH= document.getElementById('h-key')
const KeyJ= document.getElementById('j-key')
const KeyK= document.getElementById('k-key')
const KeyL= document.getElementById('l-key')


document.addEventListener('keydown', function (e){

    const sound=document.querySelector(`audio[data-key="${e.code}"]`)
    const key=document.querySelector(`.keys[data-key="${e.code}"]`)
    if (!sound) return "that aint a key";
    sound.currentTime=0;
    sound.play();
    key.classList.add('drum-hit');
});

function removeTransition(e){
    // console.log(e)
    // if(e.propertyName!=="border") return; //if not border transitioning then skip
    this.classList.remove('drum-hit')
};

const keys=document.querySelectorAll('.keys')
keys.forEach(keyz => keyz.addEventListener('transitionend',removeTransition));