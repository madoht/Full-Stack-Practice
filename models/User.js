import mongoose from "mongoose";
import passportLocal from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    googleId: Number,
    facebookId: Number,
    githubId: Number,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    videos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }]
});

UserSchema.plugin(passportLocal, {
    usernameField: "email"
});

const model = mongoose.model("user", UserSchema);

export default model;