import React from 'react';
import {connect} from 'react-redux';

import {executeTakeAction} from '../../redux/take/app.actions';
import TakeActionType from '../../redux/take/app.types';
import {selectAppValue} from '../../redux/take/app.selectors';

const TakeExample = ({ incrementTake, incrementTakeEvery, incrementTakeLatest, increment, decrement, reset, value }) => {
  
  return( 
    <div> 
       
      <div className="details">
        <h2><center>Difference between take(), takeEvery(), takeLatest()</center></h2>
        <p>The take(), takeEvery(), takeLatest() calls have been placed within their own separate generators and can be executed from the buttons below. </p>
        <p>Each Saga generator will call the incrementFromSaga() function. The incrementFromSaga() function delays for 3 seconds and then dispatches the INCREMENT_FROM_SAGA action. The delay is added to demonstrate the control redux-saga has over the order of function calls.</p>
        <p>The INCREMENT_FROM_SAGA action simply increments the current value by 1.</p>
        <p>Open the Javascript Console to see log output.</p>
      </div>
      <div className="component-wide">
        <center>
          <div className="title">Value: {value}</div>
          <div className="description">Simple add, minus, reset with no Saga generators called.</div>
          <div className="buttons">
            <button onClick={() => increment(value)}>Add 1 </button>
            <button onClick={() => decrement(value)}>Minus 1</button>
            <button onClick={() => reset(value)}>Reset</button>
          </div>
        </center>
      </div>
      <div className="component-list-three">
          <div className="component">
            <div className="title">Using take()</div>
            <div className="description">It will take only the first action dispatched of a certain type. It returns the payload from that specific action. If the action is dispatched again, it will not be called. It has blocking behavior.</div>
            <div className="description">Click the button 3x quickly and watch the log.</div>
            <div className="buttons">
              <button onClick={() => incrementTake(value)}>Add 1 (take) </button>
            </div>
            <div className="description">You will find "incrementFromSaga() started." only once. Then, 3 seconds after that you will see the dispatch call for INCREMENT_FROM_SAGA. This is called only once. Any more clicks will be ignored.</div>
            
          </div>
          <div className="component">
            <div className="title">Using takeEvery()</div>
            <div className="description">This will execute upon every time the specified action is dispatched. It executes the function specified in the second parameter whenever that action type is dispatched. A payload is also returned.</div>
            <div className="description">Click the button 3x quickly and watch the log.</div>
            <div className="buttons">
              <button onClick={() => incrementTakeEvery(value)}>Add 1 (takeEvery) </button>
            </div>
            <div className="description"> You will see three instance of "incrementFromSaga() started." in the log, one for each call. Each call will be delayed 3 seconds before dispatching INCREMENT_FROM_SAGA. The value will be incremented 3 times.</div>
          </div>
          <div className="component">
            <div className="title">Using takeLatest()</div>
            <div className="description">This will take only the last action dispatched of a certain type. If someone dispatches 10 actions in a row for an async task, this will only execute upon the last one, all previous calls are cancelled.</div>
            <div className="description">Click the button 3x quickly and watch the log. </div>
            <div className="buttons">
              <button onClick={() => incrementTakeLatest(value)}>Add 1 (takeLatest) </button>
            </div>  
            <div className="description">You will see three instance of "incrementFromSaga() started." in the log for each call. Since all subsequent call completed before incrementFromSaga() finished, you will only see one dispatch of INCREMENT_FROM_SAGA in the log. The value will be incremented from the latest value, and only once.</div>
          </div>
        </div>
        
      </div>
  );
}

const mapStateToProps = state => ({
  value: selectAppValue(state)
});

const mapDispatchToProps = dispatch => ({
 
  increment: (value) => dispatch(executeTakeAction(TakeActionType.INCREMENT, value)),
  incrementTake: (value) => dispatch(executeTakeAction(TakeActionType.INCREMENT_TAKE, value)),
  incrementTakeEvery: (value) => dispatch(executeTakeAction(TakeActionType.INCREMENT_TAKEEVERY, value)),
  incrementTakeLatest: (value) => dispatch(executeTakeAction(TakeActionType.INCREMENT_TAKELATEST, value)),
  decrement: (value) => dispatch(executeTakeAction(TakeActionType.DECREMENT, value)),
  reset: (value) => dispatch(executeTakeAction(TakeActionType.RESET, value))

});

export default connect(mapStateToProps,mapDispatchToProps)(TakeExample);
