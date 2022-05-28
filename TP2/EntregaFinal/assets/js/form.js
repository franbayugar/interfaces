const targets = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');
const tab = document.querySelectorAll(".pestaña");
const log = document.querySelectorAll(".button");
const contLoggin = document.querySelector('.regLogin');
const succes = document.querySelector('.succesLogin');


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
        succes.classList.add('activeCont');

    })



})