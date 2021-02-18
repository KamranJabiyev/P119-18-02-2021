$(function(){
    // $("#list li").click(function(){
    //     alert($(this).text())
    // })

    // $(document).on("click","#list li",function(){
    //     alert($(this).text())
    // })

    // $(document).on("click","#add",function(){
    //     let li=$("<li>Test</li>")
    //     $("#list").append(li)
    // })

    // $(document).on("click","#add",function(){
    //     $(".rectangle").toggle(2000);
    //     // $(".rectangle").fadeToggle("slow").css({
    //     //     "background-color":"tomato",
    //     //     "height":"100px"
    //     // })

    //     // $(".rectangle").slideUp("slow",function(){
    //     //     $(this).fadeIn("slow")
    //     // })
    //     // $(".rectangle").slideToggle(3000);
    // })

    // $(document).on("click","#stop",function(){
    //     $(".rectangle").stop();
    // })

    // $("h1").text("<i>Bye Jquery</i>")
    // $("h1").html("<i>Bye Jquery</i>")

    // $(".text").val("Nese yaxshi deyilem")
    // let count=1;
    // $(document).on("click","#add",function(){
    //     let li=$(`<li>${count}</li>`)
    //     // $("#list").append(li)
    //     // $("#list").prepend(li)
    //     // $("#list").before(li)
    //     $("#list").after(li)


    //     count++;
    // })

    // $(document).on("click","#remove",function(){
    //     // $("#list").remove()
    //     $("#list").empty()

    // })
  
    // $(document).on("mouseenter",".rectangle",function(){
    //     console.log($(this).outerWidth(true));
    // })

    // console.log($("#center").parentsUntil("html"))

    // console.log($("#list").find("span"));

    //TASK- 
    //ACCORDIONS - 1
    // $(document).on("click",".card-header",function(){
    //     $(this).next().slideToggle("slow")
    // })


    //ACCORDIONS - 2

    $(document).on("click",".card-header",function(){
        if($(this).next()[0]!=$(".active")[0]){
            $(".active").slideUp("slow",function(){
                $(this).removeClass("active")
            });
            $(this).next().slideDown("slow",function(){
                $(this).addClass("active")
            });
        }
        
    })

});


