const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I ❤ ACM >.<';
    const body = document.querySelector("body");
    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "fas fa-heart";
        heart.style.left = (Math.random() * 100)+"vw";
        heart.style.animationDuration = (Math.random()*3)+2+"s"
        body.appendChild(heart);
    }
    setInterval(createHeart,100);
    setInterval(function name(params) {
        var heartArr = document.querySelectorAll(".fa-heart")
        if (heartArr.length > 200) {
        heartArr[0].remove()
        }
        //console.log(heartArr);
    },100)
});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});