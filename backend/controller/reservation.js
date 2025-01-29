const ErrorHandler = require("../error/error.js");

const reservation = require("../Models/reservationSchema.js");

 const sendreservation = async (req, res, next) => {
    const { firstname, lastname, email, phone, date, time } = req.body;
    if (!firstname || !lastname || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill full reservation form!", 400));
    }

    try {
        await reservation.create({ firstname, lastname, email, phone, date, time });
        res.status(200).json({
            success: true,
            message: "Reservation Sent Successfully"
        });
    } catch (err) {
        if (err.name === "ValidationError") {
            const ValidationErrors = Object.values(err.errors).map(
                (e) => e.message
            );
            return next(new ErrorHandler(ValidationErrors.join(", "), 400));
        }
    };
}

module.exports = {sendreservation};
