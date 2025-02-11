import {Schema,model} from "mongoose";   

const projectSchema = new Schema({
    public_id: { type: String, required: true },
    url: { type: String, required: true },
}, { timestamps: true });

export default  model('Image', projectSchema);
