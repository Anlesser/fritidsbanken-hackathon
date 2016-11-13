
import React, { Component, PropTypes } from 'react';
import {Categories} from '/imports/collections';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


class Category extends Component
{
    render()
    {
        var {src,name} = this.props.category;
        var categoryLink = "inventory/" +name;
        return (
          <div className="col-md-4">
              <h2>{name}</h2>
              <Link to={categoryLink}><img src={src} height="100px"/></Link>
          </div>
        );
    }
}
Category.propTypes = {
    category: PropTypes.object.isRequired,
};
// App component - represents the whole app
export default class CategoriesList extends Component {

    getCategories()
    {
        return [
            {_id:1,name:"Bollar", src:"http://vbyff.se/wp-content/uploads/2013/10/bollar.jpg"},
            {_id:2,name:"Hockey", src:"http://activeforlife.com/wp/wp-content/uploads/2015/09/hockey-with-heart.jpg"},
            {_id:3,name:"Tennis", src:"http://www.fitnessandtennis.com/pages/baltimoreft/image/Tennis%20Racquet%20Picturejpg.jpg"},
        ];
    }

    renderCategories()
    {
        return this.getCategories().map((category)=>
            (<Category key={category._id} category={category} />)
            );

    }

    render() {
        return (
            <div>
                {this.renderCategories()}
            </div>
        );
    }
}

// CategoriesList.propTypes = {
//     categories: PropTypes.array.isRequired,
// };

//
// export default createContainer(() => {
//     return {
//
//     };
// }, CategoriesList);