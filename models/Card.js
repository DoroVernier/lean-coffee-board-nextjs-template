import mongoose from "mongoose"; 

const { Schema } = mongoose; 


const cardSchema = new Schema({
	name: {type: String, required: true },
	text: {type: String, required: true},
	
	
}); 
// Prüfung: gibt es das Model schon ? || wenn nicht: erstelle ein neues Model mit dem Namen Card, basierend auf dem cardSchema
const Card = mongoose.models.Card || mongoose.model("Card", cardSchema); 

export default Card;