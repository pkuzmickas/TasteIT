import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {DigitText} from '@cthit/react-digit-components'
import Ingredientlist from './elements/recipe/Ingredientlist.js'
import Instructions from './elements/recipe/Instructions.js'
import "./styles/Recipe.css"
class Recipe extends Component {
// TODO: Seperate each DigitText into separate elements for ease of styling
  render() {
    return (
      <div className="recipe">

        <DigitText.Heading3 text="Dragon Chicken" />
        <DigitText.Title text="DrawIT's signature dish" />
        <DigitText.Text text="Time: 30 min" />

        <div className="recipeIngredientsArea">
          <DigitText.Text text="Ingredients:" />
          <Ingredientlist className="ingredients" ingredients={["Dragon", "Chicken"]} />
        </div>

        <div className="recipeInstructionsArea">
          <Instructions />
        </div>

      </div>
    );
  }
}

export default Recipe;
