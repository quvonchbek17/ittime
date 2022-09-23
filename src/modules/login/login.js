const model = require("./model");
const { sign } = require('../../utils/jwt')


module.exports = {
  token: async(req, res) => {
    try {
      const { email, password } = req.body;
      const user = await model.user(email, password)

      if (user.length > 0) {
        res.json({
          status: 200,
          token: sign({id: user[0].user_id})
        });
      } else {
        res.json({
          status: 404,
          token: null,
        });
      }
    } catch (err) {
      res.sendStatus(500);
    }
  }
};
