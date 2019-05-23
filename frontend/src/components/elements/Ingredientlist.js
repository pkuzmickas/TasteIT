import React, {Component} from 'react'
import {DigitText} from '@cthit/react-digit-components'
import './Ingredients.css'

class Ingredientlist extends Component {
  createIngredients(ingredient) {
    // ingredient should be a string
    return <li key={ingredient.key}>
        <DigitText.Subtitle2 white='true' text={ingredient} />
          </li>
  }

  render() {
    // ingredients should be an array of strings
    var ingredientList = this.props.ingredients;
    var listItems = ingredientList.map(this.createIngredients);

    return (
      <ul className="ingredientList">
        {listItems}
      </ul>
    );
  }
}

export default Ingredientlist;
