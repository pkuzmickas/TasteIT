import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {DigitText} from '@cthit/react-digit-components'
import Ingredientlist from './elements/recipe/Ingredientlist.js'
import "./styles/Recipe.css"
class Recipe extends Component {

  render() {
    return (
      <div className="recipe">
        //<DigitText.Heading3 text={this.props.recipename} />
        //<DigitText.Subtitle text={this.props.recipedescription} />
        <DigitText.Heading3 text="Dragon Chicken" />
        <DigitText.Subtitle text="A delicious way to eat chicken, \n DrawIT's signature dish" />
        <div className="recipeArea">
          <Ingredientlist className="ingredients" ingredients={["Dragon", "Chicken"]} />
          //<DigitText.Subtitle2 text={this.props.time} />
        </div>
      </div>
    );
  }
}

export default Recipe;
