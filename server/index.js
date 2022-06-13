import express from 'express';
import http from 'http';
import APIRouter from './routes/api.js';

const app = express();
const server = http.createServer(app);

// Send the react application
app.use('', express.static(process.cwd() + '/client/dist'));

app.get('/', (req, res) => {
	res.sendFile(process.cwd() + '/client/dist/index.html');
});

// Static files

// API Router
app.use('/api', APIRouter);

// Launch server
server.listen(3000, () => {
	console.log('listening on *:3000');
});
