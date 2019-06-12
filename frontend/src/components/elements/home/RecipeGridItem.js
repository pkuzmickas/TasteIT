import React, {Component} from 'react'
import {DigitText, DigitButton} from '@cthit/react-digit-components'
import './RecipeGridItem.css'

class RecipeGridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipename: "dragoonchicken",
      recipetime: "30 min",
      // Rest of props are to be sent to recipe page
      recipedescription:"",
      recipeingredients:"",
      recipeinstructions:""

    };
    // binding for callback
    this.openRecipePage = this.openRecipePage.bind(this);
  }

  openRecipePage() {
    // Store state in localStorage, then opens Recipe page
    // TODO: Figure out how to open a new page
  }

  formatTime() {
    var str = "Time: ";
    var returnStr = str.concat(this.state.recipetime);
    return returnStr;
  }

  render() {
    return (
      <div className="recipegriditem">
        <DigitText.Title className="recipetitle"
                         white="true"
                         text={this.state.recipename} />
        <DigitText.Text text={this.formatTime()}
                        white="true"/>
        <div className="buttondiv">
          <DigitButton className="openrecipeviewbutton"
                      text="Open recipe"
                      onClick={this.openRecipePage()}
                      raised="true"/>
        </div>
      </div>
    );
  }

}

export default RecipeGridItem;
