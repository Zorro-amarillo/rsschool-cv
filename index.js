const projectItems = document.querySelectorAll('.projects__item'),
    projectCards = document.querySelectorAll('.projects__card'),
    projectTitles = document.querySelectorAll('.projects__title');

const projectUrls = [
    'https://jumo.by/',
    'https://zorro-amarillo-react-ts.vercel.app/',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFE2024Q4/nonograms/',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFE2024Q4/simon-says/',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFE2024Q4/christmas-shop/',
    'https://zorro-amarillo-js30-random-game.netlify.app/',
    'https://zorro-amarillo-js30-audio-player.netlify.app/',
    'https://zorro-amarillo.github.io/cssMemeSlider/cssMemeSlider/index.html',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFE2023Q4/hangman/',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFE2023Q4/coffee-house/index.html',
    'https://zorro-amarillo-shelter.netlify.app/pages/main/',
    'https://zorro-amarillo-js30-image-gallery.netlify.app/',
    'https://zorro-amarillo-js30-eco-sounds.netlify.app/',
    'https://zorro-amarillo-portfolio.netlify.app/',
    'https://zorro-amarillo-travel.netlify.app/'
];

function addCardBg() {
    projectItems.forEach((item, i) => {
        const projectNum = i + 1;

        item.style.background = projectItems.length - projectNum > 8
            ? `url('assets/img/projects/${projectItems.length - i}_project.jpg')`
            : `url('assets/img/projects/0${projectItems.length - i}_project.jpg')`;
        item.style.backgroundSize = 'cover';
        item.style.backgroundPosition = 'center';
    });
}

addCardBg();

projectCards.forEach((card, i) => {
    card.addEventListener('mouseover', () => {
        projectTitles[i].classList.add('projects__title_hover');
        projectTitles[i].style.transition = 'all';
    });

    card.addEventListener('mouseout', () => {
        projectTitles[i].classList.remove('projects__title_hover');
        projectTitles[i].style.transition = 'all';
    });
});

document.querySelector('.projects').addEventListener('click', (e) => {
    projectItems.forEach((item, index) => {
        if ( [...item.children].includes(e.target) || [...item.children[0].children].includes(e.target) ) {
            window.open(projectUrls[index]);
        }
    });
});