function addResponsiveClass() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    // Remove existing classes if any
    button.classList.remove('mobile', 'tablet');

    // Check the viewport width and add the appropriate class
    if (window.innerWidth <= 768) {
      button.classList.add('mobile');  // For mobile viewports (768px and below)
    } else if (window.innerWidth <= 1024) {
      button.classList.add('tablet');  // For tablet viewports (between 769px and 1024px)
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleMenu = document.getElementById('toggleMenu');
  const collapsibleMenu = document.getElementById('collapsibleMenu');
  const handleClick = () => {
    collapsibleMenu.classList.toggle("hidden");
  };

  if (toggleMenu) {
    toggleMenu.addEventListener('click', handleClick);
  }

  addResponsiveClass();
});

window.addEventListener('resize', addResponsiveClass);
