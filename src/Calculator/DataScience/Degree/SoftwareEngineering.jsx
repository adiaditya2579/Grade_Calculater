import React, { useState } from 'react';
import MyForm from '../../MyForm';
function SoftwareEngineering() {
    const [inputvalue, setInputvalue] = useState({
        QUIZ1: '',
        GP1: '',
        GP2:'',
        CP:'',
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
        const {QUIZ1,GP1,END_TERM,GAA,GP2,CP} = inputvalue;
        let T =  0.05 * GAA + 0.2 * QUIZ1 + 0.4 * END_TERM+ 0.15 * GP1 + 0.15 * GP2 + 0.05 * CP
    
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

export default SoftwareEngineering