import * as React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component<{}, void> {
    render () {
        return (
            <div className="Header">
                <img src="/assets/images/header-logo.png" className="Header--icon"/>
                <h1 className="Header--text">Enjoy our games.</h1>
            </div>
        );
    }
}