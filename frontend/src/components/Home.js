import React, {Component} from 'react'
import {DigitLayout} from '@cthit/react-digit-components'
import {connect} from 'react-redux'
import RecipeGridItem from './elements/home/RecipeGridItem.js'
import axios from 'axios'
import './styles/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    /*
      Currently hardcoded until backend is connected
      Format of recipe:
        name
        time
        amount
        ingredients [ingredient, amount]
        description
        instructions
        creator (preferably in form of cid)
    */
    this.state = {
      recipes: [
        {'name': "Dragon Chicken", 'time': "30", 'amount': "10",
         'ingredients': [["Chicken", "10", "st"], ["Dragon", "10", "st"]],
         'description': "DrawIT's signature dish",
         'instructions': "Slice and fry chicken\nSprinkle freshly chopped dragon leaves",
         'creator': "schan"},
         {'name': "Dragon Chicken", 'time': "30", 'amount': "10",
          'ingredients': [["Chicken", "10"], ["Dragon", "10"]],
          'description': "DrawIT's signature dish",
          'instructions': "Slice and fry chicken\nSprinkle freshly chopped dragon leaves",
          'creator': "schan"}
      ]
    };
  }

  isUserCreator = creator => {
    /*
      Checks if the creator of recipe is the current user, currently
      hardcoded
    */
    return false;
  }

  handleEdit = choice => {
    if (choice === "edit_recipe") {
      console.log(choice + " has been selected");
      // Route to edit page
    } else {
      console.log(choice + " has been selected");
      this.handleDeleteRecipe();
    }
  }

  handleDelete = () => {

  }

  renderGridElements = item => {
    return <RecipeGridItem recipe={item}
                           isUserCreator={this.isUserCreator()}
                           handleEdit={this.handleEdit}
                           handleDelete={this.handleDelete} />
  }

  render() {
    let toBeRendered = this.state.recipes;
    let gridElements = toBeRendered.map(this.renderGridElements);

    return (
      <div className="recipegrid">
        <DigitLayout.UniformGrid
          minItemWidth="300px"
          minItemHeight="200px"
          rowGap="30px"
          columnGap="30px" >

          {gridElements}

        </DigitLayout.UniformGrid>
      </div>
    );
  }
}

export default Home;
