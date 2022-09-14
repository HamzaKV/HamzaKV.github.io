window.addEventListener('DOMContentLoaded', main);

function main() {
    $('.nav-item').click(function() {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });

    let background = document.querySelector('.bg-svg');

    let mainPage = document.getElementById('main');
    let skillsPage = document.getElementById('skills');
    let projectPage = document.getElementById('projects');

    let mainLink = document.getElementById('main_link');
    let skillsLink = document.getElementById('skills_link');
    let projectsLink = document.getElementById('projects_link');

    mainLink.addEventListener('click', () => {
        if (mainPage.classList.contains('hidden')) {
            if(!skillsPage.classList.contains('hidden')) {
                skillsPage.classList.add('visuallyhidden');    
                skillsPage.addEventListener('transitionend', function(e) {
                    skillsPage.classList.add('hidden');
                }, {
                    capture: false,
                    once: true,
                    passive: false
                });
            }
            if(!projectPage.classList.contains('hidden')) {
                projectPage.classList.add('visuallyhidden');    
                projectPage.addEventListener('transitionend', function(e) {
                    projectPage.classList.add('hidden');
                }, {
                    capture: false,
                    once: true,
                    passive: false
                });
            }

            mainPage.classList.remove('hidden');
            setTimeout(function () {
                mainPage.classList.remove('visuallyhidden');
                background.style.fill = '#8000A0';
            }, 20);
        } /*else {
            mainPage.classList.add('visuallyhidden');    
            mainPage.addEventListener('transitionend', function(e) {
                mainPage.classList.add('hidden');
            }, {
              capture: false,
              once: true,
              passive: false
            });
        }*/
    }, false);

    skillsLink.addEventListener('click', () => {
        if (skillsPage.classList.contains('hidden')) {
            if(!mainPage.classList.contains('hidden')) {
                mainPage.classList.add('visuallyhidden');    
                mainPage.addEventListener('transitionend', function(e) {
                    mainPage.classList.add('hidden');
                }, {
                    capture: false,
                    once: true,
                    passive: false
                });
            }
            if(!projectPage.classList.contains('hidden')) {
                projectPage.classList.add('visuallyhidden');    
                projectPage.addEventListener('transitionend', function(e) {
                    projectPage.classList.add('hidden');
                }, {
                    capture: false,
                    once: true,
                    passive: false
                });
            }

            skillsPage.classList.remove('hidden');
            setTimeout(function () {
                skillsPage.classList.remove('visuallyhidden');
                background.style.fill = '#A0001D';
            }, 20);
        } 
    }, false);

    projectsLink.addEventListener('click', () => {
        if (projectPage.classList.contains('hidden')) {
            if(!mainPage.classList.contains('hidden')) {
                mainPage.classList.add('visuallyhidden');    
                mainPage.addEventListener('transitionend', function(e) {
                    mainPage.classList.add('hidden');
                }, {
                    capture: false,
                    once: true,
                    passive: false
                });
            }
            if(!skillsPage.classList.contains('hidden')) {
                skillsPage.classList.add('visuallyhidden');    
                skillsPage.addEventListener('transitionend', function(e) {
                    skillsPage.classList.add('hidden');
                }, {
                    capture: false,
                    once: true,
                    passive: false
                });
            }

            projectPage.classList.remove('hidden');
            setTimeout(function () {
                projectPage.classList.remove('visuallyhidden');
                background.style.fill = '#00A010';
            }, 20);
        }
    }, false);
}
