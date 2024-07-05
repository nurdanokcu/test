/**
 * Collapses a given HTML section. This function reduces the height of the element to zero, effectively hiding its content. The collapse transition is achieved by setting the initial height and then transitioning it to zero. It also marks the element with a `data-collapsed` attribute set to `true`.
 *
 * @param {HTMLElement} content - The HTMLElement representing the section to be collapsed. The function will immediately return if this parameter is not provided or is null.
 */
export const collapseSection = (content: HTMLElement) => {
  const element = content! as HTMLElement;
  if (!element) {
    return;
  }
  const sectionHeight = element.scrollHeight;
  element.style.height = sectionHeight + 'px';
  requestAnimationFrame(() => {
    element.style.height = 0 + 'px';
  });
  element.setAttribute('data-collapsed', 'true');
};

/**
 * Expands a previously collapsed HTML section. This function sets the height of the element to its scroll height, making its content visible again. The expand transition is smooth due to the browser's handling of height changes. It also updates the `data-collapsed` attribute of the element to `false`.
 *
 * @param {HTMLElement} content - The HTMLElement representing the section to be expanded. The function will immediately return if this parameter is not provided or is null.
 */
export const expandSection = (content: HTMLElement) => {
  const element = content;
  if (!element) {
    return;
  }
  const sectionHeight = element.scrollHeight;
  element.style.height = sectionHeight + 'px';
  requestAnimationFrame(() => {
    element.style.height = sectionHeight + 'px';
  });
  element.setAttribute('data-collapsed', 'false');
};
