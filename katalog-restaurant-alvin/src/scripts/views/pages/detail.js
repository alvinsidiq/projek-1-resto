
import parselurl from '../../routes/parsel-url';
import Datarestaurant from '../../data/data-restaurant';
import { DetailRestoku } from '../templates/restaurant-content';

const DetailResto = {
  async render() {
    return `
    <section class="content">
      <div class="katalog">
        <h1 tabindex="0" class="katalog_label">Detail Restaurant</h1>
        <div class="resto-detail">
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const url = parselurl.parseActiveUrlWithoutCombiner();
    const detail = await Datarestaurant.detailRestaurant(url.id);
    const detailContainer = document.querySelector('.resto-detail');
    detailContainer.innerHTML = DetailRestoku(detail);

    this._hideHero();
  },

  _hideHero() {
    const heroContent = document.querySelector('hero-section');
    heroContent.style.display = 'none';
  },
};



export default DetailResto;
