const { Router } = require('express');
const { orderController, userController, restaurantController } = require('./controller');

const restaurantRouter = new Router();
// const userRouter = new Router();
// const orderRouter = new Router();

restaurantRouter.get('/', restaurantController.getRestaurants);         // localhost:3000/restaurants
// restaurantRouter.get('/:id', restaurantController.getRestaurant);       // localhost:3000/restaurants/5
restaurantRouter.post('/', restaurantController.addRestaurant);         // localhost:3000/restaurants (with restaurant object)
// restaurantRouter.put('/:id', restaurantController.updateRestaurant);    // localhost:3000/restaurants/38 (with restaurant object)
//restaurantRouter.delete('/:id', restaurantController.deleteRestaurant); // localhost:3000/restaurants/43

// userRouter.get('/', userController.get);
// userRouter.get('/:id', userController.get);
// userRouter.post('/', userController.post);
// userRouter.put('/:id', userController.put);
// userRouter.delete('/:id', userController.delete);

// orderRouter.get('/', orderController.get);
// orderRouter.get('/:id', orderController.get);
// orderRouter.post('/', orderController.post);
// orderRouter.put('/:id', orderController.put);
// orderRouter.delete('/:id', orderController.delete);

module.exports = { restaurantRouter };
