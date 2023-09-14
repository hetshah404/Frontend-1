// change navbar on scrolling

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
});


// show/hide faq answer

const faqs = document.querySelectorAll('.faq');
// console.log(faqs);
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === "fa-solid fa-plus"){
            icon.className = "fa-solid fa-minus";
        }
        else{
            icon.className = "fa-solid fa-plus";
        }
    })
});

//show/hide nav menu
const menu = document.querySelector('.nav__menu');
const openbtn = document.querySelector('#open-menu-btn');
const closebtn = document.querySelector('#close-menu-btn');


openbtn.addEventListener("click",() => {
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    openbtn.style.display = "none";
})
closebtn.addEventListener("click",() => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    openbtn.style.display = "inline-block";
})