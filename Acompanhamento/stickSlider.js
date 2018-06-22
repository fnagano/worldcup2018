function stick() 
{
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("teste");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}
