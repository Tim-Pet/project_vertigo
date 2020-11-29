//Change Header animations to slide in

//Fade in Header upon clicking left
$(document).ready(function () {
    $('#home-button-white').click(function() {
        $("#header-white").toggle("fade", 2000);//header fades in
        $(".home-landing").delay(1000).fadeToggle(1000);//home-landing fades out
        $(".photo-section").delay(2500).fadeToggle(1500);//photo-section fades in
        var el = $('#home-left'),
            w = el.width();
            el.animate({ width: w * 1.1 }, 'fast'); //vertigo studio appears all black on white
    });
});
//Fade in Header upon clicking right
$(document).ready(function () {
        $('#home-button-black').click(function() {
            $("#header-black").toggle("fade", 1500); //header fades in
            $(".home-landing").delay(1000).fadeToggle(1000);//home-landing fades out
            $(".photo-section").delay(2500).fadeToggle(1500);//photo-section fades in
            var el = $('#home-left'),
            w = el.width();
            el.animate({ width: w * 0 }, 'fast'); //vertigo studio appears all white on black
    });
});

//Vertigo Studios moves into the Logo
// add subbar to navbar
