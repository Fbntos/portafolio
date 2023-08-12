$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

document.getElementById("show-modal").addEventListener("click", function() {
  var modal = document.getElementById("myModal");
  var closeModal = function() {
      modal.style.display = "none";
  };

  modal.style.display = "block";
  modal.querySelector(".close").addEventListener("click", closeModal);

  var carousel = document.querySelector("#myModel .carousel");
  var images = document.querySelectorAll("#myModal .carousel img");
  var currentIndex = 0;

  function showImage(index) {
      if (index < 0) {
          currentIndex = images.length - 1;
      } else if (index >= images.length) {
          currentIndex = 0;
      }

      images.forEach(function(item, idx) {
          item.style.display = idx === currentIndex ? "block" : "none";
      });
  }

  showImage(currentIndex);

  modal.querySelector(".prev").addEventListener("click", function() {
      currentIndex--;
      showImage(currentIndex);
  });

  modal.querySelector(".next").addEventListener("click", function() {
      currentIndex++;
      showImage(currentIndex);
  });
});


document.getElementById("show-modal-2").addEventListener("click", function() {
  var modal = document.getElementById("myModal-2");
  var closeModal = function() {
      modal.style.display = "none";
  };

  modal.style.display = "block";
  modal.querySelector(".close").addEventListener("click", closeModal);

  var carousel = document.querySelector("#myModal-2 .carousel"); // Cambia el selector
  var images = document.querySelectorAll("#myModal-2 .carousel img"); // Cambia el selector
  var currentIndex = 0;

  function showImage(index) {
      if (index < 0) {
          currentIndex = images.length - 1;
      } else if (index >= images.length) {
          currentIndex = 0;
      }

      images.forEach(function(item, idx) {
          item.style.display = idx === currentIndex ? "block" : "none";
      });
  }

  showImage(currentIndex);

  modal.querySelector(".prev").addEventListener("click", function() {
      currentIndex--;
      showImage(currentIndex);
  });

  modal.querySelector(".next").addEventListener("click", function() {
      currentIndex++;
      showImage(currentIndex);
  });
});