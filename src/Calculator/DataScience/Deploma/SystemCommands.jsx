import React, { useState } from 'react';
import MyForm from '../../MyForm';
function SystemCommands() {
  const [inputvalue, setInputvalue] = useState({
    QUIZ1: '',
    QUIZ2: '',
    GAA1: '',
    GAA2: '',
    GAA3: '',
    OPPE1:'',
    OPPE2: '',
    VMT: '',
    'BONUS MARKS':'',
    END_TERM: '',
  });
  const [score, setScore] = useState("");
  let [grade, setgrade] = useState("");

  const handalchange = (e) => {
    const { name, value } = e.target;
    if(name === 'BONUS MARKS' && parseInt(value) > 5 ){
      setInputvalue({
         ...inputvalue,
          [name]:5
      })
      return;
    }
    const sanitizedValue =  Math.min(value,100)
    setInputvalue({
     ...inputvalue,
      [name]: sanitizedValue,
    });
  };
  const handalscore = () => {
    const {QUIZ1,QUIZ2,END_TERM,GAA1,GAA2,GAA3,OPPE1,OPPE2,VMT,'BONUS MARKS':bonusmark} = inputvalue;
    let T =  0.06 * GAA1 + 0.02*  GAA2 + 0.02* GAA3+ Math.max(0.15 * QUIZ1 + 0.15 * QUIZ2, 0.2 * Math.max(QUIZ1,QUIZ2)) + 0.15*  OPPE1 +0.2 * OPPE2+ 0.3 * END_TERM + 0.1 * VMT 
    if( T > 40){
      T += parseInt(bonusmark)
    }
    T = Math.min(T, 100);
    let score = parseInt(T)
    setScore(score);

    if (score >= 90) {
      setgrade('PASS : S');
    } else if (score >= 80) {
      setgrade('PASS : A');
    } else if ( score >= 70) {
      setgrade('PASS : B');
    } else if ( score >= 60) {
      setgrade('PASS : C');
    } else if (score >= 50) {
      setgrade('PASS : D');
    } else if (score >= 40) {
      setgrade('PASS : E');
    }else{
      setgrade('FAIL')
    }
  };
  return (
    <>
    <MyForm
    inputvalue={inputvalue}
    score={score}
    grade={grade}
    handalscore={handalscore}
    handalchange={handalchange}
    />
    </>
  )
}

export default SystemCommands