import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { store } from '../globals';
import { App } from './App';
import { GameListContainer } from './games/GameListContainer';
import { GameViewContainer } from './games/GameViewContainer';

export class Root extends React.Component<{}, void> {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path='/' component={App}>
                        <IndexRoute component={GameListContainer} />
                        <Route path='view/:gameID' component={GameViewContainer} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}
