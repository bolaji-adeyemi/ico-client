/**
 * @jsx React.DOM
 */
var React         = require('react');
var AccountFields = require('./AccountFields');
var Confirmation  = require('./Confirmation');
var Success       = require('./Success');
var PaymentMethod = require('./PaymentMethod');
var UserAccount = require('./UserAccount')
var assign        = require('object-assign');
const axios = require('axios');

var fieldValues = {
    name     : null,
    email    : null,
    password : null,
    confirmpassword:null,
    wave_address:null,
    paymentMethod: null
};

const paymentAddress ={
    wave:'wavejkhkjhjkhjw9393893',
    eth: 'eth9oljlkj',
    btc:'btcthe1234'
}

var Registration = React.createClass({
    getInitialState: function() {
        return {
            step : 1
        }
    },

    saveValues: function(field_value) {
        var me = this;
        return function() {
            fieldValues = assign({}, fieldValues, field_value)

            axios.post('http://localhost:1337/user/createUser',{
                headers: {
                    'accept': 'application/json',
                    'accept-language': 'en_US',
                    'content-type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin':'*'
                },
                data:fieldValues
            })
                .then(function(response){
                    if(response.status === 200){
                        me.nextStep();
                    }
                })
        }.bind(this)();
    },

    nextStep: function() {
        this.setState({
            step : this.state.step + 1
        })
    },
    savePaymentMethod: function(fields) {
        var me = this;
        fieldValues = Object.assign({}, fieldValues, fields);
        axios.get('http://localhost:1337/address/getAddress',
            {
                params: {
                    payment_method: fieldValues.paymentMethod
                }
            })
            .then(function(response){
                if(response.status === 200){
                    me.setState({ payment_address:response.data.address.address }, function(){
                       console.log(me.state.payment_address)
                        me.nextStep();
                    });
                }

            });


    },

    previousStep: function() {
        this.setState({
            step : this.state.step - 1
        })
    },

    submitRegistration: function() {
        // Handle via ajax submitting the user data, upon
        // success return this.nextStop(). If it fails,
        // show the user the error but don't advance

        this.nextStep()
    },

    showStep: function() {
        switch (this.state.step) {
            case 1:
                return (<AccountFields fieldValues={fieldValues}
                                       saveValues={this.saveValues}
                                      previousStep={this.previousStep}
                />)
              case 2:
                return (<PaymentMethod fieldValues={fieldValues}
                                       previousStep={this.previousStep}
                                       savePaymentMethod={this.savePaymentMethod} />)

            case 3:
                return (<UserAccount fieldValues={fieldValues}
                                     previousStep={this.previousStep}
                                     paymentAddress={this.state.payment_address}
                                     submitRegistration={this.submitRegistration} />)

        }
    },

    render: function() {
        var style = {
            width : (this.state.step / 4 * 100) + '%'
        }

        return (
            <main>
              <span className="progress-step">Step {this.state.step}</span>
              <progress className="progress" style={style}></progress>
                {this.showStep()}
            </main>
        )
    }
})

module.exports = Registration