export const handleScroll = (element: HTMLElement): void => {
  const elementTop = element.getBoundingClientRect().top;
  const offset = 90;

  const scrollToPosition = window.scrollY + elementTop - offset;

  window.scrollTo({
    top: scrollToPosition,
    behavior: "smooth",
  });
};
