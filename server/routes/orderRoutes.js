const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to create a new order
router.post('/', orderController.createOrder);

// Route to get all orders
router.get('/', orderController.getAllOrders);

// Route to get a specific order by ID
router.get('/:orderId', orderController.getOrderById);

// Route to update an order by ID
router.put('/:orderId', orderController.updateOrder);

// Route to delete an order by ID
router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;
