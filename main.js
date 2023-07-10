const leftArrow = document.querySelector('.arrow1');
const rightArrow = document.querySelector('.arrow2');
const images = document.querySelectorAll('.content');
const rounds = document.querySelectorAll('.round');

let zIndex = 0;

function arrowSlide(){
    for(let i = 0;i < images.length;i++){
        images[i].style.cssText = 'opacity: 0;'
    }

    if(zIndex > images.length - 1){
        zIndex = 0
    }else if(zIndex < 0){
        zIndex = images.length - 1;
    }
    images[zIndex].style.cssText = `opacity: 1;`
}

leftArrow.addEventListener('click',() =>{
    zIndex--;
    arrowSlide()
    getRound(zIndex)
    console.log('clicked');
})

rightArrow.addEventListener('click',() =>{
    zIndex++;
    arrowSlide()
    getRound(zIndex)
    console.log('clicked');
})

rounds.forEach((item,index) =>{
    item.addEventListener('click',() =>{
        getRound(index)
        zIndex = index;
        arrowSlide()
    })
})

function getRound(nth){
    for(let i = 0;i < images.length;i++){
        rounds[i].style.cssText = 'background: none;'
    }
    rounds[nth].style.cssText = 'background-color: white;'
}