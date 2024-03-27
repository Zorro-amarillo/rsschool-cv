const projectBtns = document.querySelectorAll('.projects__button'),
      projectTitles = document.querySelectorAll('.projects__title');

function addButtonBg() {
    projectBtns.forEach((btn, i) => {
        btn.style.background = `url('assets/img/projects/0${i + 1}_project.jpg')`;
        btn.style.backgroundSize = 'cover';
        btn.style.backgroundPosition = 'center';
    });
}

addButtonBg();

projectBtns.forEach((btn, i) => {
    btn.addEventListener('mouseover', () => {
        projectTitles[i].classList.add('projects__title_hover');
        projectTitles[i].style.transition = 'all';
    });

    btn.addEventListener('mouseout', () => {
        projectTitles[i].classList.remove('projects__title_hover');
        projectTitles[i].style.transition = 'all';
    });
});