import * as React from 'react';
//import { Header } from './games/Header';

export class App extends React.Component<void, void> {
    render() {
        return (
            {/*<Header/>*/}
            <div>
                {this.props.children}
            </div>
        );
    }
}
