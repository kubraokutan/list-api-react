import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

<<<<<<< HEAD
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
=======
let Counter = React.createClass({

    getInitialState: function() {
        return {
            count: 0
        }
    },

    componentDidMount: function() {
        let _this = this

        this.setState({
            count: this.props.start
        })

        setInterval(() => {
            _this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    },

    render: function() {
        return (
            <div>Count: {this.state.count}</div>
        )
    }
});
>>>>>>> b9f4b308ba4a5c1ed0e1378c42610a25578da964

    },
    render: function() {
        return (
<<<<<<< HEAD
            <div>
                <h2>Star Wars Characters: </h2>
                {
                    this.state.users.map(function(user) {
                        return <User name={user.name} key={user.name} />
                    })
                }
            </div>
=======
           <Counter start ={5} />
>>>>>>> b9f4b308ba4a5c1ed0e1378c42610a25578da964
        )
    }
})

ReactDOM.render(<App foo="Welcome"/>, document.getElementById('root'));