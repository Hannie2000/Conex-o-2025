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







let toggleDropdown = document.querySelector('.menu-icon');
let dropdown = document.querySelector('.dropdown-nav');
let dropdownItems = document.querySelectorAll('.dropdown-nav a');
let form = document.getElementById('question');

// Prevent form default and Alert
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Your question has been submitted");
});

// Toggle dropdown
function checkState () {
    if (dropdown.classList.contains("closed")) {
        dropdown.classList.remove("closed");
    } else {
        dropdown.classList.add("closed");
    }
}

toggleDropdown.addEventListener('click', checkState);

// Close dropdown when user clicks a menu item
dropdownItems.forEach((item) => {
    item.addEventListener('click', checkState);
});



  const imagem = document.getElementById('faivicon-32x32');
    const audio = document.getElementById('faivicon-32x32');

    imagem.addEventListener('click', function() {
        // Verifica se o áudio está pausado e o reproduz, caso contrário, pausa
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });