
//change title when change tab

var doctitle = document.title;
window.addEventListener("blur", function() {
  // document.title = "तुस्सी ना जाओ";
  document.title = "come back !";
});

window.addEventListener("focus", function() {
  document.title = doctitle;
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let navtoggle = document.querySelector(".icon");

    let sidebar = document.querySelector(".navlinks");

    navtoggle.addEventListener("click", function(){
        if(navtoggle.firstElementChild.classList.contains("fa-bars"))
        {
            console.log(navtoggle.firstElementChild.classList.replace("fa-bars","fa-times"));
        }
        else{
            console.log(navtoggle.firstElementChild.classList.replace("fa-times","fa-bars"));
        }
        sidebar.classList.toggle("show-navlinks");
    })      


