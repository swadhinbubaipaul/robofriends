import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import 'tachyons'

const App = () => {
    return (
    <React.Fragment>
        <h1 className="tc">RoboFriends</h1>
        <CardList robots={robots} />
    </React.Fragment>
    )
}
export default App;