const nodemailer = require('nodemailer');

function sendEmail (subj, tex, email) {
    var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'interviewTestTBL@gmail.com',
        pass: '!A1597536428',
    },
});

var mailOptions = {
    from: 'Interview test <interviewTestTBL@gmail.com>',
    to: email,
    subject: subj,
    text: tex,
};

transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
        console.log(error);
        res.sendStatus(500);
    } else {
        console.log('Email sent');
        res.sendStatus(200);
    }
});
}

function isAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.send('You should login');
		res.status(404);
	}
}

module.exports = {sendEmail, isAuthenticated}