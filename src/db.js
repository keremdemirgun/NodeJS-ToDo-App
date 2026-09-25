import {DatabaseSync} from 'node:sqlite3';
const db = new DatabaseSync(':memory:');

// Execute SQL statements to create tables and insert data
db.exec(`
    CREATE TABLE user(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )
    `)


db.exec(`
    CREATE TABLE todos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        task TEXT,
        completed BOOLEAN DEFAULT FALSE,
        FOREIGN KEY(user_id) REFERENCES user(id)
    )
`)

export default db;