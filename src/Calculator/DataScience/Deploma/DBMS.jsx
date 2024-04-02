import React from 'react'
import MyForm from '../../MyForm';
function DBMS() {
    const [inputvalue, setInputvalue] = useState({
        QUIZ1: '',
        QUIZ2: '',
        GAA1: '',
        GAA2: '',
        GAA3: '',
        OPPE:'',
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
        const {QUIZ1,QUIZ2,END_TERM,GAA1,GAA2,GAA3,OPPE} = inputvalue;
        let T = 0.04 * GAA1 + 0.03*GAA2+0.03*GAA3 +0.2*OPPE+ Math.max (0.45* END_TERM+0.15 * max(QUIZ1, QUIZ2),  0.4*END_TERM+(0.10* QUIZ1+0.20 * QUIZ2 ))  
    
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

export default DBMS