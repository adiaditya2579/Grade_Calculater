import React, { useState } from 'react'
import MyForm from '../../MyForm';
function StatisticsOne() {
    const [inputvalue, setInputvalue] = useState({
        QUIZ1: '',
        QUIZ2: '',
        GAA: '',
        'BONUS MARKS': '',
        'EXTRA ACTIVITY': '',
        'END TERM': '',
        
      });
      const [score, setScore] = useState("");
      let [grade, setgrade] = useState("");
    
      const handalchange = (e) => {
        const { name, value } = e.target;
        if(name === 'BONUS MARKS' && parseInt(value) > 5 ){
            setInputvalue({
                ...inputvalue,
                [name]:10
            })
            return;
        }
        if( name === 'EXTRA ACTIVITY' && parseInt(value) > 5){
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
        const {QUIZ1,QUIZ2,'END TERM':END_TERM,GAA,'BONUS MARKS':bonusmark,'EXTRA ACTIVITY':extractivity} = inputvalue;
        let T = 0.1 * GAA + Math.max(0.6 * END_TERM  + 0.2 * Math.max(QUIZ1, QUIZ2),  0.4 * END_TERM  + 0.2 * QUIZ1 + 0.3 * QUIZ2) + extractivity
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
  )
}

export default StatisticsOne



                      