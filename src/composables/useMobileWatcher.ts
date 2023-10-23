export const useMobileWatcher = (breakpoint = 1024) => {
  const { width } = useWindowSize();
  const isMobile = ref<IS_MOBILE>(null);

  watch(width, (val) => {
    isMobile.value = val < breakpoint;
  });

  onMounted(() => {
    isMobile.value = width.value < breakpoint;
  });

  return isMobile;
};
