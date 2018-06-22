function stick() 
{
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("teste");
  var sticky = header.offsetTop + 200;

  function myFunction() {
    console.log(sticky);
    console.log(window.pageYOffset);
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}
