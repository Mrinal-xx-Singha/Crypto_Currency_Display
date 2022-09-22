import React, { useState, useEffect } from 'react'
import axios from 'axios'; //axios is imported by npm install axios
import Coin from './coin';
// useState and use effects are called using react hooks
function App() {
    // two constants are made of name coins and setCoins and useState is a react hook that allows you to have state variables in function components
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    // useEffect is a hook which allows to perform side effects in a
    // components some examples of side effect are fetching data,
    //  directly updating the DOMException,timers ,use effect accepts two parameters   
    useEffect(() =>{
        axios  //axios is handeling the api http request which is copied from a website named coingecco
        .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data)
            
        })
        .then(res => {
            setCoins(res.data);
        }).catch(error =>console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }
    const filteredCoins = coins.filter(coin =>                    //toLowerCase()method is used so that if we type in uppercase this converts the upper case into lowercase and it does not throw any error because of upper case letters being written
        coin.name.toLowerCase().includes(search.toLowerCase()) // in the search variable
    )



//data is being fetched from the api 
    return (
        <div className='coin-app'>
            <h2 className='coin-heading'> Made by @Mrinal Singha</h2>
            <div className='coin-search'>
                <h1 className='coin-text'>Search a Currency</h1>
                <form>
                    <input type="text" placeholder='search'
                    className='coin-input' onChange={handleChange}/>
                </form>
            </div>
            {/* mapping over the coin variable where the api is stored so that we get the desired data */}
            {/* mapping means to create an object (javascript)and calling its properties from the api(.map is a chortcut)  */}
            {filteredCoins.map(coin => {
                return <Coin
                    key ={coin.id} 
                    name ={coin.name} 
                    image={coin.image}
                    symbol={coin.symbol}
                    marketcap={coin.market_cap}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    volume={coin.total_volume}
                />;
                
            })}
        </div>

    );
}
// export default is used to export the app component into the index.js
export default App