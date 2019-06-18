import React, {Component} from 'react'
import {DigitText, DigitButton, DigitMenu} from '@cthit/react-digit-components'
import './RecipeGridItem.css'

class RecipeGridItem extends Component {
  constructor(props) {
    super(props);
    let recipe = this.props.recipe
    this.state = {
      recipeName: recipe.name,
      recipeTime: recipe.time,
      // Rest of props are to be sent to recipe page
      recipeAmount: recipe.amount,
      recipeIngredients: recipe.ingredients,
      recipeDescription: recipe.description,
      recipeInstructions: this.props.recipeinstructions,
      recipeCreator: this.props.recipecreator
    };
  }

  openRecipePage = () => {
    // Store information in localStorage, then opens Recipe page
    // TODO: Figure out how to open a new page
  }

  formatTime = () => {
    var str = "Time: ";
    var returnStr = str.concat(this.state.recipeTime, " min");
    return returnStr;
  }

  handleEditMenu = choice => {
    this.props.handleEdit(choice);
  }

  handleDeleteRecipe = () => {
    this.props.handleDelete();
  }

  renderMenuIfCreator = () => {
    let isCreator = this.props.isUserCreator;
    if (isCreator) {
      return <DigitMenu onClick= {value => {
                  console.log(value + " has been selected");
                 }}
                 valueToTextMap={{
                   edit_recipe: "Edit recipe",
                   delete_recipe: "Delete recipe"
                 }} />
    } else {
          return <div></div>
    }
  }

  render() {
    return (
      <div className="recipeGridItem">
        <div className="recipeTitle">
          <DigitText.Title className="recipeTitle"
                           white="true"
                           text={this.state.recipeName} />
        </div>
        <div className="recipeMenu">
          {this.renderMenuIfCreator()}
        </div>

        <DigitText.Text text={this.formatTime()}
                        white="true" />
          <div className="buttonDiv">
          <DigitButton text="Open recipe"
                       onClick={this.openRecipePage()}
                       raised />
        </div>
      </div>
    );
  }

}

export default RecipeGridItem;
