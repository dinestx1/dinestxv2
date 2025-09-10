import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  categoryType: { type: String, required: true }, // Inquiry / Career
  category: { type: String, required: true },     // UI/UX, Web Dev...
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

const booking= mongoose.model("Appointment", appointmentSchema);
export default booking;