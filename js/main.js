window.onscroll = function() {scrollFunction()};
var navbar = document.getElementById("navbar");
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        navbar.style.display = "block";
        navbar.style.backgroundColor = " #ffffff";
        navbar.style.position = "fixed";
        navbar.style.color = "black";
        navbar.style.transition = "all 0.6s ease";
        navbar.style.width = "100%";
        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.43)";
        $('a#read-article').css("color", "black");
        $('.navbarand').css("color" , "black" + "important");
        $('#navbar').addClass('animated fadeIn');
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
         document.getElementById("navbar").style.boxShadow = "none";
          $('a#read-article').css("color", "white");
           $('#navbar').removeClass('animated fadeIn');
           $('#navbar').css("position" , "relative");
           // $(".welcome_text").css("padding-top" , "8%");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

// end if


var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}