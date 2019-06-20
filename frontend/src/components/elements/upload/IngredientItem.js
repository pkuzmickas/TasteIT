import React, {Component} from 'react'
import {DigitText, DigitTooltip} from '@cthit/react-digit-components'
import './IngredientItem.css'

class IngredientItem extends Component {

  handleDelete = ingredient => {
    this.props.handleDelete(ingredient);
  }

  formatText = ingredient => {
    let ing = ingredient[0];
    let amount = ingredient[1];
    let meassurement = ingredient[2];

    return amount + " " + meassurement + " " + ing;
  }

  render() {
    return (
      <ul className="ingredientList">
        {this.props.ingredients.map((ingredient) => {
          return <DigitTooltip text="Click to delete">
                    <li onClick={() => {this.handleDelete(ingredient)}}
                        key={ingredient[0]}>
                        <DigitText.Text text={this.formatText(ingredient)}
                                   white="true" />
                    </li>
                </DigitTooltip>
        })}
      </ul>
    );
  }

}

export default IngredientItem
