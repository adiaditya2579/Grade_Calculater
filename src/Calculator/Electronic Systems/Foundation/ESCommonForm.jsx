import React, { useState } from 'react';

function ESCommonForm() {
  const [inputvalue, setInputvalue] = useState({
    QUIZE1: '',
    QUIZE2: '',
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
    const {QUIZE1,QUIZE2,End_Term,GAA,} = inputvalue;
    let T =  0.1 * GAA + Math.max (0.6 * End_Term + 0.2 * Math.max(QUIZE1, QUIZE2),  0.4 * End_Term + 0.2 * QUIZE1 + 0.3 * QUIZE2)

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
  )
}

export default ESCommonForm