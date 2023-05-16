
document.addEventListener('DOMContentLoaded', function() {

    const currenturl = window.location.href;
    const navbarMenu = document.querySelectorAll(".header-menu a");


    console.log(navbarMenu[0]);
    navbarMenu.forEach((link)=>{
        console.log(link);

        const linkURL = link.href;
        console.log(linkURL)
        if(linkURL===currenturl){
            link.classList.add('active');
        }
    });

  // Your code here
});


