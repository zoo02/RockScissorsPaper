import { Component } from 'react';
import './App.css';
import BoxClass from './component/BoxClass';

const choice = {
    rock :{
      name : "Rock",
      img : "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png"
    },
    paper : {
      name : "Paper",
      img : "https://blog.kakaocdn.net/dn/HcCJo/btqXD4Lybq6/kcrH6skAoOD9oAq2QYfBx1/paper.png?attach=1&knm=img.png"
    },
    scissors : {
      name : "Scissors",
      img : "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png"
    },
  }

export default class AppClass extends Component {
    constructor() {
        super()
        this.state = {
            userSelect : null,
            comSelect : null,
            result : "",
        }
    }

    play = (userChoice) => {
        let comChoice = this.randomChoice()
        this.setState({
            userSelect : choice[userChoice],
            comSelect : comChoice,
            result : this.judgement(choice[userChoice], comChoice)
        })
      }

    randomChoice = () => {
        let itemArr = Object.keys(choice)
        let randomItem = Math.floor(Math.random() * itemArr.length)
        let final = itemArr[randomItem]
        return choice[final]
    }

    judgement = (user,com) => {
        if (user.name == com.name){
            return "DRAW"
        } else if (user.name == "Rock") {
            return com.name == "Paper" ? "LOSE" : "WIN"
        } else if (user.name == "Paper") {
            return com.name == "Scissors" ? "LOSE" : "WIN"
        } else if (user.name == "Scissors") {
            return com.name == "Rock" ? "LOSE" : "WIN"
        }
    
      }

  render() {
    return (
    <div>
      <div className='main'>
        <BoxClass
          title="YOU" 
          item={this.state.userSelect} 
          result={this.state.result} 
         />
        <BoxClass
          title="COMPUTER" 
          item={this.state.comSelect} 
          result={this.state.result == "WIN" ? "LOSE" : 
          this.state.result == "LOSE" ? "WIN" : 
          this.state.result == "DRAW" ? "DRAW" : null} 
        />
      </div>

      <div className='main'>
        <button onClick={() => this.play("rock")}>✊</button>
        <button onClick={() => this.play("scissors")}>✌️</button>
        <button onClick={() => this.play("paper")}>✋</button>
      </div>
    </div>
    )
  }
}
