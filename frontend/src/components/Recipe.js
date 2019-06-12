import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {DigitText} from '@cthit/react-digit-components'
import Ingredientlist from './elements/recipe/Ingredientlist.js'
import "./Recipe.css"
class Recipe extends Component {

  render() {
    return (
      <div>
        //<DigitText.Heading3 text={this.props.recipename} />
        //<DigitText.Subtitle text={this.props.recipedescription} />
        <div className="recipeArea">
          <Ingredientlist className="ingredients" ingredients={["Test1", "Test2"]} />
          //<DigitText.Subtitle2 text={this.props.time} />
        </div>
      </div>
    );
  }
}

export default Recipe;
