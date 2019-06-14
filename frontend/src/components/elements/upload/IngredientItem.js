import React, {Component} from 'react'
import {DigitText} from '@cthit/react-digit-components'
import './IngredientItem.css'

class IngredientItem extends Component {

  handleDelete = ingredientWithAmount => {
    this.props.handleDelete(ingredientWithAmount);
  }

  formatText = ingredientWithAmount => {
    let ingredient = ingredientWithAmount[0];
    let amount = ingredientWithAmount[1];

    return amount + "x " + ingredient;

  }

  render() {
    return (
      <ul className="ingredientList">
        {this.props.ingredientsWithAmount.map((ingredientWithAmount) => {
          return <li onClick={() => {this.handleDelete(ingredientWithAmount)}}
                     key={ingredientWithAmount[0]}>
                  <DigitText.Text text={this.formatText(ingredientWithAmount)}
                                  white="true"/>
                </li>
        })}
      </ul>
    );
  }

}

export default IngredientItem
