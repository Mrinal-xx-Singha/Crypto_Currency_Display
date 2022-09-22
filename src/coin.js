import React from 'react'
import './Coin.css'  //Coin.css is imported using the import statement

// destructuring is done here using {} curly braces
const coin = ({name, image, symbol, price, volume,
priceChange, marketcap}) => {    //a variable is made of name coin which cointains
//  name ,image,symbol,price,volume,pricechange,marketcap variables which return the whole html of the app
  
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                {/* curly braces are used as it is jsx and not html ,and inside a function in react this is how comments are made */}
                <img src={image} alt="crypto"/>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>Rs:{price}</p>

                {/* toLocaleString is used so that the comas dont disappear */}

                <p className='coin-volume'>Rs:{volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                    <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                ) : ( <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                )}
                <p className='coin-marketcap'>
                    MKT cap: Rs:{marketcap.toLocaleString()}
                </p>
            </div>
        </div>
    </div>
  );
};

export default coin
