import CustomInit from '../utils/custom-init';
import parselurl from '../routes/parsel-url';
import routes from '../routes/url';

class App {
  constructor({
    button, drawer, hero, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    CustomInit.init({
      button: this._button,
      drawer: this._drawer,
      hero: this._hero,
      content: this._content,
    });
    

    // kita bisa menginisiasikan komponen lain bila ada
  }

  async renderPage() {
    const url = parselurl.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
