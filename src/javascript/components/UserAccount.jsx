/**
 * @jsx React.DOM
 */
var React = require('react')

var UserAccount = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Confirm Registration</h2>
                <ul>
                    <li><b>Payment Address:</b> {this.props.paymentAddress}</li>
                    <li><b>Account Balance:</b> 0</li>
                </ul>
                <ul className="form-fields">
                    <li className="form-footer">
                        <button className="btn -primary pull-left" onClick={this.props.submitRegistration}>Buy CGT</button>
                    </li>
                </ul>
            </div>
        )
    }
})

module.exports = UserAccount