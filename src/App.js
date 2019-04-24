import React from 'react';
import logo from './logo.svg';
import './App.css';

// import restaurants from './restaurants'
import displayTypes from './displayTypes'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants : {
        "mediterranean": {
            "Mediterranean Grill": [
                "hummus", "tabouli","dolmas"
            ],
            "Yalla": [
                "hummus wrap", "tabouli wrap", "dolmas"
            ],
            "Nik's": [
                "spanakopita", "gyro", "dolmas"
            ]
        },
        "american":{
            "Chik fil a": [
                "chicken busuit", "chicken sandwich", "chicken salad"
            ],
            "Mary Mac's Tea Room":[
                "biscuit", "fried chicken", "mashed potatoes"
            ],
            "Jersey Mike's": [
                "Big Sandwich", "Bigger sandwich", "Most Biggerest Sandwich"
            ]
        },
        "mexican": {
            "Elmyriachi": [
                "tacos", "burritos", "cheese dip"
            ],
            "Mezcalito's Cantina": [
                "tortas", "tamales", "cheese dip"
            ],
            "Matador":[
                "cheese dip", "cheese dip", "cheese dip"
            ]
          }
        }
      }
    }
  render () {
    console.log('rendering app, this is a sanity check bud :)')
    console.log(Object.keys(this.state.restaurants['mexican']));


    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {
              Object.keys(this.state.restaurants).map((restaurant) => (
                <li>{restaurant}</li>
              ))
            }
          </ul>
          <ul>
            {Object.keys(this.state.restaurants['mexican']).map((restaurant) => (
              <li>{restaurant}</li>
            ))
            }
          </ul>
        </header>
      </div>
    );
    
  }
}

export default App;
