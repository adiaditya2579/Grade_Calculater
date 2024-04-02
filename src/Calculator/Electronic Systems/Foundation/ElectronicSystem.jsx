import React, { useState } from 'react';
import MyForm from '../../MyForm';
function ElectronicSystem() {
  const [inputvalue, setInputvalue] = useState({
    QUIZE1: '',
    QUIZE2: '',
    GAA: '',
    End_Term: '',
    LAB:'',
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
    const {QUIZE1,QUIZE2,End_Term,GAA,LAB} = inputvalue;
    let T =  0.1* GAA + Math.max(0.55 * End_Term + 0.15 * Math.max(QUIZE1, QUIZE2),  0.4 * End_Term + 0.15 * QUIZE1 + 0.2 * QUIZE2) + 0.15 * LAB 

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

export default ElectronicSystem