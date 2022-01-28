let keys = document.querySelectorAll('.keys');
let shiftLeft = document.querySelector('.keys_shift_left');
let shiftRight = document.querySelector('.keys_shift_right');
let tab = document.querySelector('.keys_tab');
let enter = document.querySelector('.keys_enter');
let caps = document.querySelector('.keys_caps');

const key = [..."QWERTYUIOPASDFGHJKLZXCVBNM"]; // 3 puncte creem masif face un masif pe ficare element aparte
console.log(key);


// let item = key[Math.floor(Math.random()*key.length)];
// console.log(item);
let resultNewKey = ''; // pregatim o variabile pentru ca so putem folosi mai jos, altfel newKey ea nu va putea fi apelata
const getRandomItemFromArray = (arr) =>{
    let newKey = arr[Math.floor(Math.random()*key.length)]; // functia random
    resultNewKey = newKey // aici facem variabila globala, cum am si zis ca so putem folosi mai jos
    console.log(newKey);
    const findBtn = document.getElementById(`${newKey}`);// prin interpolare trecem prin toate id
    console.log(findBtn);
    findBtn.classList.add('button-border'); // aici adaugam un class

}
getRandomItemFromArray(key);// aici apelam functia

window.addEventListener('keydown', (event) =>{
    let name = event.key.toUpperCase();// eveniment pentru keydown care o facem cu litere mari
    console.log(name);
    if (name === resultNewKey){
        // daca knopka de pe tastatura corespunde cu knopka de la ecran
        const findSecondBtn = document.getElementById(`${resultNewKey}`); // iarasi o gasim
        findSecondBtn.classList.remove('button-border'); // aici stergem deja classul button border
        getRandomItemFromArray(key); // apelam inca odata functia
    } else {
        const findThirdButton = document.getElementById(`${name}`)
            findThirdButton.classList.add('button-test');
        function removeClass (){
            findThirdButton.classList.remove('button-test');
        }
        setTimeout(removeClass, 300);
        }
});


// const timeLaps = [];
//
// window.addEventListener('keydown', (event) =>{
//
// })

// document.addEventListener('keypress', (event) => {
//     let name = event.key;
//     let code = event.code;
//     let keycode = event.keyCode;
//     // Alert the key name and key code on keydown
//     // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
//     console.log(keycode);
//     if (event.keyCode === keycode){
//         let findLetter = [].slice.call(document.querySelectorAll('.keys'))
//             .filter(a => a.textContent.match(name))
//         console.log(findLetter)
//         let letter = keys.textContent;
//         findLetter[0].textContent = 'gg'
//         console.log(letter)
//         if (name === letter) {
//             console.log(333)
//             keys.textContent = 'ds'
//         }
//     }
// }, false);



// document.addEventListener('keypress', (event) => {
//     let name = event.key;
//     let code = event.code;
//     keys.forEach((item) =>{
//         item.classList.add('flow')
//     })
// });
    // Alert the key name and key code on keydown
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
// }, false);




// const inputShake = () =>{
//     keys.classList.add('input-shake')
// }






// window.addEventListener('keydown', (ev) => {
//     console.log(ev.keyCode);
//
//     if (ev.keyCode === 76){
//         flow();
//     }
//     })
//
// const flow = () =>{
//     keys.classList.add('flow')
// }

// Rigoare, organizare, receptivitate la solicitările clienţilor