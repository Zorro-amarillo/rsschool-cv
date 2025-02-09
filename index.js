const projectItems = document.querySelectorAll('.projects__item'),
    projectCards = document.querySelectorAll('.projects__card'),
    projectTitles = document.querySelectorAll('.projects__title');

const projectUrls = [
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFE2024Q4/nonograms/',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFE2024Q4/simon-says/',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFE2024Q4/christmas-shop/',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFEPRESCHOOL/js30-random-game/',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFE2022Q1/js30-audio-player/',
    'https://zorro-amarillo.github.io/cssMemeSlider/cssMemeSlider/index.html',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFE2023Q4/hangman/',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFE2023Q4/coffee-house/index.html',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFE2022Q1/shelter/pages/main/',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFEPRESCHOOL/js30-2/',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFEPRESCHOOL/js30-1/',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFEPRESCHOOL/portfolio/',
    'https://rolling-scopes-school.github.io/zorro-amarillo-JSFEPRESCHOOL/travel/'
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