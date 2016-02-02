var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');  //React Router to define routes
var HashHistory = require('react-router/lib/hashHistory'); //maintain logs or history of page where route is currently on
var Router = ReactRouter.Router;   //Router deciding which content to show on page
var Route = ReactRouter.Route;   //Object to configure the route


var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
    	<h1> Working Fine </h1>
      {this.props.children}
    </h1>
  }
});

//  GET   localhost:8000/#/1
var Child1 = React.createClass({
	render: function() {
		return <h1> I m the child1 </h1>		
	}
});

//  GET  localhost:8000/#/2
var Child2 = React.createClass({
	render: function() {
		return <h1> I m the child2 </h1>		
	}
});

var routes = (
	< Router history={HashHistory}>
		<Route path="/" component={Hello}>
			<Route path="1" component={Child1} />
			<Route path="2" component={Child2} />
		</Route>
	</Router> 
)

ReactDOM.render(routes, document.querySelector('.container'));
