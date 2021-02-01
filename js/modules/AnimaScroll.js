export default class AnimaScroll{
    constructor(){
        this.art = document.querySelectorAll(".js-scroll")
    }
    addEvent(){
        window.addEventListener("scroll", ()=>{
            this.reageScroll()
        })
    }
    reageScroll(){
      this.art.forEach(item=>{
         let sectionTop =  item.getBoundingClientRect().top;
         if(sectionTop < 800) 
         item.classList.add("anima")
        
      })     
      
    }

    init(){
        this.addEvent()
    }
}
console.log("Rolando")