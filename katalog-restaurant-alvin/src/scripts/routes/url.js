import DaftarRestaurant from '../views/pages/list-restaurant';
import DetailResto from '../views/pages/detail';

const routes = {
  '/': DaftarRestaurant, // default page
  '/list-restaurant': DaftarRestaurant,
  
 //'/favorite': Favorite,
  '/detail/:id': DetailResto,
};


export default routes;
