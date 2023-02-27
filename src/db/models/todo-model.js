const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        trim: true,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true, versionKey: false});

const TodoModel = model("Todo", todoSchema);
module.exports = TodoModel;