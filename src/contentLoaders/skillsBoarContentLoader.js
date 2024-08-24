(() => {
  "use strict";
  document.addEventListener('DOMContentLoaded', () => {
    fetch('json/skills-data.json')
      .then(response => response.json())
      .then(data => {
        const skillsContainer = document.querySelector('.iconsOfSkills');
        skillsContainer.innerHTML = '';

        data.forEach(skill => {
          let skillHTML = `
            <div class="boxCel${skill.debug ? ' erroring' : ''}">
              <div class="iconSkillsSet">
                <div class="circle" id="${skill.id}"></div>
                <svg>
                  <circle cx="40" cy="40" r="40"></circle>
                  <circle id="${skill.circleId}" cx="40" cy="40" r="40"></circle>
                </svg>
                <div class="iconSkillSetActiveItem">
                  <div class="IconDivImg" data-link="${skill.link}">
                    <a href="${skill.link}" target="_blank" rel="noopener noreferrer">
                      <img src="${skill.imgSrc}" alt="${skill.alt}">
                    </a>
                  </div>
                  <h6 class="skillName pt-2">${skill.skillName}</h6>
                </div>
              </div>
            </div>
          `;
          skillsContainer.insertAdjacentHTML('beforeend', skillHTML);
        });

        document.querySelectorAll('.IconDivImg').forEach(div => {
          div.addEventListener('click', () => {
            const link = div.querySelector('a').href;
            window.open(link, '_blank', 'noopener,noreferrer');
          });
        });
      })
      .catch(error => console.error('Error loading skillsBoarContentLoader data...', error));
  });
})();
