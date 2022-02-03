const catchAsyncError = require('../middlewares/catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler')
const sendEmail = require('../utils/sendEmail');

exports.contactForm = catchAsyncError(async (req, res, next) => {
    const { name, email, phone, message } = req.body;

    try {
        await sendEmail({
            email: process.env.YOURMAIL,
            subject: "Email from Your Client",
            message: `Please find the message Below \n\nName: ${name}\n\nEmail: ${email}\n\nPhone No: ${phone}\n\nMessage: ${message}`
        });

        res.status(200).json({
            success: true,
            message: `Email sent successfully`
            // message: `Email sent to ${user.email} successfully`
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }
})

exports.docDownload = catchAsyncError(async (req, res, next) => {
    try {


        res.status(200).json({
            data: require('../sample.txt')
        })
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error,
            message: "You Fucked up something"
        })
    }
})