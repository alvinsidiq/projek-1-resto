import CONFIGURASION from '../../globals/configurasion';

const DetailRestoku = (restaurant) => `
  <div class="container">
    <h2 class="resto-info_name">${restaurant.name}</h2>
    <img
      class="resto-info_img"
      src="${CONFIGURASION.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="${restaurant.name}"/>
    <div class="info">
      <p tabindex="0" class="resto-info_city" >Location: ${restaurant.city}</p>
      <p tabindex="0" class="resto-info_description">${restaurant.description}</p>
      <p tabindex="0" class="resto-info_address">Address : ${restaurant.address}</p>
      <p class="menu_title"style ="color: rgb(63, 29, 56);">Menu</p>
      
        
        <div class="grid-card">
        <img src="images/heros/maldis.png" alt="Gambar 2">
        <h2 ="color: rgb(255, 196, 112);">Makanan  </h2>
        <ul class="category_list">
        ${restaurant.menus.foods.map((drink) => `<li>${drink.name}</li>`).join('')}
              </ul>
      </div>
      

  <div class="grid-card">
  <img src="images/heros/maldis.png" alt="Gambar 2">
  <h2>Minuman</h2>
  <ul class="category_list">
          ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
</div>

      
      <p class="reviews_title"style ="color: rgb(255, 196, 112);">Customer Reviews</p>
      <div class="reviews">
        ${restaurant.customerReviews.map((review) => `
          <div class="resto_reviews">
          <img src="images/heros/maldis.png" alt=""  class="header_logo" >
            <p class="customer">${review.name}</p>
            <p class="review_customer">${review.review}</p>
            <p style ="color: rgb(255, 196, 112);"tabindex="0" class="item_rating">⭐️⭐️⭐️ Rating: ${restaurant.rating}</p>
            <p class="review_date"style ="rgb(63, 29, 56);">${review.date}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
`;

const createitemrestaurant = (restaurant) => `
  <div tabindex="0" class="post-item">
    <img
      tabindex="0"
      class="item_thumbnail"
      src="${CONFIGURASION.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}"
    />
    <div class="item_content">
      <p tabindex="0" class="item_rating">⭐️ Rating: ${restaurant.rating}</p>
      <h1 tabindex="0" class="item_title"><a class="interactive-link" " href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
      <p tabindex="0" class="item_description">${restaurant.description}</p>
      <p tabindex="0" class="item_city" >Location: ${restaurant.city}</p>
    </div>
  </div>
`;






export { 
  DetailRestoku, createitemrestaurant,
  
  
};
