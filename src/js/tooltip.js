export default class Tooltip {
  constructor() {
    this._tooltips = {};
  }

  showTooltip(message, element) {
    const tooltipElement = document.createElement('DIV');
    const tooltipElementTitle = document.createElement('H1');
    const tooltipElementText = document.createElement('DIV');

    tooltipElement.classList.add('container-btn-message');
    tooltipElementText.classList.add('btn-message');
    tooltipElementTitle.textContent = 'Popover title';
    tooltipElementText.textContent = message;

    const id = performance.now();

    this._tooltips.id = id;
    this._tooltips.element = tooltipElement;

    document.body.appendChild(tooltipElement);
    tooltipElement.prepend(tooltipElementTitle);
    tooltipElement.append(tooltipElementText);

    const { right } = element.getBoundingClientRect();

    tooltipElement.style.left = `${right - element.offsetWidth / 2 - tooltipElement.offsetWidth / 2}px`;
    tooltipElement.style.top = `${element.offsetHeight * 1.5}px`;

    return id;
  }

  removeTooltip() {
    const tooltip = this._tooltips;
    tooltip.element.remove();
  }
}
