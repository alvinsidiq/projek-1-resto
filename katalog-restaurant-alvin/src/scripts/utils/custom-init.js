const CustomInit = {
  init({
    button, drawer, hero, content,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

  //   window.addEventListener('scroll', (event) => {
  //     this._addShadow(event, drawer);
  //     this._addBackgroundColor(event, drawer);
  //   });
   },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  

  
 },
};

export default CustomInit;
