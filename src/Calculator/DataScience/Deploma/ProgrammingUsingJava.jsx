import React, { useState } from 'react';
import MyForm from '../../MyForm';
function ProgrammingUsingJava() {
  const [inputvalue, setInputvalue] = useState({
    QUIZ1: '',
    QUIZ2: '',
    GAA: '',
    OPPE1: '',
    OPPE2: '',
    END_TERM: '',
  });
  const [score, setScore] = useState("");
  let [grade, setgrade] = useState("");

  const handalchange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue =  Math.min(value,100)
    setInputvalue({
     ...inputvalue,
      [name]: sanitizedValue,
    });
  };
  const handalscore = () => {
    const {QUIZ1,QUIZ2,END_TERM,GAA,OPPE1,OPPE2} = inputvalue;
    let T =  0.1 * GAA + 0.3*END_TERM+ 0.2 * Math.max(OPPE1,OPPE2)+ ((Bonus)*0.10) * Math.min(OPPE1,OPPE2)+ Math.max *(0.25 *Math.max(QUIZ1,QUIZ2), 0.15 *QUIZ1+0.25* QUIZ2)

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

export default ProgrammingUsingJava