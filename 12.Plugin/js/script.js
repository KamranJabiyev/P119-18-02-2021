$('.owl-carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$("header").parallax("50%",0.5)

$(document).ready(function() {
    $('#example').DataTable();
} );