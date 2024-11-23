import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  about: {
    type: String,
    default: "New user",
  },
  pic: {
    type: String,
    default: "https://example.com/default-pic.png",
  },
  linkdin: {
    type: String,
    default: "",
  },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User; // Exporting the User model