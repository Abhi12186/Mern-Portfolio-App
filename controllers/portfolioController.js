const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

// transport
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

// controller
const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: 'Please provide all fields',
      });
    }

    // send email
    await transporter.sendMail({
      to: "abhi4008mg@gmail.com",
      from: "abhi4008mg@gmail.com",
      subject: "Regarding MERN Portfolio App",
      html: `
        <h5>Details</h5>
        <ul>
          <li><p><strong>Name:</strong> ${name}</p></li>
          <li><p><strong>Email:</strong> ${email}</p></li>
          <li><p><strong>Message:</strong> ${msg}</p></li>
        </ul>
      `,
    });

    return res.status(200).send({
      success: true,
      message: 'Your message was sent successfully!',
    });

  } catch (error) {
    console.error("Send Email Error:", error);
    return res.status(500).send({
      success: false,
      message: 'Send Email API Error',
      error: error.message,
    });
  }
};

module.exports = sendEmailController;
