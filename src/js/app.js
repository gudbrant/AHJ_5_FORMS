const button = document.getElementsByClassName('btn-danger')[0];

function showTooltip() {
  const tooltip = document.getElementById('popover');
  const arrowTooltip = tooltip.getElementsByClassName('arrow')[0];
  tooltip.classList.toggle('hidden');

  if (tooltip.classList.contains('hidden')) return;

  tooltip.style.top = `${window.scrollY + button.getBoundingClientRect().top - tooltip.offsetHeight - arrowTooltip.offsetHeight}px`;
  tooltip.style.left = `${window.scrollX + button.getBoundingClientRect().left - (tooltip.offsetWidth / 2 - button.offsetWidth / 2)}px`;
}

button.addEventListener('click', showTooltip);
