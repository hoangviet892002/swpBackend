const nodemailer = require('nodemailer');

exports.sendMail = (toEmail, title, content) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: "cotienrangfpt@gmail.com",
            pass: "iyvchsfhpwwjequo"
        }
    });

    const mailOptions = {
        from: "cotienrangfpt@gmail.com",
        to: toEmail,
        subject: title,
        text: content,
    };

    return transporter.sendMail(mailOptions);

}

