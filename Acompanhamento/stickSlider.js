function stick() 
{
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("teste");
  var sticky = header.offsetTop;
  console.log(sticky);
  console.log(window.pageYOffset);

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}
