const btn_pag_inicial = document.querySelector('.main_page')
const btn_sobre = document.querySelector('.about_me_page')
const btn_projetos = document.querySelector('.project_page')

btn_pag_inicial.addEventListener('click',(e)=>{
    btn_pag_inicial.classList.toggle('select')
    
    btn_projetos.classList.remove('select')
    btn_sobre.classList.remove('select')
    e.preventDefault()
})

btn_sobre.addEventListener('click',(e)=>{
    btn_sobre.classList.toggle('select')

    btn_pag_inicial.classList.remove('select')
    btn_projetos.classList.remove('select')
    e.preventDefault()
})

btn_projetos.addEventListener('click',(e)=>{
    btn_projetos.classList.toggle('select')

    btn_pag_inicial.classList.remove('select')
    btn_sobre.classList.remove('select')
    
    e.preventDefault()
})