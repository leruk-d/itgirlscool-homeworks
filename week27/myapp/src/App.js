import Card from './components/Card'
import './App.css';

const cards=[
  {id:'1', rate:'300', price:'300',  speed:'10'},
  {id:'2', rate:'450', price:'450',  speed:'50'},
  {id:'3', rate:'500', price:'500',  speed:'100', isSelected: true},
  {id:'4', rate:'1000', price:'1000',  speed:'200'}
]

function App() {
  return (
    <div className="App">
      
      {cards.map((card, i) => (
          <Card price={card.price} key={card.id} speed={card.speed} isSelected={card.isSelected} />
        ))}
    </div>
  );
}

export default App;
