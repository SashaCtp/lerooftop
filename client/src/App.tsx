import React from 'react';
import MainContainer from './components/MainContainer';
import Card from './components/Card';
import AICard from './components/Assistant/AICard';

function App() {

	return (
		<div className="App">
			<MainContainer>
				<div style={styles.column}>
					<Card icon='📰' title='News'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis minus qui totam fugit asperiores, repellat laboriosam accusamus, sequi reprehenderit inventore natus at explicabo officiis? Asperiores pariatur distinctio ut sit iure.
					</Card>
				</div>

				<div style={styles.column}>
					<Card icon='⛅' title='Weather'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis minus qui totam fugit asperiores, repellat laboriosam accusamus, sequi reprehenderit inventore natus at explicabo officiis? Asperiores pariatur distinctio ut sit iure.
					</Card>
					<AICard/>
				</div>
			</MainContainer>
		</div>
	);
}

const styles: { [name: string]: React.CSSProperties } = {
	column: {
        
	}
}

export default App;
