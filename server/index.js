import express from 'express';
import http from 'http';
import { PORT, getBaseUrl } from './conf.js';
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
server.listen(PORT, (err) => {
	if(err)
		return console.error(err);

	console.log(`Server started on ${getBaseUrl()}`);
});
