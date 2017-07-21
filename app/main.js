import React from 'react';
import ReactDOM from 'react-dom';

let User = React.createClass({
    getInitialState: function() {
        return {
            active: 'No'
        }
    },

    render: function() {
        return (
            <div>
                <div>Name: {this.props.name} </div>
                <div>Active: {this.state.active} </div>
                <button>Toggle Active</button>
            </div>
        )
    },
});

let App = React.createClass({
    render: function() {
        return (
            <div>
                <h2>User List: </h2>
                <User name="Kubra Guler" />
                <User name="Soner Guler" />
            </div>
        )
    }
});

ReactDOM.render(<App foo="Welcome"/>, document.getElementById('root'));