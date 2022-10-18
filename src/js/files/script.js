// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

const desktopMenuButton = document.querySelector('.desktop-menu__burger');
const desktopMenu = document.querySelector('.desktop-menu__modal-menu');

if (desktopMenuButton && desktopMenu) {
  document.addEventListener('click', (e) => {
    if (e.target == desktopMenuButton) {
      desktopMenu.classList.toggle('_active');
    } else if (
      !e.target.closest('.desktop-menu__burger') &&
      !e.target.closest('.desktop-menu__modal-menu') &&
      desktopMenu.classList.contains('_active')
    ) {
      desktopMenu.classList.remove('_active');
    }
  });
}
