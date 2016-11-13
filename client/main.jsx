import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Home from '../imports/ui/Home.jsx';
import Inventory from '/imports/ui/Inventory';
import CategoriesList from '/imports/ui/Categories';
import EquipmentInfo from '/imports/ui/EquipmentInfo';
import Places from '/imports/ui/Places';
import Inspiration from '/imports/ui/Inspiration';
import Booking from '/imports/ui/Booking';


//

// App component - represents the whole app
class Header extends Component
{
    render()
    {
        return (
            <div id="header">
                <div className="container">
                    <div id="startsida">
                        <a id="logo" href="#"></a>
                    </div>

                    <nav>
                        <ul><li id="menu-item-157" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-157"><a href="#">Orter</a>
                            <ul className="sub-menu">
                                <li id="menu-item-574" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-574"><a href="#">Karlstad</a></li>
                                <li id="menu-item-310" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-310"><a href="#">Kristinehamn</a></li>
                            </ul>
                        </li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-30"><a href="#">Starta Fritidsbank</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28"><a href="#">Om oss</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29"><a href="#">Miljö</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26"><a href="#">Press</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25"><a href="#">Kontakt</a></li>
                            <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                <Link to="/categories">Prylar</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="center-block">
                    {this.props.children}
                </div>

            </div>
        );
    }
}

Meteor.startup(() => {
    render((
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="inventory/:category" component={Inventory} />
                <Route path="categories" component={CategoriesList} />
                <Route path="equipmentinfo/:id" component={EquipmentInfo} />
                <Route path="places" component={Places} />
                <Route path="inspiration/:id" component={Inspiration} />
                <Route path="booking/:id" component={Booking} />
            </Route>
        </Router>
    ), document.getElementById("render-target"));
});