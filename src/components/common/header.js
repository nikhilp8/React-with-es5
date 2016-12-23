"use strict";

var React = require('react');

var header = React.createClass({
	render: function(){
		return(
				<div className='navbar navbar-default'>
					<div className='container-fluid'>
						<a href="#" className='navbar-brand'><img src='images/logo.png'/></a>

						<ul className="nav navbar-nav">
        					<li><a href="#">Home</a></li>
        					<li><a href="#about">About</a></li>
                  <li><a href="#authors">Authors</a></li>
        				</ul>
					</div>
				</div>
			);
	}
});

module.exports = header;