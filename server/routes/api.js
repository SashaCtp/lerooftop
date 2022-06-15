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
api.get('/news/*', (req, res, next) => {

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

// Peek A Link
api.post('/peekalink/', (req, res) => {
    if(Object.keys(req.body).length != 1 || req.body['link'] == undefined){
        res.status(400);
        return res.json({'detail': 'Missing argument : `link`'});
    }

    const body = {
        link: req.body['link']
    };

    // Fetch API
    axios.post('https://api.peekalink.io/', body, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': process.env.PEEKALINK_SECRET_KEY || ''
        },
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.error('An error occured whil fetching PeekALink');
        console.log(err);
        res.send(err);
    });
});

api.post('/peekalink/is-available', (req, res) => {
    // Fetch API
    axios.post('https://api.peekalink.io/',{}, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': process.env.PEEKALINK_SECRET_KEY || ''
        }
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.error('An error occured whil fetching PeekALink');
        console.log(err);
        res.send(err);
    });
});

// Giphy
api.get('/giphy/search/', (req, res) => {

    if(Object.keys(req.query).length != 1 || req.query['q'] == undefined){
        res.status(400);
        return res.json({'detail': 'Missing argument : `q`'});
    }

    if(req.query['q'] instanceof String && req.query['q'].length > 50){
        res.status(400);
        return res.json({'detail': 'q argument is too long (50 chars max)'});
    }

    // TODO - ⚠️ Improve security while building the URL
    let url = 'https://api.giphy.com/v1/gifs/search';
    url += '?api_key=' + process.env.GIPHY_SECRET_KEY || '';
    url += '&q=' + encodeURI(req.query['q'].toString()); // ⚠️ Possible security breach
    url += '&limit=5';

    axios.get(url)
    .then(data => {
        return res.json(data);
    })
    .catch(err => {
        console.log('An error occured');
        console.log(err);
        res.status(400);
        res.send(err);
    });

});


// OpenAPI ?


export default api;