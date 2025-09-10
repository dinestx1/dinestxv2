import booking from "../models/booking.js";

export const bookAppointment = async (req, res) => {
  try {
    const { categoryType, category, date, time } = req.body;

    if (!categoryType || !category || !date || !time) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Prevent duplicate booking for same date & time by same user
    
    const existing = await booking.findOne({ userId: req.user.id });
    if (existing) {
      return res.status(400).json({ message: "You have already booked a slot!" });
    }

    const appointment = new booking({
      userId: req.user?._id || null,
      categoryType,
      category,
      date,
      time,
    });

    await appointment.save();

    res.status(201).json({ message: "Appointment booked successfully!", appointment });
  } catch (error) {
    
    res.status(500).json({ message: "Failed to book appointment" });
  }
};

export const getUserAppointments = async (req, res) => {
  try {
    const appointments = await booking.find({ userId: req.user?._id }).sort({ date: 1 });
    res.json({ appointments });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch appointments" });
  }
};
