import React, {Component} from 'react'
import './IngredientCreator.css'
import IngredientItem from './IngredientItem.js'
import {Avatar, Chip, TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {DigitButton, DigitText, DigitTextField} from '@cthit/react-digit-components'

class IngredientCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsWithAmount: [],
      currentAmount: 1,
      currentIngredient: ""
    };

  }

  handleDelete = ingredientWithAmount => {
    let newIngredientsWithAmount = this.state.ingredientsWithAmount;
    let index = newIngredientsWithAmount.indexOf(ingredientWithAmount);
    if (index !== -1) {
      newIngredientsWithAmount.splice(index, 1);
      this.setState({
        ingredientsWithAmount: newIngredientsWithAmount
      });
    }

    console.log(this.state.ingredientsWithAmount);
  }

  handleAdd = () => {
    let newIngredientsWithAmount = this.state.ingredientsWithAmount;
    newIngredientsWithAmount.push([
      this.state.currentIngredient, this.state.currentAmount
    ]);

    this.setState({
      ingredientsWithAmount: newIngredientsWithAmount
    });
    console.log(this.state.ingredientsWithAmount);
  }

  render() {
    return (
      <div className="ingredientCreatorArea">
        <DigitTextField onChange={e => {
                          this.setState({
                            currentIngredient: e.target.value
                          });
                        }}
                        upperLabel="Ingredient"
                        lowerLabel="Type in name of the ingredient"
                        value={this.state.currentIngredient}
                        />
        <TextField label="Amount of ingredients"
                   helperText="Type in the amount of ingredients"
                   type="number"
                   value={this.state.currentAmount}
                   onChange={e => {
                     this.setState({
                       currentAmount: e.target.value
                     });
                   }}
                   InputLabelProps={{
                     shrink: true,
                   }}
                   style={{width: 400}}
                   />
        <div className="addIngredientButtonDiv">
          <DigitButton text="Add"
                       primary
                       raised
                       onClick={this.handleAdd}
                       />
        </div>
        <div className="createdIngredientArea">
          <IngredientItem ingredientsWithAmount={this.state.ingredientsWithAmount}
                          handleDelete={this.handleDelete}/>
        </div>
      </div>
    );
  }

}

export default IngredientCreator
