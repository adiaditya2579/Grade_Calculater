import React, { useState } from 'react';

function PythonForm() {
  const [inputvalue, setInputvalue] = useState({
    QUIZ1: '',
    OPPE1: '',
    OPPE2L: '',
    WTA: '',
    GAA: '',
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
    const {GAA,END_TERM,QUIZ1,WTA,OPPE1,OPPE2} = inputvalue;
    let T =  0.1 * GAA + 0.1 * QUIZ1 + 0.4 * END_TERM + 0.25 * Math.max(OPPE1, OPPE2) + 0.15 *  Math.min(OPPE1, OPPE2) + 0.05 * WTA 

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
        {Object.entries(inputvalue).map(([key, value]) => (
        <div key={key}>
            <label htmlFor={key}>
            {key}
            </label>
            <input
            type="number"
            name={key}
            placeholder={key}
            value={value}
            onChange={handalchange}
            onKeyPress={(e) => {
                const charCode = e.which? e.which : e.keyCode;
                if (
                charCode!== 46 &&
                charCode > 31 &&
                (charCode < 48 || charCode > 57)
                ) {
                e.preventDefault();
                }
            }}
            />
        </div>
        ))}
        <div>
        <button onClick={handalscore}>Submit</button>
        <p>Final score {score}</p>
        <h1>Letter Grade {grade}</h1>
        </div>
    </div>
  );
}

export default PythonForm;


