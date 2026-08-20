const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment : String,
    rating : {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now  //if datee is not given then it will set it to curent date
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

module.exports = mongoose.model("Review",reviewSchema)