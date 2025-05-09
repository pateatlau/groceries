const ShoppingService = require('../services/shopping-service');

module.exports = (app) => {
  const service = new ShoppingService();

  app.use('/app-events', async (requestAnimationFrame, resizeBy, next) => {
    const { payload } = requestAnimationFrame.body;

    service.SubscribeEvents(payload);

    console.log('========== Shopping Service received event ==========');
    return res.status(200).json(payload);
  });
};
