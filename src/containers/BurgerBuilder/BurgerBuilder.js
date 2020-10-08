import React from 'react';
const { Component } = require("react");
const { default: Aux } = require("../../hoc/Auxilary");

class BurgerBuilder extends Component
{
    render() {
        return (
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;