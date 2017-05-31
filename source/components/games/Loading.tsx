import * as React from 'react';
import { Link } from 'react-router';

export default class Loading extends React.Component<{}, void> {
    render () {
        return (
            <div className="Loading">
                <h2 className="Loading--text">Loading Amazing Games!</h2>
                <div className="Loading--loader">
                    <div className="Loading--loader--mover mod-1"></div>
                    <div className="Loading--loader--mover mod-2"></div>
                    <div className="Loading--loader--mover mod-3"></div>
                </div>
            </div>
        );
    }
}