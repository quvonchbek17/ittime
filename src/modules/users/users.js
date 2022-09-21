const model = require("./model");


module.exports = {

  Post: async (req, res) => {
    try {
      const { username, fullname, email, password, phone } = req.body;
      if (!username || !fullname || !email || !password || !phone ) {
        res.json({
          status: 500,
          message: "Ma'lumotlar to'liq emas",
        });
        return;
      }

      const createdUser = await model.postUser(username, fullname, email, password, phone );

      if (createdUser) {
        res.json({
          status: 200,
          message: "Foydalanuvchi qo'shildi",
        });
      } else {
        res.json({
          status: 500,
          message: "Foydalanuvchi qo'shilmadi",
        });
      }
    } catch (err) {
      res.sendStatus(500);
    }
  },
  Update: async (req, res) => {
    const { email, newpassword } = req.body;
    try {

      await model.updatePassword(newpassword, email);

      res.json({
        status: 200,
        message: "Parol yangilandi",
      });
    } catch (err) {
      res.sendStatus(500);
    }
  },
};
