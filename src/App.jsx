import Card from './components/Cards';
import Button from './components/Button';
const data = require ('./data/data.json')

function App() {
  return (
    <>
    <h1>devjobs  </h1>
    <div className="card">
      <ul>
        {data.map(co => <Card key={co.id} logo={co.logo} postedAt={co.postedAt} contract={co.contract} position={co.position} company={co.company} location={co.location}/>)}        
      </ul>
    </div>
    <Button/>
    </>
    
  );
}

export default App;
