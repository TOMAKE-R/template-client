import { gsap } from 'gsap';

export const useSubstituteScrollbar = (
  state: boolean,
  substitutePadding: string[],
) => {
  const scrollbarWidth = ref(window.innerWidth - document.body.offsetWidth);
  const bodyOnState = {
    overflow: 'hidden',
    paddingRight: `${scrollbarWidth.value}px`,
  };
  const bodyOffState = { overflow: 'auto', paddingRight: 0 };

  gsap.set('body', state === true ? bodyOnState : bodyOffState);

  substitutePadding.forEach((el) => {
    if (!document.querySelector(el)) return;
    if (state === false) {
      scrollbarWidth.value = window.innerWidth - document.body.offsetWidth;
    }

    const padding = ref(gsap.getProperty(el, 'paddingRight'));
    if (typeof padding.value === 'string') {
      padding.value = parseFloat(padding.value);
    }

    const value =
      state === true
        ? scrollbarWidth.value + padding.value
        : padding.value > scrollbarWidth.value
        ? padding.value - scrollbarWidth.value
        : 0;

    gsap.set(el, { paddingRight: state === true ? `${value}px` : '' });
  });
};
