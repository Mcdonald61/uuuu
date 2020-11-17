var navbardisplay = document.getElementById('hamburger').addEventListener('click', displayNavbar)
var navbarhide = document.getElementById('close').addEventListener('click', closeNavbar)

document.getElementById('close').style.display = 'none'
function displayNavbar(){
    // navbardisplay
    document.getElementById('close').style.display = 'block'
    document.getElementById('hamburger').style.display = 'none'
    document.getElementById('navbarSupportedContent').style.display = 'block'
}


function closeNavbar(){
    // navbardisplay
    document.getElementById('close').style.display = 'none'
    document.getElementById('hamburger').style.display = 'block';
    document.getElementById('navbarSupportedContent').style.display = 'none'
}