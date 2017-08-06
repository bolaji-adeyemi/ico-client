var React = require('react');

var PaymentMethod = React.createClass({
    render: function() {
        return (<div>
                <h2>Account Registration</h2>
                <ul className="form-fields">
                    <li>
                        <label>Select Payment Method</label>
                        <select ref="paymentMethod" className="selectpicker">
                            <option value="wave">Waves</option>
                            <option value="eth">Ethereum</option>
                            <option value="btc">Bitcoin</option>
                        </select>
                    </li>
                    <li className="form-footer">
                        <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
                        <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
                    </li>
                </ul>
            </div>
        )
    },

    nextStep: function(e) {
        e.preventDefault();
        // Get values via this.refs
        var data = {
            paymentMethod : this.refs.paymentMethod.getDOMNode().value,
        }

        this.props.savePaymentMethod(data);
    }
})

module.exports = PaymentMethod;
