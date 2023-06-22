import mongoose from 'mongoose';

const registeredSociety = new mongoose.Schema({
  address: String,
  authorizedName: String,
  confirmPassword: String,
  designation: String,
  district: String,
  email: {
    type: String,
    unique: true
},
  mobileNumber: {
    type: String,
    unique: true
  },
  name: String,
  panNo: String,
  password: String,
  serviceTaxNo: String,
  societyType: {
    type: String,
    default: undefined
  },
  state: String,
  tanNo: String,
  approved: Boolean,

},
{ timestamps: true }
);

const ResisteredSociety =  mongoose.model('RegisteredSociety', registeredSociety);
export default ResisteredSociety;

