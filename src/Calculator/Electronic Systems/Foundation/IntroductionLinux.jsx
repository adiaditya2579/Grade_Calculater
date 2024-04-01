import React, { useState } from 'react';
function IntroductionLinux() {
  const [inputvalue, setInputvalue] = useState({
    QUIZE1: '',
    GAA1: '',
    GAA2: '',
    GAA3: '',
    OPPE1: '',
    OPPE2: '',
    VMT: '',
    LAB: '',
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
    const {QUIZE1,End_Term,GAA1,GAA2,GAA3,VMT,LAB,OPPE1,OPPE2 } = inputvalue;

    let PART_A = 0.06 * GAA1 + 0.02 * GAA2 + 0.02 * GAA3 + 0.2* QUIZE1 + 0.3 * End_Term

    let PART_B = 0.1 *  VMT + 0.55 * LAB + 0.25 * OPPE1 + 0.3 * OPPE2 

    T = (PART_A + 0.4 * PART_B )   



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

export default IntroductionLinux