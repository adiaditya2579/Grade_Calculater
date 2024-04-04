import React,{useState} from 'react'
import MyForm from '../../MyForm';
function MarketResearch() {
    const [inputvalue, setInputvalue] = useState({
        QUIZ1: '',
        QUIZ2: '',
         OP:'',
        GAA: '',
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
        const {QUIZ1,QUIZ2,'END TERM':F,GAA,OP} = inputvalue;
        let T =  0.1 * GAA + Math.max(0.2 *  QUIZ1+0.2 * QUIZ2 + 0.25 * OP +0.25 * F, 0.3 * Math.max(QUIZ1,QUIZ2)+0.25 * OP+0.25 *F)
    
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

export default MarketResearch