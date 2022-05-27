document.addEventListener('DOMContentLoaded', ()=>{

    let btnClose = document.getElementById('close_adv');
    
    btnClose.addEventListener('click', ()=>{
        closeAdv();
    })
    
    const closeAdv = ()=>{
        document.querySelector('.publicidad').classList.add("oculto");
    }
});