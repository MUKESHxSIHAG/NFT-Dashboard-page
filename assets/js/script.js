$('.move_sl').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 0,
    prevArrow: $(".previous"),
    nextArrow: $(".Next_Btn"),
    // cssEase: 'linear',
    
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
});

var nightmode = document.getElementById("nightmode")
nightmode.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("darktheme")) {
        nightmode.src = "assets/images/png/light.png"
    } else {
        nightmode.src = "assets/images/SVG/SETTINGS-ICON.svg"
            
    }
}

// *******ROBIN*******

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}