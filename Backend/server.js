const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cuki',
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database', error);
  } else {
    console.log('Connected to database');
  }
});

app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/api/formulirresep', upload.single('image'), (request, response) => {
  const { judul, deskripsi } = request.body;

  if (!request.file) {
    return response.status(400).json({ message: 'No file uploaded' });
  }

  const imagePath = request.file.path;

  const sql = `INSERT INTO formulirresep (judul, deskripsi, image) VALUES (?, ?, ?)`;
  const values = [judul, deskripsi, imagePath];

  connection.query(sql, values, (error, results) => {
    if (error) {
      console.error('Failed to submit form data', error);
      response.status(500).json({ message: 'Failed to submit form' });
    } else {
      console.log('Form data submitted successfully!');
      response.status(200).json({ message: 'Form data submitted successfully' });
    }
  });
});

app.get('/api/formulirresep', (request, response) => {
  connection.query('SELECT * FROM formulirresep', (error, results) => {
    if (error) {
      console.error('Failed to retrieve submitted forms', error);
      response.status(500).json({ message: 'Failed to retrieve forms' });
    } else {
      console.log('Submitted forms retrieved successfully');
      response.status(200).json(results);
    }
  });
});

// POST /users 
app.post("/users", (req, res) => { 
  const { id, username, password } = req.body; 
 
  const query = "INSERT INTO users (id, username, password) VALUES (?, ?, ?)"; 
  const values = [id, username, password]; 
 
  connection.query(query, values, (err, results) => { 
    if (err) { 
      console.error("Error create users: ", err); 
      res.status(500).send("Error create users"); 
    } else { 
      console.log("Users create successfully"); 
      res.status(200).send("Users create successfully"); 
    } 
  }); 
}); 
 
// GET /users 
app.get("/users", (req, res) => { 
  const query = "SELECT * FROM users"; 
 
  connection.query(query, (error, results) => { 
    if (error) { 
      console.error("Error querying database:", error); 
      res.status(500).json({ error: "Internal server error" }); 
    } else { 
      res.json(results).status(200); 
    } 
  }); 
}); 
  
  // POST /signup   
app.post('/registrasi', (req, res) => {  
    const { id, username, email, password } = req.body;  
  
    const query = 'INSERT INTO registrasi (id, username, email, password) VALUES(?, ?, ?, ?)';  
    connection.query(query, [id, username, email, password], (error, results) => {  
        if (error) {  
            console.error('Error executing query:', error);  
            res.status(500).json({ error: 'Internal server error' });  
        } else {  
            console.log('Product added to database!');  
            res.status(200).json({ message: 'Account added to database' });  
        }  
    })  
})  
  
// GET /sign_up  
app.get('/registrasi', (req, res) => {  
    const query = "SELECT * FROM registrasi";  
  
    connection.query(query, (error, results) => {  
        if (error) {  
            console.error('Error executing query:', error);  
            res.status(500).json({ error: 'Internal server error' });  
        } else {  
            res.status(200).json(results);  
        }  
    });  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
