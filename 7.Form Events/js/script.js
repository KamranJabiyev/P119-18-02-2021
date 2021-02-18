//Form Events Start
// let text=document.getElementById("text");

// text.addEventListener("focus",function(){
//     // console.log("focus olundu");
// })

// text.addEventListener("blur",function(){
//     // console.log(`blur: ${this.value}`);
// })

// text.addEventListener("change",function(){
//     // console.log(`change: ${this.value}`);
// })

// text.addEventListener("keyup",function(){
//     // console.log(`keyup: ${this.value}`);
//     if(text.value.trim()==""){
//         text.nextElementSibling.classList.remove("d-none")
//     }else{
//         text.nextElementSibling.classList.add("d-none")
//     }
// })

// document.getElementById("city").onchange=function(){
//     // console.log(this.value)
// }

// let form=document.getElementById("register");

// form.addEventListener("submit",function(ev){
//     ev.preventDefault();
//     if(text.value.trim()==""){
//         text.nextElementSibling.classList.remove("d-none")
//     }else{
//         text.nextElementSibling.classList.add("d-none")
//     }
// })

//Form Events End


//Slider Start
// let leftBtn=document.querySelector("#slider .left");
// let rightBtn=document.querySelector("#slider .right");

// rightBtn.onclick=function(){
//     let active=document.querySelector("#slider .active");
//     if(active.nextElementSibling!=null){
//         active.nextElementSibling.classList.add("active");
//     }else{
//         document.querySelector("#slider .images").firstElementChild.classList.add("active")
//     }
//     active.classList.remove("active");
// }

$(document).on("click","#slider .right",RightSlide)

let interval=setInterval(RightSlide, 3000);

$(document).on("mouseenter","#slider .nav",function(){
    clearInterval(interval);
})

$(document).on("mouseleave","#slider .nav",function(){
    interval=setInterval(RightSlide, 3000);
})

function RightSlide(){
    let active=$("#slider .active");
    $("#slider .active").removeClass("active")
    if(active.next().length!=0){
        active.next().addClass("active");
    }else{
        $("#slider .images .item").first().addClass("active")
    }
}

// leftBtn.onclick=function(){
//     let active=document.querySelector("#slider .active");
//     if(active.previousElementSibling!=null){
//         active.previousElementSibling.classList.add("active");
//     }else{
//         document.querySelector("#slider .images").lastElementChild.classList.add("active")
//     }
//     active.classList.remove("active");
// }

//Slider End


// Tab Menu Start
// let menus=document.querySelectorAll(".menu div");
// let contents=document.querySelectorAll(".content div");


// menus.forEach(menu=>{
//     menu.addEventListener("click",function(){
//         let actElm=document.querySelector("#tab-menu .active")
//         actElm.classList.remove("active")
//         this.classList.add("active")

//         let selectedId=this.getAttribute("data-id");
//         contents.forEach(content=>{
//             if(content.getAttribute("data-id")==selectedId){
//                 content.classList.remove("d-none");
//             }else{
//                 content.classList.add("d-none");
//             }
//         })
//     })
// })

$(document).on("click","#tab-menu .menu div",function(){
    let id=$(this).attr("data-id");
    $(".active").removeClass("active");
    $(this).addClass("active");
    $("#tab-menu .content div").addClass("d-none");
    $(`[data-id=${id}]`).removeClass("d-none")
})
//Tab Menu End