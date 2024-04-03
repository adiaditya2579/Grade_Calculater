import React,{useState} from 'react'
import MyForm from '../../MyForm';

function CommonForm() {
    const [inputvalue, setInputvalue] = useState({
        'QUIZ 1': '',
        'QUIZ 2': '',
        GAA  : '',
        'END TERM': '',
        
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
        const {GAA,'END TERM':END_TERM,'QUIZ 1': QUIZ1,'QUIZ 2':QUIZ2} = inputvalue;
        let T =  0.1 * GAA + Math.max(0.6 * END_TERM + 0.2 * Math.max(QUIZ1, QUIZ2), 0.4 * END_TERM + 0.2 * QUIZ1 + 0.3 * QUIZ2);
    
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
          if(setgrade('FAIL')){

          }
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

export default CommonForm;