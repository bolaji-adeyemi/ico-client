/**
 * @jsx React.DOM
 */
var React = require('react')

var Success = React.createClass({
    nextStep: function() {
        this.props.nextStep();
    },
    render: function() {
        return (
            <div>
                <h2>Successfully Registered!</h2>
                <button className="btn -primary pull-right" onClick={this.props.nextStep}>See you account</button>
            </div>
        )
    }
})

module.exports = Success