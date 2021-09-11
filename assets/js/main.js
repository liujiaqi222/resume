/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')




// skills toggle

const skillsHeaders = document.querySelectorAll('.skills_header');

skillsHeaders.forEach(el => el.addEventListener('click', () => {
    el.parentElement.classList.toggle('skills_close');

}))










/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills_info', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });



// mask
const mask = document.querySelector('.mask');
const cancel = document.querySelector('.cancel')
const wechat = document.querySelectorAll('.wechat');
wechat.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        mask.classList.remove('isShow');
    })
});

cancel.addEventListener('click', () => {
    mask.classList.add('isShow')
})

// 轮播图
const btn_l = document.querySelector('.button-left');
const btn_r = document.querySelector('.button-right');
const ul = document.querySelector('.carousel_list');
// 设置图片序号 默认为0
let id = 0;
let isLock = false;

const rightClick = () => {
    if (isLock) return;
    isLock = true;
    id++;
    // 加上动画
    ul.style.transition = '0.5s';
    ul.style.transform = `translateX(${-id * 25}%)`;
    // 如果为第4张图片
    if (id === 3) {
        // 等待动画结束
        id = 0;
        setTimeout(() => { // 移动回第一张照片
            ul.style.transform = `translateX(${-id * 25}%)`;
            ul.style.transition = 'none'; // 悄悄的移动不要动画
        }, 500);
    }
    setCircles(id);
    setTimeout(() => {
        isLock = false;
    }, 500);
}
btn_r.addEventListener('click', rightClick);
btn_l.addEventListener('click', () => {
    if (isLock) return;
    if (id === 0) {
        ul.style.transform = 'translateX(-80%)';
        ul.style.transition = 'none';
        id = 3;
    }
    setTimeout(() => {
        id--;
        setCircles(id);
        ul.style.transition = '0.5s';
        ul.style.transform = `translateX(${-id * 25}%)`;
    }, 0);
    setTimeout(() => {
        isLock = false;
    }, 500);
});

const ol = document.querySelector('ol');
function setCircles(index) {
    [...ol.children].forEach(el => {
        el.classList.remove('active');
    })
    ol.children[index].classList.add('active');
}
ol.addEventListener('click', e => {
    // 如果点击的是li
    if (e.target.tagName === 'LI') {
        id = Number(e.target.getAttribute('data-n'));
        ul.style.transform = `translate(${-id * 25}%)`;
        setCircles(id);
    }
});
// 定时器 自动轮播 模拟鼠标右点击
let timer = setInterval(rightClick, 2000);
ul.addEventListener('mouseover', () => {
    clearInterval(timer);
})
ul.addEventListener('mouseleave', () => {
    clearInterval(timer);
    timer = setInterval(rightClick, 2000);
})