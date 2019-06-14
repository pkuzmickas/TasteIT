import React, {Component} from 'react'
import {TextField} from '@material-ui/core'
import IngredientCreator from './elements/upload/IngredientCreator.js'
import {DigitDesign, DigitText, DigitTextField,
        DigitTextArea} from '@cthit/react-digit-components'
import './styles/Upload.css'

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: "",
      recipeTime: "",
      recipeAmount: "",
      recipeIngredients: [],
      recipeDescription: "",
      recipeInstructions: ""
    }
  }

  render() {
    return(
      <div className="uploadBody">
        <div className="uploadTitle">
          <DigitText.Heading3 text="Upload recipe" />
        </div>
        <DigitDesign.Card abswidth="400px">
          <div className="uploadForm">
            <div className="recipeFormElement">
              <DigitTextField onChange={e => {
                                this.setState({
                                  recipeName: e.target.value
                                });
                              }}
                              value={this.state.recipeName}
                              upperLabel="Recipe name"
                              lowerLabel="The name of the recipe" />
            </div>
            <div className="recipeFormElement">
              <TextField label="Recipe time"
                         helperText="Time in minutes"
                         type="number"
                         value={this.state.recipeTime}
                         onChange={e => {
                          this.setState({
                            recipeTime: e.target.value
                          });
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{width: 400}} />
            </div>
            <div className="recipeFormElement">
              <TextField label="Recipe amount"
                         helperText="Amount of servings"
                         type="number"
                         value={this.state.recipeAmount}
                         onChange={e => {
                          this.setState({
                            recipeAmount: e.target.value
                          });
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{width: 400}} />
            </div>
            <div className="recipeFormElement">
              <IngredientCreator />
            </div>
            <div className="recipeFormElement">
              <DigitTextArea onChange={e => {
                              this.setState({
                                recipeDescription: e.target.value
                              });
                             }}
                             value={this.state.recipeDescription}
                             upperLabel="Recipe description"
                             lowerLabel="A description about the recipe"
                             rows={4} />
            </div>
            <div className="recipeFormElement">
              <DigitTextArea onChange={e => {
                              this.setState({
                                recipeInstructions: e.target.valye
                              });
                             }}
                             value={this.state.recipeInstructions}
                             upperLabel="Recipe instructions"
                             lowerLabel="How to make this recipe"
                             rows={4} />
            </div>

          </div>
        </DigitDesign.Card>
      </div>
    );
  }
}

export default Upload
