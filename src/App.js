import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위, 바위, 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3,4의 결과를 가지고 승패를 가른다
// 6. 승패 결과에 따라 박스 테두리 색이 바뀐다(이기면 초록, 지면 빨강)

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

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [comSelect, setComSelect] = useState(null)
  const [result, setResult] = useState("")


const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let comChoice = randomChoice()
	setComSelect(comChoice)
	setResult(judgement(choice[userChoice],comChoice))
  }

const judgement = (user,com) => {
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

const randomChoice = () => {
	let itemArr = Object.keys(choice)
	let randomItem = Math.floor(Math.random() * itemArr.length)
	let final = itemArr[randomItem]
	return choice[final]
	console.log(choice[final])
}
  return (
    <div>
      <div className='main'>
        <Box title="YOU" item={userSelect} result={result} />
        <Box title="COMPUTER" item={comSelect} 
            result={result == "WIN" ? "LOSE" : 
            result == "LOSE" ? "WIN" : 
            result == "DRAW" ? "DRAW" : null} />
      </div>

      <div className='main'>
        <button onClick={() => play("rock")}>✊</button>
        <button onClick={() => play("scissors")}>✌️</button>
        <button onClick={() => play("paper")}>✋</button>
      </div>
    </div>

  );
}

export default App;
