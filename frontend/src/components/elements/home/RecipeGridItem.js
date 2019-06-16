import React, {Component} from 'react'
import {DigitText, DigitButton, DigitMenu} from '@cthit/react-digit-components'
import './RecipeGridItem.css'

class RecipeGridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipename: this.props.recipename,
      recipetime: this.props.recipetime,
      // Rest of props are to be sent to recipe page
      recipeamount: this.props.recipeamount,
      recipedescription: this.props.recipedescription,
      recipeingredients: this.props.recipeingredients,
      recipeinstructions: this.props.recipeinstructions,
      recipecreator: this.props.recipecreator
    };
  }

  openRecipePage = () => {
    // Store information in localStorage, then opens Recipe page
    // TODO: Figure out how to open a new page
  }

  formatTime = () => {
    var str = "Time: ";
    var returnStr = str.concat(this.state.recipetime, " min");
    return returnStr;
  }

  render() {
    return (
      <div className="recipeGridItem">
        <div className="recipeTitle">
          <DigitText.Title className="recipeTitle"
                           white="true"
                           text={this.state.recipename} />
        </div>
        <div className="recipeMenu">
          <DigitMenu onClick= {value => {
                      console.log(value + " has been selected");
                     }}
                     valueToTextMap={{
                       first_option: "First option",
                       second_option: "Second option"
                     }} />
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
