import React, {useState} from 'react';
import {connect} from 'react-redux';

import {selectCurrentUser, selectOrderHistory} from '../../redux/user/user.selectors' 
import {fetchUserOrdersStart, signInUser, signOutUser} from '../../redux/user/user.actions'

const OrderSearch = ({currentUser, orderHistory, fetchUserOrdersStart, signInUser, signOutUser}) => {

    const [searchCriteria, setSearchCriteria] = useState({loginEmail: "", searchEmail:""});
    const {loginEmail, searchEmail} = searchCriteria;

    const handleChange = event => {
        const {value, name} = event.target;
        setSearchCriteria({...searchCriteria, [name]: value});
    }

    const handleSignIn = () => {
        if (loginEmail !== "")
            signInUser(loginEmail);
    }

    const handleFetchOrders = () => {
       if (searchEmail !== "")
            fetchUserOrdersStart(searchEmail);
    }

    const handleSignOut = () => {
        if (currentUser)
            signOutUser();
    }

    return (
        <div>
            <div className="details"><h2><center>A Simple Order Search Implementation</center></h2></div>
            <div className="component-list-three">
                <div className="component">
                    <div className="title">Sign In User</div>
                    <div className="title">
                        <form>
                            <select name="loginEmail" onChange={handleChange}>
                                <option value="">...select account...</option>
                                <option value="mary@mail.com">mary@mail.com</option>
                                <option value="jane@mail.com">jane@mail.com</option>
                                <option value="chris@mail.com">chris@mail.com</option>
                            </select>
                        </form>
                    </div>
                    <div className="buttons">
                        <button onClick={() => handleSignIn()}>Sign In User</button>
                    </div>
                </div>
                <div className="component">
                    <div className="title">Sign Out User</div>
                    <div className="description">Will only execute if a user was already signed in.</div>
                    <div className="buttons">
                        <button onClick={() => handleSignOut()}>Sign Out User </button>
                    </div>
                </div>
                <div className="component">
                    <div className="title">Fetch Orders By Email</div>
                    <div className="title">
                        <form>
                            <select name="searchEmail" onChange={handleChange}>
                                <option value="">...select account...</option>
                                <option value="mary@mail.com">mary@mail.com</option>
                                <option value="jane@mail.com">jane@mail.com</option>
                                <option value="chris@mail.com">chris@mail.com</option>
                            </select>
                        </form>
                    </div>
                    <div className="buttons">
                        <button onClick={() => handleFetchOrders()}>Fetch Orders </button>
                        
                    </div>
                </div>
                
            </div>

            <div className="component-wide">
                <div className="title">User Signed In:</div>
                <div className="description">{currentUser ? currentUser : "~ No one is signed in at the moment. ~"}</div>
                <div className="title">Orders:</div>
                {
                    !orderHistory ? "No orders found." : 
                        
                            orderHistory.map(order => 
                                    <div className="description" key={order.id} >{order.id} - {order.email} - {order.date} - ${order.amount}</div>
                                )
                        
                    
                }
            </div>
            <br/>            
                <p>This is a simple implementation of a redux-saga action - the order search. In this app, when a user signs in, redux-saga will automatically fetch the user's orders. When a user signs out, those orders disappear.</p>
                <p>The same order search feature is made available independently, as in searching for orders by email. You can see the different action calls in the console upon user login and order search.</p>
                <p>This app focuses solely on the redux-saga code and configuration. The database and authentication setup is irrelevant here. For this app, order data is stored in a file, and the SIGN_IN action provides a currentUser object that would be similar to a real application. For this app, the currentUser object is just an email address.</p>
                <p>To see an explanation of this implementation, visit this <a href="https://catscoding.blogspot.com/2020/04/create-new-redux-saga-action.html">blog post</a>.</p>
                <p>Open the Javascript Console to see log output.</p>
        </div>
    )

};

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    orderHistory: selectOrderHistory(state)
});
  
const mapDispatchToProps = dispatch => ({

    fetchUserOrdersStart: (currentUser) => dispatch (fetchUserOrdersStart(currentUser)),
    signInUser: (email) => dispatch(signInUser(email)), 
    signOutUser: () => dispatch(signOutUser())

});
  
export default connect(mapStateToProps,mapDispatchToProps)(OrderSearch);