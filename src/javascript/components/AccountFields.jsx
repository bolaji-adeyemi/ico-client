/**
 * @jsx React.DOM
 */
var React = require('react')

var AccountFields = React.createClass({
    render: function() {
        return (
            <div>
              <h2>Account Registration</h2>
              <ul className="form-fields">
                <li>
                  <label>Email</label>
                  <input type="email" ref="email" defaultValue={this.props.fieldValues.email} />
                </li>
                <li>
                  <label>Password</label>
                  <input type="password" ref="password" defaultValue={this.props.fieldValues.password} />
                </li>
                <li>
                  <label>Confirm Password</label>
                  <input type="password" ref="confirmpassword" defaultValue={this.props.fieldValues.password} />
                </li>
                <li>
                  <label>Wave Address</label>
                  <input type="text" ref="waveaddress" defaultValue={this.props.fieldValues.email} />
                </li>
                <li className="form-footer">
                  <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
                </li>
              </ul>
            </div>
        )
    },

    nextStep: function(e) {
        e.preventDefault();
        var data = {
            password : this.refs.password.getDOMNode().value,
            confirmpassword : this.refs.confirmpassword.getDOMNode().value,
            email: this.refs.email.getDOMNode().value,
            wave_address : this.refs.waveaddress.getDOMNode().value,
        }

        this.props.saveValues(data);
    },
})

module.exports = AccountFields