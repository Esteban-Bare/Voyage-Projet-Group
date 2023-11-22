
  // Sélection de l'image et du menu
  var image = document.getElementById('image' , 'image2', 'europe');
  var menu = document.getElementById('menu', 'menu2', 'menu3');

  // Ajout d'un écouteur d'événements pour le clic sur l'image
  image.addEventListener('click', function() {
    // Basculement de la classe 'active' du menu
    menu.classList.toggle('active');
  });

  image2.addEventListener('click', function() {
    menu2.classList.toggle('active')

  });
  europe.addEventListener('click', function() {
    menu3.classList.toggle('active')
  });


  //Pour le fonctionnement du diaporama avec 2sec entre chaque image//

  let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}