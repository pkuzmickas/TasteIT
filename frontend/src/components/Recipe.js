import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Edit from '@material-ui/icons/Edit'
import {DigitText, DigitDesign, DigitFAB} from '@cthit/react-digit-components'
import Ingredientlist from './elements/recipe/Ingredientlist.js'
import Instructions from './elements/recipe/Instructions.js'
import "./styles/Recipe.css"
class Recipe extends Component {
// TODO: Seperate each DigitText into separate elements for ease of styling'
  constructor(props) {
    super(props);
    // hardcoded until implemented
    this.state = {
      recipe: {'name': "Dragon Chicken", 'time': "30", 'servings': "10",
       'ingredients': [["Chicken", "10", "st"], ["Dragon", "10", "st"]],
       'description': "DrawIT's signature dishöklköa\nsöldölsakdösaköld\nksaöldklöskölegaldkdjdskjfklsdjfklsdjfdsfjdskfjsklfjkdsfjl",
       'instructions': "Slice and fry chicken. Sprinkle freshly chopped dragon leaves, serve with fresh pasta or rice",
       'creator': "schan"}
    };
  }

  formatTime = time => {
    return ("Time: " + time + " min" );
  }

  openEdit = () => {
    console.log("open edit page");
  }

  render() {
    let currentRecipe = this.state.recipe;
    return (
      <div className="recipeArea">
        <DigitDesign.Card abswidth="700px">
          <div className="recipeTitleArea">
            <DigitText.Heading3 text={currentRecipe.name} />
          </div>
          <div className="recipeCreatorArea">
            <DigitText.Subtitle2 text={"Author: " + currentRecipe.creator} />
          </div>
          <div className="recipeDescriptionArea">
            <DigitText.Title text={currentRecipe.description} />
          </div>
          <div className="recipeTimeArea">
            <DigitText.Text text={this.formatTime(currentRecipe.time)} />
          </div>
          <div className="recipeIngredientsArea">
            <DigitText.Text text="Ingredients:" />
            <Ingredientlist className="ingredients"
                            ingredients={currentRecipe.ingredients} />
          </div>

          <div className="recipeInstructionsArea">
            <Instructions instructions={currentRecipe.instructions} />
          </div>
          <div className="recipeFabArea">
            <DigitFAB icon={Edit}
                      primary
                      onClick={this.openEdit} />
          </div>
        </DigitDesign.Card>

      </div>
    );
  }
}

export default Recipe;
