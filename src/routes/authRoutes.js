import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

//reg new user /auth/register post
router.post("/register", (req, res) => {
    // const body = req.body;
    const {username, password} = req.body;
    res.sendStatus(201);

});


router.post("/login", (req, res) => {

});

export default router;