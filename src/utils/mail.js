const nodemailer = require('nodemailer')

const mailSender = async(email, number) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ittime932@gmail.com',
            pass: 'jpbbhfmpdpprtgvz'
        }
    })

    const info = await transporter.sendMail({
        from: 'ittime932@gmail.com',
        to: email,
        subject: 'IT TIME',
        html: `
          <p>Sizning tasdiqlash kodingiz: </p>
          <h2>${number}</h2>
        `
    })
}

module.exports = mailSender