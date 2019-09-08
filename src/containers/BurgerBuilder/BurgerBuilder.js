import React, {Component} from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 1
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}></Burger>
                <div >build Controls</div>
            </Aux>

        )
    }

}

export default BurgerBuilder;