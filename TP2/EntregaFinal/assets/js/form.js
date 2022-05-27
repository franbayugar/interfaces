const targets = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]');
const tab = document.querySelectorAll(".pestaña");
targets.forEach(target => {

    target.addEventListener('click', () => {

        content.forEach(c => {
            c.classList.remove('activeForm')

        })
        tab.forEach(p => {
            p.classList.remove('activeTab');

        })
        target.classList.add('activeTab');

        const t = document.querySelector(target.dataset.target);

        t.classList.add('activeForm');





    })
})