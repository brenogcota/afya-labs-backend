import app from './app';
import 'reflect-metadata';
import './database';

const PORT: string|number = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('🏃 Running Server');
});
