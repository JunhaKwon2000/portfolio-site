// HEADER BUTTON
const projectDiv = document.querySelector('.visual > .inner div:nth-child(2)');
const projectDivButton = document.querySelector('.visual > .inner div:nth-child(2) a');
projectDivButton.addEventListener('mouseover', () => {
  projectDiv.classList.add('animate__animated');
  projectDiv.classList.add('animate__heartBeat');
})
projectDivButton.addEventListener('mouseout', () => {
  projectDiv.classList.remove('animate__animated');
  projectDiv.classList.remove('animate__heartBeat');
})

// PROJECT 1
const readmeBtn1 = document.querySelector('.btn-README.README-1');
const readmePopUp1 = document.querySelector('.modal.modal-1');
const readmeClose1 = document.querySelector('.modal.modal-1 .btn-close');
readmeBtn1.addEventListener('click', () => {
  readmePopUp1.style.display = 'flex';
})
readmeClose1.addEventListener('click', () => {
  readmePopUp1.style.display = 'none';
})

// PROJECT 2
const readmeBtn2 = document.querySelector('.btn-README.README-2');
const readmePopUp2 = document.querySelector('.modal.modal-2');
const readmeClose2 = document.querySelector('.modal.modal-2 .btn-close');
readmeBtn2.addEventListener('click', () => {
  readmePopUp2.style.display = 'flex';
})
readmeClose2.addEventListener('click', () => {
  readmePopUp2.style.display = 'none';
})

// COMMON CLIPBOARD
const clipBoardBtn = document.querySelectorAll('.clipboard-link');
const clipBoardPopUp = document.querySelector('.clipboard');
const clipBoardClose = document.querySelector('.clipboard .clipboard-body a');

clipBoardBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    clipBoardPopUp.style.display = 'flex';
    })
})
clipBoardClose.addEventListener('click', () => {
  clipBoardPopUp.style.display = 'none';
})

// COMMON WINDOW ESCAPE KEY
document.onkeydown = (event) => {
  if (event.key === 'Escape') {
    readmePopUp1.style.display = 'none';
    readmePopUp2.style.display = 'none';
    clipBoardPopUp.style.display = 'none';
  }
}

// SCROLL
const spyEl1 = document.querySelector('.about-me-body div:nth-of-type(1)');
const controllerAboutMe1 = new ScrollMagic.Controller();
new ScrollMagic.Scene({
  triggerElement: spyEl1, 
  triggerHook: 0.8,
}).setClassToggle(spyEl1, 'show').addTo(controllerAboutMe1);

const spyEl2 = document.querySelector('.about-me-body div:nth-of-type(2)');
const controllerAboutMe2 = new ScrollMagic.Controller();
new ScrollMagic.Scene({
  triggerElement: spyEl2, 
  triggerHook: 0.8,
}).setClassToggle(spyEl2, 'show').addTo(controllerAboutMe2);

const projectSpy1 = document.querySelector('.body-spy1');
const controllerProject1 = new ScrollMagic.Controller();
new ScrollMagic.Scene({
  triggerElement: projectSpy1, 
  triggerHook: 0.8,
}).setClassToggle(projectSpy1, 'show').addTo(controllerProject1);

const projectSpy2 = document.querySelector('.body-spy2');
const controllerProject2 = new ScrollMagic.Controller();
new ScrollMagic.Scene({
  triggerElement: projectSpy2, 
  triggerHook: 0.8,
}).setClassToggle(projectSpy2, 'show').addTo(controllerProject2);

const contactSpy1 = document.querySelector('.contact-spy1');
const controllerContact1 = new ScrollMagic.Controller();
new ScrollMagic.Scene({
  triggerElement: contactSpy1, 
  triggerHook: 0.99,
}).setClassToggle(contactSpy1, 'show').addTo(controllerProject1);

const contactSpy2 = document.querySelectorAll('.contact-spy2');
const controllerContact2 = new ScrollMagic.Controller();
contactSpy2.forEach((el) => {
  new ScrollMagic.Scene({
    triggerElement: el, 
    triggerHook: 0.99,
  }).setClassToggle(el, 'show').addTo(controllerProject2);
})

// COPYRIGHT DATE
const yearNow = new Date();
const copyrightYear = document.querySelector('.footer-copyrights span');
copyrightYear.textContent = yearNow.getFullYear();

// COPY TO CLIPBOARD
const copyMail = document.querySelector('.clipboard-email').textContent;
  const copyContent1 = async () => {
    try {
      await navigator.clipboard.writeText(copyMail);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  const copyPhone = document.querySelector('.clipboard-phone').textContent;
  const copyContent2 = async () => {
    try {
      await navigator.clipboard.writeText(copyPhone);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

// TEXT DESIGN 
const textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// RESPONSIVE MENU
const responsiveMenu = document.querySelector('.btn-menu');
const responsiveMenuExpander = document.querySelector('header nav');
responsiveMenu.addEventListener('click', () => {
  responsiveMenuExpander.classList.toggle('active');
})

const responsiveMenuAnchors = document.querySelectorAll('header nav ul li a');
responsiveMenuAnchors.forEach(anchors => {
anchors.addEventListener('click', () => {
  responsiveMenuExpander.classList.toggle('active');
})})