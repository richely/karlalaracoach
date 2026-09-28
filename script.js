document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? 'Cerrar' : 'Menú';
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = 'Menú';
      });
    });
  }

  const mapContent = {
    aumentar: ['Aumentar', 'Trabajo donde humano + IA producen mejores resultados.', 'Ni reemplazo ni resistencia: combinar inteligencias para elevar la calidad.'],
    eliminar: ['Eliminar', 'Trabajo que ya no necesita existir.', 'Antes de automatizar, cuestionar si la actividad sigue creando valor.'],
    automatizar: ['Automatizar', 'Trabajo repetible donde la IA puede liberar tiempo.', 'La automatización funciona mejor cuando el objetivo y la responsabilidad siguen claros.'],
    practicar: ['Practicar', 'Trabajo que desarrolla experiencia y dominio.', 'No toda fricción es desperdicio: algunas tareas construyen capacidad.'],
    proteger: ['Proteger', 'Responsabilidades que requieren participación humana deliberada.', 'Criterio, relación, aprendizaje y responsabilidad no se delegan por defecto.']
  };

  const mapResult = document.querySelector('[data-map-result]');
  document.querySelectorAll('[data-map]').forEach((tab) => {
    tab.addEventListener('click', () => {
      const content = mapContent[tab.dataset.map];
      if (!content || !mapResult) return;
      document.querySelectorAll('[data-map]').forEach((item) => {
        const active = item === tab;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      });
      mapResult.querySelector('.map-label').textContent = content[0];
      mapResult.querySelector('h3').textContent = content[1];
      mapResult.querySelector('p').textContent = content[2];
    });
  });

  const contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = contactForm.querySelector('.form-status');
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      status.textContent = 'Tu información está lista. Conecta este formulario al correo de Karla antes de publicar para enviar la solicitud.';
      status.classList.add('is-visible');
    });
  }
});
