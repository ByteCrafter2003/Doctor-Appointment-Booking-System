import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },

    // Only Current Location (Latitude & Longitude)
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
        validate: {
          validator: function (coords) {
            return coords.length === 2 &&
                   coords[0] >= -180 && coords[0] <= 180 && // Longitude range
                   coords[1] >= -90 && coords[1] <= 90;    // Latitude range
          },
          message: "Coordinates must be in [longitude, latitude] format."
        }
      }
    }
  }
);

// Create geospatial index for location-based queries
doctorSchema.index({ location: "2dsphere" });

const doctorModel = mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

export default doctorModel;
