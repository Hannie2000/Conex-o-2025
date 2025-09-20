$(".theme-switch").on("click", () => {
    $("body").toggleClass
    ("light-theme");
});

$(document).ready(function(){
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function(){ $('#autoWidth').removeClass('cS-hidden');}
    });
});









