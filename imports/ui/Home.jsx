import React, { Component, PropTypes } from 'react';
import {Tasks} from '/imports/collections';
import Task from './Task.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

class Banner extends Component
{
    render()
    {
        return (
        <div className="banner">
            <div className="container">
                <img src="http://www.fritidsbanken.se/wp-content/uploads/2016/09/flytvast_webb.png" />
                <h2>På Fritidsbanken kan alla låna fritidsprylar helt gratis! Bra va?</h2>  </div>
        </div>
        );
    }
}

// App component - represents the whole app
class Home extends Component {

    renderTasks() {
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        return (
            <div>
                <Banner/>
            </div>
        );
    }
    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        const number = ReactDOM.findDOMNode(this.refs.numberInput).value;
        Tasks.insert({
            text,
            number,
            createdAt: new Date(), // current time
        });

        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }
}

// Home.propTypes = {
//     tasks: PropTypes.array.isRequired,
// };


export default createContainer(() => {
    return {
        // tasks: Tasks.find({}).fetch(),
    };
}, Home);