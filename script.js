

const b = document.body;
const radio = document.querySelector("#radio");
const shadow = document.querySelector("#shadow");
const buttonCta = document.querySelector("#button-cta");
const cover = document.querySelector("#cover");
const circles = document.querySelector("#circles");

const a = document.querySelector("#audio");
const son = document.querySelector("#son");
const soff = document.querySelector("#soff");

const radioPlaying = () => {
    radio.classList.toggle('is-radio-active')
    shadow.classList.toggle('is-shadow-active')
    buttonCta.classList.toggle('is-button-active')
    cover.classList.toggle('is-cover-active')

    a.loop = true;

    if (a.paused) a.play();
    else {
        a.pause();
        a.currentTime = 0;
    }

    son.classList.toggle("s");
    soff.classList.toggle("s");
}


buttonCta.addEventListener("click", radioPlaying)
soff.addEventListener("click", radioPlaying)
son.addEventListener("click", radioPlaying)