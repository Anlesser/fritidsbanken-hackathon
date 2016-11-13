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
            <form>
                <div className="form-group">
                    <h1>{equipment.name}</h1>
                    <div className="row">
                        <div className="col-lg-4">
                            <label>Namn</label>
                            <input className="form-control" type="text" ref="name"/>
                            <label>Date of birth</label>
                            <input className="form-control" type="date" ref="dob"/>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <label>Neighborhood</label>
                            <input className="form-control" type="text" ref="neighborhood"/>
                            <label>Kön</label>
                            <select className="form-control">
                                <option>M</option>
                                <option>F</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <label>Telefon</label>
                            <input className="form-control" type="tel" ref="phone"/>
                            <label>Email</label>
                            <input className="form-control" type="email" ref="mail"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <input className="btn btn-lg btn-success" type="submit" value="Registrera" />
                        </div>
                    </div>
                </div>
            </form>
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