const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "rflmurad@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const senByeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "rflmurad@gmail.com",
    subject: "Sad to see you going!",
    text: `We are sorry to see you leaving ${name}. Let us know we could have done better.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  senByeEmail,
};
