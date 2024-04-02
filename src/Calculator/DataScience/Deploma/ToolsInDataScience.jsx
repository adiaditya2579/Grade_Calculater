import React, { useState } from 'react';
import MyForm from '../../MyForm';
function ToolsInDataScience() {
  const [inputvalue, setInputvalue] = useState({
    P_MARK1: '',
    P_MARK2: '',
    GAA: '',
    ROE1:'',
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
    const {P_MARK1,P_MARK2,END_TERM,GAA,ROE1} = inputvalue;
    let T =  0.1 * GAA + 0.2 * ROE1 + 0.2 *  P_MARK1 + 0.2* P_MARK2 + 0.3 * END_TERM

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
  );
}

export default ToolsInDataScience;