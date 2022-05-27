const img = document.querySelector('img');
const submitFormBtn=document.querySelector('[data-gif-btn]')
submitFormBtn.addEventListener('click',submitForm);

function submitForm(e){ //Take form inputs
  e.preventDefault();
  const gifValue = document.querySelector("[data-search]").value

  document.forms[0].reset(); //wipe form inputs
  getGif(gifValue)
}


function getGif(value){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=UF5VFsIKYq2eDsJIc0U0N9yziPKoIsPD&s=${value}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
        .catch(function(){
            throw new Error('Could not find gif');
        })
}