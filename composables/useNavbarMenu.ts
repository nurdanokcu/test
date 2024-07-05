export const useNavbarMenu = () => {
  const useShowMenu = () => useState('showMenu', () => false);
  const showMenu = useShowMenu();

  const manageNoScroll = () => {
    if (document.body.classList.contains('no-scroll')) {
      document.body.classList.remove('no-scroll');
    } else {
      document.body.classList.add('no-scroll');
    }
  };
  const toggleMenu = () => {
    showMenu.value = !showMenu.value;
    manageNoScroll();
  };

  const closeMenu = () => {
    showMenu.value = false;
    document.body.classList.remove('no-scroll');
  };

  return {
    showMenu,
    useShowMenu,
    toggleMenu,
    closeMenu,
  };
};
