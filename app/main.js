import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

let User = function(props) {
    return (
        <div className="user">
            <div>Name: {props.name} </div>
        </div>
    )
}

let App = React.createClass({

    getInitialState: function() {
        return{
            users: []
        }
    },
    componentDidMount: function() {
        axios.get('https://swapi.co/api/people/').then(results => {
            this.setState({
                users: results.data.results
            })
        })


    },
    render: function() {
        return (
            <div>
                <h2>Star Wars Characters: </h2>
                {
                    this.state.users.map(function(user) {
                        return <User name={user.name} key={user.name} />
                    })
                }
            </div>
        )
    }
})

ReactDOM.render(<App foo="Welcome"/>, document.getElementById('root'));