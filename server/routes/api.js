// API Routes
// For security reasons, we decided to proxy API request, in order to keep api keys secret (hidden from the user)
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { getBaseUrl } from '../conf.js';
const api = express.Router();

// JSON parsing
api.use('/', express.json());

// Avoid usage of the API proxy from elsewhere
api.use('/', cors({
    origin: getBaseUrl(),
}));

// News API proxy
api.get('/news/*', (req, res) => {

    if(req.url == '/news/')
        return res.sendStatus(404);
    
    const BASE_URL = 'https://newsapi.org/v2/';
    const API_KEY = '993e6b8674db4aeeb75aff664d767467';

    let proxy = BASE_URL + req.url.substring(6);
    console.log('News API request : ' + proxy)
    
    axios.get(proxy, {
        headers: {
            'Authorization': 'Bearer ' + API_KEY
        }
    }).then(data => {
        res.send(data.data);
    }).catch(err => {
        console.error(err);
        res.status(400).send(err);
    })

});

// Stocks
api.get('/stocks/*', (req, res) => {

    if(req.url == '/stocks/')
        return res.sendStatus(404);

    const BASE_URL = 'https://yfapi.net/v6/finance/';
    const API_KEY = '0Z9Xum8dRQaz1lCUaWNhSgyHzfdl1LF1DQIjQzJ3';

    let proxy = BASE_URL + req.url.substring(8);
    console.log('Stocks API request : ' + proxy)
    
    axios.get(proxy, {
        headers: {
            'X-API-Key': API_KEY
        }
    }).then(data => {
        res.send(data.data);
    }).catch(err => {
        console.error(err);
        res.status(400).send(err);
    });

});

export default api;