let flipper=document.querySelectorAll('#flipper')
console.log(flipper)
let panels=Array.from(document.querySelectorAll('.panel'))
flipper.forEach(flip=>{
    flip.addEventListener('click',e=>{
        panels.forEach(panel=>{
            if (flip.getAttribute('data-target')===panel.getAttribute('data-source')) {
               panel.classList.toggle('active')
            }
        })
    })
})