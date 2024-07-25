const button = document.querySelector(".button");

const audio = new Audio('stupid-american.mp3');

const buttonHandler = () => {
    audio.play();
}

button.addEventListener('click', buttonHandler);