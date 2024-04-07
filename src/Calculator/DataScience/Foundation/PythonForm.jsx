import React, { useState } from 'react';
import MyForm from '../../MyForm';
function PythonForm() {
  const [inputvalue, setInputvalue] = useState({
    QUIZ1: '',
    OPPE1: '',
    OPPE2: '',
    WTA: '',
    GAA: '',
    'BONUS MARKS': '',
    'END TERM': '',
    
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
    const {GAA,'END TERM':END_TERM,QUIZ1,WTA,OPPE1,OPPE2,'BONUS MARKS':bonusmark} = inputvalue;
    let T =  0.1 * GAA + 0.1 * QUIZ1 + 0.4 * END_TERM + 0.25 * Math.max(OPPE1, OPPE2) + 0.15 *  Math.min(OPPE1, OPPE2) + 0.05 * WTA 
    if(T > 40){
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
    <div>
      <MyForm
      inputvalue={inputvalue}
      score={score}
      grade={grade}
      handalscore={handalscore}
      handalchange={handalchange}
      />
    </div>
  );
}

export default PythonForm;


