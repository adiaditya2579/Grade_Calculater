import React, { useState } from 'react';
import MyForm from '../../MyForm';
function IntroductionC() {

  const [inputvalue, setInputvalue] = useState({
    QUIZE1: '',
    OPPE1: '',
    OPPE2: '',
    WTA: '',
    GAA: '',
    End_Term: '',
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
    const {QUIZE1,End_Term,GAA,OPPE1,OPPE2,WTA } = inputvalue;
    let T =  0.10* GAA + 0.2 * QUIZE1 + 0.40 * End_Term + Math.max(0.15 * OPPE1 + 0.15 * OPPE2, 0.20 * Math.max(OPPE1,OPPE2)) + 0.15 * WTA 

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
    <div>
    <MyForm
    inputvalue={inputvalue}
    score={score}
    grade={grade}
    handalscore={handalscore}
    handalchange={handalchange}
    />
    </div>
  )
}

export default IntroductionC