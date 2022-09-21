const model = require("./model");
const mail = require('../../utils/mail')
module.exports = {

    PostEmail: async (req, res) => {
        try {
          const { email } = req.body;
          if(!email){
            res.json({
              status: 500,
              message: "Not verify",
            });
            return
          }

        let number = Math.floor(Math.random()*1000000)
        mail(email, number)
        await model.verifyEmail(email, number);
        res.json({
            status: 200,
            message: "Emailga tasdiqlash kodi yuborildi ",
        });

        } catch (err) {
          res.sendStatus(500);
        }
      },
      PostNumber: async (req, res) => {
        try {
          const { number } = req.body;
          if(!number){
            res.json({
              status: 500,
              message: "Kod kelmadi",
            });
            return
          }

        const [ verifyNum ] = await model.verifyNumber(number);
        if(verifyNum){
            res.json(verifyNum);
            await model.deleteverify(verifyNum.verify_id);
        } else {
            res.json({
                status: 404,
                message: "Tasdiqlash kodi noto'g'ri ",
            });
        }

        } catch (err) {
          res.sendStatus(500);
        }
      },
};
