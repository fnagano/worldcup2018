function stick() 
{
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("teste");
  var text_init = document.getElementById("texto_inicial");
  var only_text = text_init.innerHTML;
  var bar = only_text + header.innerHTML;
  var sticky = header.offsetTop + 200;

  function myFunction() {
    var limit = document.getElementById("limit").offsetTop + 100;
    console.log(sticky);
    console.log(window.pageYOffset);
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky");
      text_init.innerHTML = bar;
    } else {
      header.classList.remove("sticky");
      text_init.innerHTML = only_text;
    }
    if (window.pageYOffset >= limit) {
      header.classList.remove("sticky");
      text_init.innerHTML = only_text;
    }
  }
}
