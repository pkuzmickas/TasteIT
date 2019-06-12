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
          <RecipeGridItem />
          <RecipeGridItem />
          <RecipeGridItem />
          <RecipeGridItem />
          <RecipeGridItem />
          <RecipeGridItem />
          <RecipeGridItem />
          <RecipeGridItem />
        </DigitLayout.UniformGrid>
      </div>
    );
  }
}

export default Home;
