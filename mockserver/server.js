const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

const port = 6500;

app.use(cors());
app.use(express.json());

//middleware
const readJSONFile = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(JSON.parse(data));
    });
  });
}

//API
app.get('/api/checklist', async (req, res) => {
  try {
    const data = await readJSONFile('mock.json');
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Errore nella lettura del file JSON.' });
  }
});

app.post('/api/checklistAdd', async (req, res) => {
  try {
    const data = await readJSONFile('mock.json');
    const id = req.body.id;

    if (data.some(item => item.id == id)) {
      const index = data.findIndex(item => item.id == id);
      data[index] = { ...req.body };
      fs.writeFileSync('mock.json', JSON.stringify(data));
      res.json(data);
    }

    else {
      data.push(req.body);
      fs.writeFileSync('mock.json', JSON.stringify(data));
      res.json(data);
    }
  }
  catch (error) {
    res.status(500).json({ message: 'Errore nella scrittura del file JSON.' });
  }
});

app.delete('/api/checklistDelete/:id', async (req, res) => {
  try {
    const data = await readJSONFile('mock.json');
    const index = data.findIndex(item => item.id == req.params.id);

    if (index !== -1) {
      data.splice(index, 1);
      fs.writeFileSync('mock.json', JSON.stringify(data));
      res.status(200).json({ data, message: 'Elemento rimosso correttamente.' });
    }
    else {
      res.status(404).json({ message: 'Elemento non trovato.' });
    }
  }
  catch (error) {
    res.status(500).json({ message: 'Errore nella rimozione dell\'elemento.' });
  }
});

app.listen(port, () => {
  console.log(`Server in ascolto, porta:${port}`);
})