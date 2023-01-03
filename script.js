// ------------------------TIME COUNTDOWN-------------//

// Set the date we're counting down to
var countDownDate = new Date("Dec 5, 2022 18:20:25").getTime();
          
// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for hours, minutes and seconds
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"
  document.getElementById("demo1").innerHTML = hours + " ";
  document.getElementById("demo2").innerHTML = minutes + " ";
  document.getElementById("demo3").innerHTML = seconds + " ";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// ------------------------Slider of Images on Main Page-------------//
//Slider of Images on Main Page
      var index = 0;
      var slides = document.querySelectorAll(".slides");
      var dot = document.querySelectorAll(".dot");

      function changeSlide() {
        if (index < 0) {
          index = slides.length - 1;
        }

        if (index > slides.length - 1) {
          index = 0;
        }

        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dot[i].classList.remove("active");
        }

        slides[index].style.display = "block";
        dot[index].classList.add("active");

        index++;

        setTimeout(changeSlide, 2000);
      }

      changeSlide();
// ------------------------LOAD MORE-------------//


      //LoadMore
      const loadMore = document.querySelector(".btn-load-more");
      const loadMoreDiv = document.querySelector(".load-more-div");
      loadMore.addEventListener("click", ()=>{
        loadMoreDiv.style.display = 'flex';
    })