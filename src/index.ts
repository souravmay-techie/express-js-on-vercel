import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class Holder {
    // Define the static variable using the 'static' keyword
    static totaldata = [];

    constructor(data) {
        //this.accountHolder = accountHolder;
        // Increment the static variable every time a new instance is created
        if(totaldata.length>10){
          totaldata=[];
        }
      totaldata.push(data);
    }

    // A static method to access the static variable
    static holders() {
        if(totaldata==[]){
          return "no data";
        var daata = '</br>';  
        totaldata.forEach((fruit) => {
          daata= daata + fruit +'<br/>';
        });          
        return daata;
    }
}
const app = express()
app.get('/das', (req, res) => {
  const das = req.query.page;
  res.type('html').send(`
    das
  `)
})

// Home route - HTML
app.get('/', (req, res) => {
  res.type('html').send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>Express on Vercel</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/api-data">API Data</a>
          <a href="/healthz">Health</a>
        </nav>
        <h1>Welcome to Express on Vercel 🚀</h1>
        <p>This is a minimal example without a database or forms.</p>
        <img src="/logo.png" alt="Logo" width="120" />
      </body>
    </html>
  `)
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'components', 'about.htm'))
})

// Example API endpoint - JSON
app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  })
})

// Health check
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
