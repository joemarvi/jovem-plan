const express = require('express');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3001;

// Conexão com o banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.UPLOAD_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor Jovem Plan!');
});

// Rota para adicionar usuários administradores
app.post('/admin/register', async (req, res) => {
  const { completeName, email, password } = req.body;

  if (!completeName || !email || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users_administrations (completeName, email, password) VALUES (?, ?, ?)';
    db.query(query, [completeName, email, hashedPassword], (err, results) => {
      if (err) {
        console.error('Erro ao adicionar usuário:', err);
        return res.status(500).json({ message: 'Erro ao adicionar usuário' });
      }
      res.status(201).json({ message: 'Usuário adicionado com sucesso' });
    });
  } catch (err) {
    console.error('Erro ao hash da senha:', err);
    res.status(500).json({ message: 'Erro ao criar o usuário' });
  }
});

// Rota para autenticação
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios' });
  }

  const query = 'SELECT * FROM users_administrations WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).json({ message: 'Erro ao buscar usuário' });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  });
});

// Roteamento de uploads de imagens
app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ file: req.file });
});

// Configuração para organizar as rotas da aplicação
// Exemplo: importar rotas de outros arquivos
// const userRoutes = require('./routes/users');
// app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: 3001`);
});
