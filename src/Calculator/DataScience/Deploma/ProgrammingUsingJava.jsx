import React, { useState } from 'react';
import MyForm from '../../MyForm';
function ProgrammingUsingJava() {
  const [inputvalue, setInputvalue] = useState({
    QUIZ1: '',
    QUIZ2: '',
    GAA: '',
    OPPE1: '',
    OPPE2: '',
    'BONUS MARKS':'',
    END_TERM: '',
  });
  const [score, setScore] = useState("");
  let [grade, setgrade] = useState("");

  const handalechange = (e) => {
    const { name, value } = e.target;
    var sanitizedValue = parseInt(value);
    if(name === 'BONUS MARKS' && parseInt(value) > 5 ){
      setInputvalue({
         ...inputvalue,
          [name]:5
      })
      return;
    }
    var sanitizedValue =  Math.min(value,100)
    setInputvalue({
     ...inputvalue,
      [name]: sanitizedValue,
    });
  };
  const handalescore = () => {
    const {QUIZ1,QUIZ2,END_TERM,GAA,OPPE1,OPPE2,'BONUS MARKS':bonusmark} = inputvalue;
    let T = 0.1 * parseInt(GAA) + 0.3 * parseInt(END_TERM) + 0.2 * Math.max(parseInt(OPPE1), parseInt(OPPE2));
    let bonusCalculation = (parseInt(bonusmark) * 0.10) * Math.min(parseInt(OPPE1), parseInt(OPPE2));
    T += bonusCalculation;
    T += Math.max((0.25 * Math.max(parseInt(QUIZ1), parseInt(QUIZ2))), (0.15 * parseInt(QUIZ1) + 0.25 * parseInt(QUIZ2)));

    let F = parseInt(T);
    if (F > 40) {
      F += parseInt(bonusmark);
    }
    F = Math.min(F, 100);
    let score = parseInt(F);
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
      handalscore={handalescore}
      handalchange={handalechange}
      />
    </>
  )
}

export default ProgrammingUsingJava