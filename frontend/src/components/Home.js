import React, {Component} from 'react'
import {DigitTable} from '@cthit/react-digit-components'
import axios from 'axios'
import './Home.css';

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
      <div className="recipetable">
        <DigitTable search
                    titleText="Recept från diverse teknologer"
                    searchText="Sök efter recept"
                    showSearchableProps
                    idProp="id"
                    startOrderBy="name"
                    columnsOrder={["name", "score", "time"]}
                    headerTexts={{
                      name: "Recipe name",
                      score: "Rating",
                      time: "Time"
                    }}
                    data={[
                      {
                        name: "Dragonkyckling",
                        score: "10",
                        time: "50 min"
                      }
                    ]}
                    />

      </div>
    );
  }
}

export default Home;
