import React,{useState} from 'react'
import MyForm from '../../MyForm';
function ProgrammingC() {
    const [inputvalue, setInputvalue] = useState({
        QUIZ1: '',
        WTA: '',
        'OPPE 1':'',
        'OPPE 2':'',
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
        const {QUIZ1,WTA,'END TERM':F,GAA,'OPPE 1':OPPE1,'OPPE 2':OPPE2} = inputvalue;
        let T =   0.10 * GAA + 0.15 * QUIZ1 + 0.20 * OPPE1 + 0.20 * OPPE2 + 0.30 * F + 0.05 * WTA
    
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

export default ProgrammingC