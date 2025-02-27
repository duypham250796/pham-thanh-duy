import { Request, Response } from 'express';
import { Score } from '../models/score.model';
import { io } from '../server'; // Import socket instance

export const updateScore = async (req: Request, res: Response):Promise<void> => {
    const { userId, actionToken } = req.body;

    if (!userId || !actionToken) 
        res.status(400).json({ error: 'Invalid request' });

    // Validate actionToken (dummy check for now)
    if (actionToken !== 'valid-token') 
        res.status(403).json({ error: 'Unauthorized' });

    let userScore = await Score.findOne({ userId });
    if (!userScore) userScore = new Score({ userId, score: 0 });

    userScore.score += 10; // Increment score (adjust logic as needed)
    await userScore.save();

    // Notify all clients about the score update
    io.emit('scoreUpdate', { userId, score: userScore.score });
    res.json({ success: true, newScore: userScore.score });
};

export const getTopScores = async (req: Request, res: Response) => {
    const topScores = await Score.find().sort({ score: -1 }).limit(10);
    res.json(topScores);
};
