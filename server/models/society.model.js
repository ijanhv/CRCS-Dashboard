import mongoose from "mongoose";

const SocietySchema = new mongoose.Schema(
  {
    srNo: {
        type: Number,
        
    },
    name: {
        type: String,
        // required: true,
        // unique: true,
    },
    address: {
        type: String,
    },
    state: {
        type: String,
    },
    district: {
        type: String,
        // required: true,
    },
    dateOfRegistration: {
        type: String,

    }, 
    areaOfOperation: {
        type: String,
    },
    sectorType: {
        type: String,
    }
  },

  { timestamps: true }
);

const Society = mongoose.model("Society", SocietySchema);
export default Society;