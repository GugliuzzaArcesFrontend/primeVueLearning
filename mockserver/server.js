const express= require('express');
const cors=require('cors');
const fs=require('fs');

const app=express();

const port= 6500;

app.use(cors());

//middleware
const readJSONFile= (filepath)=>{
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


app.listen(port,()=>{console.log(`Server in ascolto, porta:${port}`);
})