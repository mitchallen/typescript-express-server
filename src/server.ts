/**
 * Author: Mitch Allen (https://mitchallen.com/)
 */

import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express TypeScript!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});