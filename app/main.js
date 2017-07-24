import React from 'react';
import ReactDOM from 'react-dom';

let User = React.createClass({
    getInitialState: function() {
        return {
            active: false
        }
    },

    render: function() {

        let active = this.state.active ? 'Yes' : 'No'

        return (
            <div className="user">
                <div>Name: {this.props.name} </div>
                <div>Active: {active} </div>
                <button onClick={this.toggleActive}>Toggle Active</button>
            </div>
        )
    },

    toggleActive: function() {
        this.setState ({
            active: !this.state.active
        })
    }
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