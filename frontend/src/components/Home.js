import React, {Component} from 'react'
import {DigitLayout} from '@cthit/react-digit-components'
import RecipeGridItem from './elements/home/RecipeGridItem.js'
import axios from 'axios'
import './styles/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  //  this.getData();
  }
/*
  getData() {
    let self = this;
    let url = "'localhost:4000';
    axios.get(url)
      .then(function(res) {
        self.setState({

        });
      })
      .catch(function() {
        console.log("Database is not cooperating");
      });
  }
  */

  render() {
    return (
      <div className="recipegrid">
        <DigitLayout.UniformGrid
          minItemWidth="300px"
          minItemHeight="200px"
          rowGap="30px"
          columnGap="30px"
          >
          <RecipeGridItem recipename="Dragon Chicken"
                          recipetime="30 min"
                          recipeamount="1"
                          recipedescription="DrawIT's signature dish"
                          recipeingredients="Dragon, Chicken"
                          recipeinstructions="Fry chicken, mix with chopped dragon"/>
                          <RecipeGridItem recipename="Dragon Chicken"
                                          recipetime="30 min"
                                          recipeamount="1"
                                          recipedescription="DrawIT's signature dish"
                                          recipeingredients="Dragon, Chicken"
                                          recipeinstructions="Fry chicken, mix with chopped dragon"/>
                                        <RecipeGridItem recipename="Dragon Chicken"recipetime="30 min"recipeamount="1"recipedescription="DrawIT's signature dish"recipeingredients="Dragon, Chicken"recipeinstructions="Fry chicken, mix with chopped dragon"/>
                                        <RecipeGridItem recipename="Dragon Chicken"recipetime="30 min"recipeamount="1"recipedescription="DrawIT's signature dish"recipeingredients="Dragon, Chicken"recipeinstructions="Fry chicken, mix with chopped dragon"/>
                                        <RecipeGridItem recipename="Dragon Chicken"recipetime="30 min"recipeamount="1"recipedescription="DrawIT's signature dish"recipeingredients="Dragon, Chicken"recipeinstructions="Fry chicken, mix with chopped dragon"/>
                                        <RecipeGridItem recipename="Dragon Chicken"recipetime="30 min"recipeamount="1"recipedescription="DrawIT's signature dish"recipeingredients="Dragon, Chicken"recipeinstructions="Fry chicken, mix with chopped dragon"/>
                                        <RecipeGridItem recipename="Dragon Chicken"recipetime="30 min"recipeamount="1"recipedescription="DrawIT's signature dish"recipeingredients="Dragon, Chicken"recipeinstructions="Fry chicken, mix with chopped dragon"/>
                                        <RecipeGridItem recipename="Dragon Chicken"recipetime="30 min"recipeamount="1"recipedescription="DrawIT's signature dish"recipeingredients="Dragon, Chicken"recipeinstructions="Fry chicken, mix with chopped dragon"/>
                                        <RecipeGridItem recipename="Dragon Chicken"recipetime="30 min"recipeamount="1"recipedescription="DrawIT's signature dish"recipeingredients="Dragon, Chicken"recipeinstructions="Fry chicken, mix with chopped dragon"/>
                                        <RecipeGridItem recipename="Dragon Chicken"recipetime="30 min"recipeamount="1"recipedescription="DrawIT's signature dish"recipeingredients="Dragon, Chicken"recipeinstructions="Fry chicken, mix with chopped dragon"/>
                                        <RecipeGridItem recipename="Dragon Chicken"recipetime="30 min"recipeamount="1"recipedescription="DrawIT's signature dish"recipeingredients="Dragon, Chicken"recipeinstructions="Fry chicken, mix with chopped dragon"/>       
        </DigitLayout.UniformGrid>
      </div>
    );
  }
}

export default Home;
