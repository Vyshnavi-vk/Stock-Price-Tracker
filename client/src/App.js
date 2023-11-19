import './App.css';
import { useEffect, useState } from 'react'
import axios from "axios"
import UpdatePerMinute from './UpdatePerMinute.js';


let price


function App() {

  const [value, setValue] = useState('Choose');
  const [stocks, setStocks] = useState([]);
  const [show, setShow] = useState(false)


  const fetchData = async () => {

    const { data } = await axios.get('/api/stock')
    setStocks(data)
  }



  useEffect(() => {
    fetchData()
  }, [])


  const handleClick = () => {
    setShow(true);
  }



  const handleChange = (e) => {
    setValue(e.target.value);
    setShow(false)
  };


  return (
    <>
      <h1
        className='title'
      >Welcome to Stock Price Tracker</h1>

      {value != 'Choose' ?
        <p className='p'>You have selected {value}</p>
        : <p className='p'>Please make a selection</p>
      }

      <div className='select-options'>
        <select className='values' value={value} onChange={handleChange}>
          <option>Choose</option>
          <option value="Reliance">Reliance</option>
          <option value="TCS">TCS</option>
          <option value="HDFC Bank">HDFC Bank</option>
          <option value="Infosys">Infosys</option>
          <option value="Zomato">Zomato</option>
          <option value="ONGC">ONGC</option>
          <option value="Nestle">Nestle</option>
          <option value="Coal India">Coal India</option>
          <option value="Siemens">Siemens</option>
          <option value="Cipla">Cipla</option>
        </select>
      </div>



      {stocks.map(stock => {
        if (value === stock.name) {
          price = stock.currPrice
        }
      }
      )}

      <button className='button' onClick={handleClick}>
        Display Price
      </button>

      {show ?
        <div className='container'>
          <UpdatePerMinute price={price} />
        </div> :
        <></>
      }

    </>
  );
}

export default App;
