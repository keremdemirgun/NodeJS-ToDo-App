import express from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';


const app = express();
const port = process.env.PORT || 3000;

//get the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url);
//get the directory name of the current module
const __dirname = dirname(__filename);

//middleware  
app.use(express.json());
//serves the html file from the /public directory
//tells express to serve all files from the public folder as static assets / files.
//any request to the server for a file that exists in the public folder will be served automatically.
app.use(express.static(path.join(__dirname, '../public')));

// serving up the html file from the /public directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// my routes
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});