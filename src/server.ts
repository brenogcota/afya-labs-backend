import app from './app';
import 'reflect-metadata';
import './database';

const PORT: string|number = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log('🏃 Running Server');
});
