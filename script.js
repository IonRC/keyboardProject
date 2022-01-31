let keys = document.querySelectorAll('.keys');
const key = [..."QWERTYUIOPASDFGHJKLZXCVBNM01234567890", "ESCAPE", "SHIFT", "ENTER", "TAB", "BACKSPACE", "CAPSLOCK",
 "-", "=", "[", "]", ",", ".", "/", ";", "'"];

let resultNewKey = '';
const getRandomItemFromArray = (arr) =>{
    let newKey = arr[Math.floor(Math.random()*key.length)];
    resultNewKey = newKey
    const findBtn = document.getElementById(`${newKey}`);
    findBtn.classList.add('shake_animation');

}
getRandomItemFromArray(key);

window.addEventListener('keydown', (event) =>{
    let name = event.key.toUpperCase();
    if (name === resultNewKey){
        const findSecondBtn = document.getElementById(`${resultNewKey}`);
        findSecondBtn.classList.remove('shake_animation');
        getRandomItemFromArray(key); 
    } else {
        const findThirdButton = document.getElementById(`${name}`)
            findThirdButton.classList.add('shake_secondAnimation');
        function removeClass (){
            findThirdButton.classList.remove('shake_secondAnimation');
        }
        setTimeout(removeClass, 300);
        }
});
