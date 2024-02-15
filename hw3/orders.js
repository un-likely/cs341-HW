const express = require('express');
const router = express.Router();

// Define the orders route handler
router.get('/', (req, res) => {
  const orders = [
    { topping: 'plain', quantity: 2 },
    { topping: 'cherry', quantity: 1 },
    { topping: 'chocolate', quantity: 5},
  ];
  res.json(orders);
});

module.exports = router;


