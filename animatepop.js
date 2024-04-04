// Función para verificar si el elemento está en la vista
function isElementInView(element, percentageScroll = 100) {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    // Retorna verdadero si el elemento está en el área visible, según el porcentaje del viewport
    return (elementTop <= windowHeight * (percentageScroll / 70)) && (elementTop >= 0);
  }
  
  // Evento que se dispara al hacer scroll
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.elemento-animado').forEach(element => {
      // Verifica si el elemento está en la vista y si la animación no ha sido ya aplicada
      if (isElementInView(element, 50) && !element.classList.contains('elemento-visible')) {
        element.classList.add('elemento-visible');
      }
    });
  });