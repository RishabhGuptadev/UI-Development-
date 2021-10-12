const tab= document.querySelectorAll(".style-tab");
const firstSection = document.querySelector(".first-section");

firstSection.addEventListener("click", removeActiveClass);

function removeActiveClass(e){
    console.log(e.target.id)
    tab.forEach(function(elem){
        elem.classList.remove("active");    
    })
    addClass(e);
}

function addClass(e){
    tab.forEach(function(elem){
        if(elem.id === e.target.id){
            elem.classList.add("active");
        }
    });
   console.log(e.target)
}

