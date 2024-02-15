require('dotenv/config');
const express = require('express');

const { Ahmed_Wardhere } = process.env;

const app = express();

app.get('/', (_req, res) => {
  if (!Ahmed_Wardhere) {
    res.status(500).json({
      error: { message: 'Environment variable STUDENT_NAME not provided' }
    });
    return;
  }
  res.json({
    data: `Hello from ${Ahmed_Wardhere}!`
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('App is listening!');
});
