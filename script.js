let keys = document.querySelectorAll('.keys');
const key = [..."QWERTYUIOPASDFGHJKLZXCVBNM01234567890"];

let resultNewKey = '';
const getRandomItemFromArray = (arr) =>{
    let newKey = arr[Math.floor(Math.random()*key.length)];
    resultNewKey = newKey
    console.log(newKey);
    const findBtn = document.getElementById(`${newKey}`);
    console.log(findBtn);
    findBtn.classList.add('shake_animation');

}
getRandomItemFromArray(key);

window.addEventListener('keydown', (event) =>{
    let name = event.key.toUpperCase();
    console.log(name);
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
