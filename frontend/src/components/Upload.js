import React, {Component} from 'react'
import {TextField} from '@material-ui/core'
import IngredientCreator from './elements/upload/IngredientCreator.js'
import {DigitDesign, DigitText, DigitTextField,
        DigitTextArea, DigitButton} from '@cthit/react-digit-components'
import './styles/Upload.css'

class Upload extends Component {
  /*
  Format of recipe:
    name
    time
    amount
    ingredients [ingredient, amount, meassurement]
    description
    instructions
    creator (preferably in form of cid)
  */
  constructor(props) {
    super(props);
    this.state = {
      recipeName: "",
      recipeTime: "",
      recipeAmount: "",
      recipeIngredients: [],
      recipeDescription: "",
      recipeInstructions: "",
      currentIngredient: "",
      currentAmount: "",
      currentMeassurement: "g"
    }
  }

  changeIngredient = ingredient => {
    this.setState({
      currentIngredient: ingredient
    });
  }

  changeAmount = amount => {
    this.setState({
      currentAmount: amount
    });
  }

  changeMeassurement = meassurement => {
    this.setState({
      currentMeassurement: meassurement
    })
  }

  handleDelete = ingredientWithAmount => {
    let newRecipeIngredients = this.state.recipeIngredients;
    let index = newRecipeIngredients.indexOf(ingredientWithAmount);
    if (index !== -1) {
      newRecipeIngredients.splice(index, 1);
      this.setState({
        recipeIngredients: newRecipeIngredients
      });
    }
  }

  handleAdd = () => {
    let newRecipeIngredients = this.state.recipeIngredients;
    newRecipeIngredients.push([
      this.state.currentIngredient, this.state.currentAmount,
      this.state.currentMeassurement
    ]);

    this.setState({
      recipeIngredients: newRecipeIngredients
    });
    console.log(this.state.recipeIngredients);
  }

  handleUpload = () => {
    // Hardcoded creator until integration
    let creator = "schan";
    let recipeData = {'name': this.state.recipeName,
                      'time': this.state.recipeTime,
                      'amount': this.state.recipeAmount,
                      'ingredients': this.state.recipeIngredients,
                      'description': this.state.recipeDescription,
                      'instructions': this.state.recipeInstructions,
                      'creator': creator};
    console.log(recipeData);
    // Do an Axios-call to send this to the backend
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
                        style={{width: 460}} />
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
                        style={{width: 460}} />
            </div>
            <div className="recipeFormElement">
              <IngredientCreator recipeIngredients={this.state.recipeIngredients}
                                 handleAdd={this.handleAdd}
                                 handleDelete={this.handleDelete}
                                 changeIngredient={this.changeIngredient}
                                 changeAmount={this.changeAmount}
                                 changeMeassurement={this.changeMeassurement}
                                 ingredientValue={this.state.currentIngredient}
                                 amountValue={this.state.currentAmount}
                                 meassurementValue={this.state.currentMeassurement} />
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
                                recipeInstructions: e.target.value
                              });
                             }}
                             value={this.state.recipeInstructions}
                             upperLabel="Recipe instructions"
                             lowerLabel="How to make this recipe"
                             rows={4} />
            </div>

          </div>
          <div className="uploadButtonDiv">
            <DigitButton text="Upload recipe"
                         primary
                         raised
                         onClick={this.handleUpload} />

          </div>
        </DigitDesign.Card>
      </div>
    );
  }
}

export default Upload
