"use strict";

var React = require('react');

var about = React.createClass({
	render: function(){
		return(
				<div className='jumbotron'>
				<h1>React</h1>
				<ul>
					<li>React</li>
					<li>react-router</li>
					<li>flux</li>
					<li>browserify</li>
					<li>eslint</li>
				</ul>
				</div>
			);
	}
});

module.exports = about;