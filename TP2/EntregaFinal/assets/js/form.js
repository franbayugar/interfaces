const targets = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');
const tab = document.querySelectorAll(".pestaña");
const log = document.querySelectorAll(".logButton");
const reg = document.querySelectorAll(".regButton");
const contLoggin = document.querySelector('.regLogin');
const succes = document.querySelector('.succesLoggin');
const sucLog = document.querySelector('#succesLog');
const sucReg = document.querySelector('#succesReg');



targets.forEach(target => {

    target.addEventListener('click', () => {

        content.forEach(c => {
            c.classList.remove('activeForm');

        })
        tab.forEach(p => {
            p.classList.remove('activeTab');

        })

        target.classList.add('activeTab');


        const t = document.querySelector(target.dataset.target);

        t.classList.add('activeForm');

    })

})
log.forEach(lg => {

    lg.addEventListener('click', () => {
        contLoggin.classList.remove('activeCont');
        contLoggin.classList.add('inactiveCont');
        succes.classList.remove('inactiveCont');
        succes.classList.add('succesMsge');




    })



})

reg.forEach(rg => {

    rg.addEventListener('click', () => {
        contLoggin.classList.remove('activeCont');
        contLoggin.classList.add('inactiveCont');
        succes.classList.remove('inactiveCont');
        succes.classList.add('succesMsge');
        sucLog.classList.add('inactiveCont');
        sucReg.classList.remove('inactiveCont');
        sucReg.classList.add('succesMsge');
    })



})