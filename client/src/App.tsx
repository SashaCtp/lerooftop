import React from 'react';
import MainContainer from './components/Container/MainContainer';
import NewsCard from './components/News/NewsCard';
import WeatherCard from './components/Weather/WeatherCard';
import StocksBanner from './components/Stocks/StocksBanner';
import AICard from './components/Assistant/AICard';

function App() {

	return (
		<div className="App">
			<MainContainer>

				<div className='row'>
					<StocksBanner />
				</div>
				<div className='column'>
					<NewsCard />
				</div>

				<div className='column'>
					<WeatherCard />
					<AICard />
				</div>
			</MainContainer>
		</div>
	);
}

export default App;
