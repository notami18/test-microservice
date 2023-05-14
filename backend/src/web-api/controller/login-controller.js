const createLoginController = async (req, res, next) => {
  try {
    const data = req.body;
    const response = await createLoginService(data);
    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createLoginController,
};
