import React, {Component} from 'react'
import {DigitTable} from '@cthit/react-digit-components'
import axios from 'axios'

class Home extends Component {
  render() {

    const recipes = [];

    return (
      <div>
        <DigitTable search
                    titleText="Recept från IT-teknologer"
                    searchText="Sök efter recept"
                    />

      </div>
    );
  }
}

export default Home;
