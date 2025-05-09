const clickbtn = document.querySelectorAll('.clickbtn')
const poane1 = document.querySelectorAll('.poane1')

clickbtn.forEach(item=>{
    item.addEventListener('click',function(e){
        clickbtn.forEach(el=>{
            el.classList.remove('active_nav')
        })
        poane1.forEach(el=>{
            el.classList.remove('active_poane')
        })
        this.classList.add('active_nav')
        const tabId = this.getAttribute('data_nav')
        const activePhone = document.getElementById(tabId)
        // console.log(activePhone)
        activePhone.classList.add('active_poane')
    })
})