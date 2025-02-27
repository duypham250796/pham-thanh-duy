import mongoose from 'mongoose';

const ScoreSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    score: { type: Number, default: 0 }
});

export const Score = mongoose.model('Score', ScoreSchema);
