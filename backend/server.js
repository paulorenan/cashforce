require('dotenv').config();
const app = require('./src/app');
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});