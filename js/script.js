let sections = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let heigt = sec.offsetHeight;
        let id = sec.getattributes('id')   
        
        if(top >= offset && top < offset + heigt  ) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' +id + ']').classList.add
                ('active');
            });


        };

    })
}; 

