/**
 * Author: Mitch Allen (https://mitchallen.com/)
 */

import * as express from 'express';

const app = express();

const VERSION = process.env.npm_package_version;
const API_TITLE = process.env.npm_package_name;
const AUTHOR = "Mitch Allen";

app.get('/', (req, res) => {
  const record = {
    name: API_TITLE,
    version: VERSION,
    author: AUTHOR,
  }
  res.status(200).json(record);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});