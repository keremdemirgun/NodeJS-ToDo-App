import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

//reg new user /auth/register post
router.post("/register", (req, res) => {
    // const body = req.body;
    const {username, password} = req.body;
    //encrypte pass
    const hashedPassword = bcrypt.hashSync(password, 8);
    
    //save user to the db
    try{
        const insertUser = db.prepare(`INSERT INTO users (username, password)
            VALUES (?, ?)`);

        const result = insertUser.run(username, hashedPassword);

        const defaultTodo = `Hello :) Add yours first to-do!`;

        const instertTodo = db.prepare(`INSERT INTO todos (user_id, task) VALUES (?, ?)`);
        instertTodo.run(result.lastInsertRowid, defaultTodo);
        
        //create a token
        const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({ token });
        
    }   catch(err){
        console.log(err.message);
        res.sendStatus(503);
    }

});


router.post("/login", (req, res) => {


});

export default router;