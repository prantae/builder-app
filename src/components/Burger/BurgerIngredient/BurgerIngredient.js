import React from 'react';
import './BurgerIngredient.css'

const burgerIngredient = (props) => {
    let ingredient = null;

    switch(props.type) {
     case('bread-bottom'):
        ingredient = <div className="BreadBottom"></div>
        break;
    case('bread-top'):
        ingredient = (
            <div className="BreadTop">
                <div className="Seed1"></div>
                <div className="Seed2"></div>
                <div className="Seed3"></div>
                <div className="Seed4"></div>
            </div>
        );
        break;
    case('meat'):
        ingredient = <div className="Meat"></div>;
        break;
    case('cheese'):
        ingredient = <div className="Cheese"></div>;
        break;
    case('onion'):
        ingredient = <div className="Onion"></div>;
        break;
    case('cucumber'):
        ingredient = <div className="Cucumber"></div>;
        break;
    case('olive'):
        ingredient = <div className="Olive"></div>;
        break;

    }
};

export default burgerIngredient;