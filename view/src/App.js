import React, {useState, useEffect} from 'react'
import api from './api'
import './index.scss'
import GuitaristForm from './guitaristForm';
import GuitaristCard from './guitaristCard';

const App = () => {
  const [guitarists, setGuitarists] = useState([]);

  useEffect(() => {
    api.get("/api/guitarists").then(res => {
      setGuitarists(res.data.data);
    })
  }, [])

  return (
    <div style={{textAlign: "center"}}>
      {guitarists.map(x => <GuitaristCard name={x.name} guitar={x.guitar} band={x.band} age={x.age} key={x._id}/>)}
      <GuitaristForm />
    </div>
  );
}

export default App;
