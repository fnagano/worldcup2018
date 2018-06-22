function stick() 
{
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("teste");
  var sticky = header.offsetTop;

  function myFunction() {
    console.log(sticky);
    console.log(window.pageYOffset);
    if (window.pageYOffset >= sticky + 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}
