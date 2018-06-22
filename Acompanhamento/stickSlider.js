function stick() 
{
  window.onscroll = function() {myFunction()};

  var header = document.getElementByClassName('next_matches');
  var sticky = header.offsetTop;

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
