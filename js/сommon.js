window.onload = function() {
    let links = document.querySelectorAll('a');

    // for(let i = 0; i < links.length; i++) {
    //     links[i].onclick = function(event) {
    //         event.preventDefault();
    //     };
    // }

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    
    /* определяем высоту одной секции */
    let sectionHeight = document.documentElement.clientHeight;

    /* динамически определяем текущее местонахождение скролла */

    let wheel = function(event) {
        let numberOfSection = Math.floor(window.pageYOffset / sectionHeight);
        if(event.deltaY > 0) {
            window.scrollTo(0,sectionHeight * (numberOfSection + 1));
        } else {
            window.scrollTo(0,sectionHeight * (numberOfSection - 1));
        }
    }

    document.onwheel = wheel;

    document.addEventListener('keyup', function(event) {
        let numberOfSection = Math.floor(window.pageYOffset / sectionHeight);
        if(event.code == 'ArrowUp') {
            window.scrollTo(0, sectionHeight * (numberOfSection));
        } else if (event.code == 'ArrowDown') {
            window.scrollTo(0, sectionHeight * (numberOfSection + 1));
        } 
    });

};
