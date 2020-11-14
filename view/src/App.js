import React, {useState, useEffect} from 'react'
import api from './api'
import './App.css';
import GuitaristForm from './guitaristForm';
import GuitaristCard from './guitaristCard';

const App = () => {
  const [guitarists, setGuitarist] = useState([]);

  useEffect(() => {
    api.get("/api/guitarist").then(res => {
      setGuitarist(res.data);
    })
  })

  return (
    <div style={{textAlign: "center"}}>
      {guitarists.map(x => <GuitaristCard name={x.name} guitar={x.guitar} band={x.band} age={x.age}/>)}
      <GuitaristForm />
    </div>
  );
}

export default App;
