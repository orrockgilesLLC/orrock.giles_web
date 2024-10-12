// controllers/contactController.js
exports.handleContactForm = (req, res) => {
    const { name, email, message } = req.body;
  
    console.log(`New Contact Form Submission: Name: ${name}, Email: ${email}, Message: ${message}`);
    
    // INCLUDE FUTURE LOGIC HERE
  
    res.status(200).send('Form submitted successfully!');
  };