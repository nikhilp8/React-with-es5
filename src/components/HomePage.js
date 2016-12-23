"use strict";

var React = require('react');

var Home = React.createClass({
	render: function(){
		return(
				<div className='jumbotron'>
				<h1>Admin Page</h1>
				<p>Using React, react-router & flux </p>
				</div>
			);
	}
});

module.exports = Home;