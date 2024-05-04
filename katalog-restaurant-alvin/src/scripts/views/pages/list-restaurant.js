import Datarestaurant from '../../data/data-restaurant';
import {  createitemrestaurant } from '../templates/restaurant-content';

const DaftarRestaurant = {
  async render() {
    return `
      <section class="content">  
        <div class="katalog">
          <h1 tabindex="0" class="katalog_label">Explore Restaurant</h1>
          <div class="posts">
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await Datarestaurant.listRestaurant();
    const restaurantsContainer = document.querySelector('.posts');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=  createitemrestaurant(restaurant);
    });

    this._showHero();
  },
   _showHero() {
    const heroContent = document.querySelector('hero-section');
    heroContent.style.display = 'block';
  },
};

export default DaftarRestaurant;
