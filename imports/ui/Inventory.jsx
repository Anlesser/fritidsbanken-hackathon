/**
 * Created by magnus on 2016-11-12.
 */
import React, { Component, PropTypes } from 'react';
import {Equipments} from '/imports/collections';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class Equipment extends Component
{
    render()
    {
        var {name, category,image} = this.props.equipment;
        var equipmentlink = "equipmentinfo/" + this.props.equipment._id;
        return (
            <tr>
                <td><img src={image} style={{height:"50px"}}/></td>
                <td><Link to={equipmentlink}>{name}</Link></td>
                <td>{category}</td>
            </tr>

        );
    }
}

Equipment.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    Equipment: PropTypes.object.isRequired,
};


class RegisterEquipment extends Component
{

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        const category = ReactDOM.findDOMNode(this.refs.category).value;
        const image = ReactDOM.findDOMNode(this.refs.image).value;
        Equipments.insert({
            name,
            category,
            image,
            createdAt: new Date(), // current time
        });

        // Clear form
        ReactDOM.findDOMNode(this.refs.name).value = '';
        ReactDOM.findDOMNode(this.refs.image).value = '';
    }
    render()
    {
        return (
            <div >
                <form className="form-group">
                    <label>Kategori</label>
                    <select ref="category" className="form-control input-sm">
                        <option>Bollar</option>
                        <option>Hockey</option>
                        <option>Tennis</option>
                    </select>
                    <label>Namn</label>
                    <input type="text" ref="name" className="form-control input-sm"/>
                    <label>Bild</label>
                    <input type="text" ref="image" className="form-control input-sm" />
                    <input type="submit" value="Lägg till" onClick={this.handleSubmit.bind(this)} className="form-control" />
                </form>
            </div>
        );
    }
}

// App component - represents the whole app
class Inventory extends Component {

    renderEquipments()
    {
        var cat = this.props.params.category;
        return this.props.equipments.filter((x) => x.category==cat).map(equipment =>
            (<Equipment key={equipment._id} equipment={equipment}/>));
    }

    render() {
        return (
            <div>
                <div className="col-lg-8">
                    <div className="panel panel-default">
                        <div className="panel-heading">Prylar</div>
                        <div className="panel-body">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>Bild</th>
                                    <th>Namn</th>
                                    <th>Kategori</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.renderEquipments()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3>Registrera prylar</h3>
                    <RegisterEquipment/>
                </div>


            </div>


    );
    }
}

Inventory.propTypes = {
    equipments: PropTypes.array.isRequired,
};


export default createContainer(() => {
    return {
        equipments: Equipments.find({}).fetch(),
    };
}, Inventory);