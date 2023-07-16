const nodemailer = require('nodemailer');
const config = require('./config');

exports.sendMail = (toEmail, title, content) => {
    const transporter = nodemailer.createTransport({
        host: config.mailer.host,
        port: config.mailer.port,
        auth: {
            user: config.mailer.username,
            pass: config.mailer.password
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

