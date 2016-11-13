import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

// Task component - represents a single todo item
export default class Places extends Component {
    render() {

        return (
            <div>
                <div className="col-lg-4">
                    <h2>Platser att utöva detta.</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="col-lg-4">
                    {/*<iframe width="600" height="450" style={{border:0}}*/}
                            {/*src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJXdsqMzKxXEYRGY11rYDCHPw&key=AIzaSyDeDH45Q3Y1snKNX9sfr66Hs94epd33v4k"*/}
                    {/*></iframe>*/}
                    <iframe width="600" height="450"
                            style={{border:0}}
                            src="https://www.google.com/maps/embed/v1/search?q=fotboll%20near%20Kronoparken%2C%20Karlstad%2C%20Sweden&key=AIzaSyBiKGYZykb7A02Og3R3TItCSW7HXt9uF1M" >
                    </iframe>
                </div>
            </div>
        );
    }
}
