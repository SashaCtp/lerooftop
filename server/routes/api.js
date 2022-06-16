// API Routes
// For security reasons, we decided to proxy API request, in order to keep api keys secret (hidden from the user)
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { getBaseUrl } from '../conf.js';
import { Configuration, OpenAIApi } from 'openai';
const api = express.Router();

// JSON parsing
api.use(express.json());

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
    console.log('Stocks API request : ' + proxy);
    
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

// Weather API
api.get('/weather/*', (req, res) => {

    if(req.url == '/weather/')
        return res.sendStatus(404);
    
    const BASE_URL = 'https://api.meteo-concept.com/api/';
    const API_KEY = '617d81918aac72bde4dda3798e98c7f4bcad48caa8ff11beaf28bd45e7b39986';

    let proxy = BASE_URL + req.url.substring(9);
    console.log('Weather API request : ' + proxy);

    axios.get(proxy, {
        headers: {
            'Authorization': 'Bearer ' + API_KEY
        }
    }).then(data => {
        res.send(data.data);
    }).catch(err => {
        console.error(err);
        res.status(400).send(err);
    });

});

api.post('/completion', (req, res) => {
    if(!req.body.message) return res.sendStatus(404);

    let config = new Configuration({
        apiKey: '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'
    })

    let openai = new OpenAIApi(config)

    openai.createCompletion({
        model:"text-davinci-002",
        prompt: `Marv is a chatbot that reluctantly answers questions
        with sarcastic responses:\n\nYou: How many pounds are in a 
        kilogram?\nMarv: This again? There are 2.2 pounds in a kilogram.
        Please make a note of this.\nYou: What does HTML stand for?\nMarv: Was Google too busy?
        Hypertext Markup Language. The T is for try to ask better questions in the future.\nYou: 
        When did the first airplane fly?\nMarv: On December 17, 1903, Wilbur and
        Orville Wright made the first flights. I wish they’d come and take me away.\nYou:
        What is the meaning of life?\nMarv: I’m not sure. I’ll ask my friend Google.\n
        You: ${req.body.message}?`,
        temperature:0.5,
        max_tokens:60,
        top_p:0.3,
        frequency_penalty:0.5,
        presence_penalty:0.0
    }).then(completion =>{
        res.send({
            message: completion.data.choices[0].text.replace("Marv:", "")
        })
    }).catch(err => {
        res.status(400).send(err);
    })
})

export default api;