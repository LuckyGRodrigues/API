// eslint-disable-next-line consistent-return
export default (req, res, next) => {
  try {
    const { nome } = req.body;
    if (!nome) {
      throw new Error('F');
    }
    next();
  } catch (error) {
    return res.status(500).send({
      message: 'Erro no middleware',
    });
  }
};
