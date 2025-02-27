import { Request, Response } from "express";
import User from "../models/user.model";
import mongoose from "mongoose";

// Create User
export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, age } = req.body;
        const newUser = new User({ name, email, age });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: "Could not create user" });
    }
};

// Get All Users (With Filters)
export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const filter = req.query.age ? { age: req.query.age } : {};
        const users = await User.find(filter);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Could not fetch users" });
    }
};

// Get Single User
export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Could not fetch user" });
    }
};

// Update User
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) res.status(404).json({ error: "User not found" });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: "Could not update user" });
    }
};

// Delete User
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) res.status(404).json({ error: "User not found" });
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Could not delete user" });
    }
};
