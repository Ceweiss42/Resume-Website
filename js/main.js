let lastScrollTop = 0;

function scrollNavBar()
{
  const currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down, hide the navbar
    document.querySelector(".navBar").style.transform = "translateY(-100%)";
  } else {
    // Scrolling up, show the navbar
    document.querySelector(".navBar").style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll;
}

window.addEventListener("scroll", scrollNavBar);


function invis()
{
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "none";
  
}

function switchVisible(i)
{
  invis();

  document.getElementById(String(i)).style.display = "flex";
}

