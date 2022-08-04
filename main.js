let formular = document.querySelector('#formular');
formular.addEventListener('submit', submit);

function submit(event){
    event.preventDefault()

    console.log('Alex Neon is interested in biology and chemistry');

    let name = document.querySelector('#jmeno').value;
    let art = document.querySelector('#barva').value;
    let box = document.querySelector('#check').checked;
    console.log(name+ ' ' + art);

    if(box==true){
        console.log('We appreciate your acception!');
    }else{
        console.log('Hopefully you agree for the next time.');
    }
}


