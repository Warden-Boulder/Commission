function Nav() {
  let navigationSelect = document.querySelector('select');
  if (!navigationSelect) return;
  let selectedValue = navigationSelect.value;

  switch(selectedValue) {
    case 'about':
      window.location.href = 'about-me.html';
      break;
    case 'add':
      window.location.href = 'add-ons.html';
      break;
    case 'app':
      window.location.href = 'apprentice.html';
      break;
    case 'contact':
      window.location.href = 'contact.html';
      break;
    case 'creation':
      window.location.href = 'creation.html';
      break;
    case 'index':
      window.location.href = 'index.html';
      break;
    case 'ink':
      window.location.href = 'inkweaver.html';
      break;
    case 'forge':
      window.location.href = 'forge-board.html';
      break;
    case 'masterwork':
      window.location.href = 'masterwork.html';
      break;
    case 'sanctum':
      window.location.href = 'sanctum-board.html';
      break;
    case 'status':
      window.location.href = 'status.html';
      break;
    case 'start':
    case 'starter':
      window.location.href = 'starter.html';
      break;
    case 'standard':
      window.location.href = 'standard.html';
      break;
    case 'testimonials':
      window.location.href = 'testimonial.html';
      break;
    case 'tos':
      window.location.href = 'tos.html';
      break;
    default:
      break;
  }
}