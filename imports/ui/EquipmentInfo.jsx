import React, { Component, PropTypes } from 'react';
import {Equipments} from '/imports/collections';
import Task from './Task.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import ReactDOM from 'react-dom';


// App component - represents the whole app
class EquipmentInfo extends Component {
    render() {
        var {equipment} = this.props;
        if(!equipment)
        {
            return (<p></p>);
        }
        var inspirationLink = "inspiration/" + equipment._id;
        var bookingLink = "booking/" + equipment._id;
        return (
            <div>
                <div className="row">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2>{equipment.name}</h2>
                        </div>
                        <div className="panel-body">
                            <div className="col-lg-2">
                                <img src={equipment.image} style={{height:"100px"}} />
                                <br/>
                                <h2>{equipment.name}</h2>
                                <p>Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien.
                                    Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet,
                                    da en ukjent boktrykker stokket en mengde bokstaver.</p>
                            </div>
                            <div className="col-lg-4">
                                <div className="well-lg well">
                                    <span className="text-success">
                                        Utrustning är tillgänglig.
                                    </span>
                                    <br/>
                                    I lager: 3
                                </div>

                                <Link to={bookingLink} className="btn btn-lg btn-primary">Boka</Link>
                                <br/>
                                <br/>
                                <Link to={inspirationLink} className="btn btn-lg btn-success">Inspiration</Link>
                                <br/>
                                <br/>
                                <Link to="places" className="btn btn-lg btn-default">Platser</Link>
                            </div>
                            <div className="col-lg-2" ></div>
                            <div className="col-lg-4" >
                                <h1>Relaterade prylar</h1>
                                <div>

                                    <label>Skor</label>
                                    <br/>
                                    <img style={{height:"100px"}} src="https://www.stadium.se/INTERSHOP/web/WFS/Stadium-SwedenB2C-Site/sv_SE/-/SEK/CC_ViewScaledImage-Start?ImageURI=Stadium%3A%2Fbrands%2Fbrand%20campaigns%2Fadidas%2Fmercury%2F2x1.jpg&Height=230"/>
                                    <br/>
                                    <label>Handskar</label>
                                    <br/>
                                    <img src="http://www.decory.se/images/sportwear/r5ixftnsqre.jpg" style={{height:"100px"}} />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

EquipmentInfo.propTypes = {
    equipment: PropTypes.object.isRequired,
};


export default createContainer(({params}) => {
    console.log(Equipments.findOne(params.id));
    return {
        equipment: Equipments.findOne(params.id),
    };
}, EquipmentInfo);