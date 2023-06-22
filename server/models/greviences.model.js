import mongoose from "mongoose";

const grevience = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    societyId: String,

},
    { timestamps: true }
);

const Grevience = mongoose.model("Grevience", grevience);
export default Grevience;