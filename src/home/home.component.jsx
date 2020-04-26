import React, {useState} from 'react';

import './home.css';

import OrderSearch from '../components/order-search/order-search.component';
import TakeExample from '../components/take-examples/take-examples.component';

const Home = () => {

    const [displayOrderSearch, setDisplayOrderSearch] = useState(false);
    const [displayTakeSample, setDisplayTakeSample] = useState(false);

    const displayOrderSearchComponent = () => {
        setDisplayOrderSearch(true);
        setDisplayTakeSample(false);
    }

    const displayTakeSampleComponent = () => {
        setDisplayOrderSearch(false);
        setDisplayTakeSample(true);
    }

    return (
        <div className="home">
            <div className="details">
            <center>
                <h1>Redux-Saga Snippets</h1>
                <p></p>
                <p>A small collection of redux-saga sample implementations.</p>
                <p>The repistory for this app can be found on <a href="https://github.com/tanyamiranda/redux-saga">Github</a></p>
            </center>
            </div>
            <div className="component-list">
                <div className="component-selection" onClick={displayOrderSearchComponent}>
                    <div className="title" >Order Search</div>
                    <div className="details">A simple implementation of a few redux-saga actions.</div>
                </div>
                <div className="component-selection" onClick={displayTakeSampleComponent}>
                    <div className="title" >Take/TakeEvery/TakeLatest</div>
                    <div className="details">An explanation of these redux-saga functions.</div>
                </div>
            </div>        
            <br/>
            <hr/>
            <div className="component-page">
                {!displayOrderSearch ? null : (
                    <OrderSearch />
                )}
            </div>

            <div className="component-page">
                {!displayTakeSample ? null : (
                    <TakeExample />
                )}
            </div>
            
        </div>
        

    );
}

export default Home;