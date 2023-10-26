let formInputs = document.querySelectorAll('.form__input-body')
let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

formInputs.forEach( item => {
    let input = item.querySelector('input')
    let label = item.querySelector('label')
    
    input.addEventListener('focusout', ()=>{
        input.value.length != 0 ? label.classList.add('has-value') : label.classList.remove('has-value')
        if(input.name == 'email' && regEmail.test(input.value) == false){
            console.log(input.name)
            input.classList.add('error')
        }else{
            input.classList.remove('error')
        }
    })
})