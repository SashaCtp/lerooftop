import React from 'react';
import MainContainer from './components/Container/MainContainer';
import Card from './components/Card/Card';
import NewsCard from './components/News/NewsCard';
import WeatherCard from './components/Weather/WeatherCard';

function App() {

	return (
		<div className="App">
			<MainContainer>
				<div className='column'>
					<NewsCard />
				</div>

				<div className='column'>
					<WeatherCard />
					<Card icon='🗣️' title='Smart Assistant'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis minus qui totam fugit asperiores, repellat laboriosam accusamus, sequi reprehenderit inventore natus at explicabo officiis? Asperiores pariatur distinctio ut sit iure.
					</Card>
				</div>
			</MainContainer>
		</div>
	);
}

export default App;
