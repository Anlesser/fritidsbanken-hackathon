import React, { Component, PropTypes } from 'react';
import {Equipments} from '/imports/collections';
import Task from './Task.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import ReactDOM from 'react-dom';
// Task component - represents a single todo item
class Inspiration extends Component {
    render() {
        var {equipment} = this.props;

        if(!equipment)
        {
            return (<p></p>);
        }
        return (
            <div className="row">
                <div className="col-lg-4">
                    <h1>{equipment.name}</h1>
                    <img src={equipment.image} style={{height:"100px"}} />
                </div>
                <div className="col-lg-4">
                    <p>
                        <h2>Five-a-side football</h2> is an informal variant of football played with five players, with one taking the position of a goalkeeper. The game is played on a smaller field and with a smaller goal. It can be played indoor or outdoor and the field may be enclosed with barriers or not.

                        There is no governing body that establishes the rule for five-a-side and the game rules are often decided right before kickoff. Despite that, there are rules that are widely used in five-a-side games like:
                        the ball is not allowed to go over the head
                        there is no offside law
                        sliding tackles are forbidden

                        <h2>Futsal </h2>is the fastest-growing variant of football in the world. The game is played indoors on a hard playing surface defined by lines. Five players play for each team and the number of substitutions is unlimited. The ball used in futsal is smaller than regular football and has lesser bounce.

                        Two major bodies govern the rules in futsal, FIFA and the World Futsal Association. The biggest futsal tournament is the FIFA Futsal World Cup, held every four years. Brazil and Spain are the two nations that dominate this sport.

                    </p>
                </div>
                <div className="col-lg-4">
                </div>

            </div>
        );
    }
}


Inspiration.propTypes = {
    equipment: PropTypes.object.isRequired,
};


export default createContainer(({params}) => {
    console.log(Equipments.findOne(params.id));
    return {
        equipment: Equipments.findOne(params.id),
    };
}, Inspiration);