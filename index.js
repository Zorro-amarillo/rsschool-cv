const projectBtns = document.querySelectorAll('.project__button'),
      projectTitles = document.querySelectorAll('.project__title');

function addButtonBg() {
    projectBtns.forEach((btn, i) => {
        btn.style.background = `url('assets/img/projects/0${i + 1}_project.jpg')`;
    });
}

addButtonBg();

projectBtns.forEach((btn, i) => {
    btn.addEventListener('mouseover', () => {
        projectTitles[i].classList.add('project__title_hover');
        projectTitles[i].style.transition = 'all';
    });

    btn.addEventListener('mouseout', () => {
        projectTitles[i].classList.remove('project__title_hover');
        projectTitles[i].style.transition = 'all';
    });
});