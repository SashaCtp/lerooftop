# ✨ Le Rooftop ✨

## How to setup ?

1. Clone the repository on your local machine
2. Install dependencies with npm : `npm install`
3. Build the project : `npm run build`
4. Run the server : `npm run start`
5. Go to `http://localhost:3000`
6. You're done !

## APIs

For this project we used 3 different APIs :

- NewsAPI

  *Retrieves all the headlines and articles from different countries*

  > https://newsapi.org/

- Yahoo Finance API

  *Retrieves stock market data (prices, change rate, etc.)*

  > https://financeapi.net/

- API Meteo Concept
  
  *Retrieves weather data given a geographic location*

  > https://api.meteo-concept.com/

## OpenAI

OpenAI is our fourth present API in the dashboard and provides a community library for handle request.
*The AI is trained to be a sarcastic chat bot, requires english messages and can't remember previous questions*

> https://beta.openai.com/examples/default-marv-sarcastic-chat
> https://beta.openai.com/overview
  
## Proxy

For security reasons, we do not store our API keys in the front-end application. The server is used as a proxy, which forwards requests from localhost to the real API by adding in the headers the API key (X-API-Key or Authorization).

In real life, the keys should be written in a `.env` file (and server's soure code should be private), however for this school project we placed them in a JS config file in the server directory.

*The keys will be reset once the project has been reviewed by the professor 😉*
