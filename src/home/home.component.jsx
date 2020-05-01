import React, {useState} from 'react';

import './home.css';

import OrderSearch from '../components/order-search/order-search.component';
import TakeExample from '../components/take-examples/take-examples.component';

const Home = () => {

    const [displayOrderSearch, setDisplayOrderSearch] = useState(true);
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
            <div className="page-title"><h1>Redux-Saga Snippets</h1></div>
            <div className="component-list">
                <div className={'component-selection ' + (displayOrderSearch ? 'selected' : '') } onClick={displayOrderSearchComponent}>
                    <div className="title" >Order Search</div>
                </div>
                <div className={'component-selection ' + (displayTakeSample ? 'selected' : '') } onClick={displayTakeSampleComponent}>
                    <div className="title" >Take/TakeEvery/TakeLatest</div>
                </div>
            </div>        
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