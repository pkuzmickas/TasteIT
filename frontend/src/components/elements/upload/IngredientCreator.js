import React, {Component} from 'react'
import './IngredientCreator.css'
import {Chip, TextField} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {DigitButton, DigitTextField} from '@cthit/react-digit-components'

class IngredientCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientAmounts: [],
      ingredients: [],
      currentAmount: 1,
      currentIngredient: ""
    };
  }

  createChip = ingredient => {
    return <Chip key={ingredient}
                 color="primary"
                 size="medium"
                 icon="none"
                 onDelete={this.handleDelete.bind(this)}
                 label={ingredient}
           />
  }

  handleDelete = () => {

  }

  handleAdd = () => {
    /*
    console.log(this.state.currentIngredient);
    console.log(this.state.currentAmount);
    console.log(this.state.ingredientAmounts);
    console.log(this.state.ingredients);
    */
    var newIngredientAmounts = this.state.ingredientAmounts;
    newIngredientAmounts.push(this.state.currentAmount);

    var newIngredients = this.state.ingredients;
    newIngredients.push(this.state.currentIngredient);

    this.setState({
      ingredientAmounts: newIngredientAmounts,
      ingredients: newIngredients
    });

    console.log(this.state.ingredientAmounts);
    console.log(this.state.ingredients);
  }

  render() {
    var ingredients = this.state.ingredients;
    var chipItems = ingredients.map(this.createChip);

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
                   style={{width: 400}}
                   />
      <div className="addIngredientButtonDiv">
          <DigitButton text="Add"
                       primary
                       raised
                       onClick={this.handleAdd.bind(this)}
                       />
        </div>
        <div className="createdIngredientArea">
          {chipItems}
        </div>
      </div>
    );
  }

}

export default IngredientCreator
