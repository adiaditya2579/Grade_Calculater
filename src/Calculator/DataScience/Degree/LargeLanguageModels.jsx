import React,{useState} from 'react'
import MyForm from '../../MyForm';
function LargeLanguageModels() {
    const [inputvalue, setInputvalue] = useState({
        'QUIZ 1': '',
        'QUIZ 2': '',
        GAA: '',
        'END TERM': '',
        'BONUS':''
      });
      const [score, setScore] = useState("");
      let [grade, setgrade] = useState("");
    
      const handalchange = (e) => {
        const { name, value } = e.target;
        if(name === 'BONUS' && parseInt(value) > 5){
          setInputvalue({
            ...inputvalue,
            [name]:5
          })
          return
          
        }
        const sanitizedValue =  Math.min(value,100)
        setInputvalue({
         ...inputvalue,
          [name]: sanitizedValue,
        });
      };
      const handalscore = () => {
        const { 'QUIZ 1':QUIZ1,'QUIZ 1':QUIZ2,'END TERM':F,GAA,'BONUS':Bonus} = inputvalue;
        let T =   0.1  * GAA +  Math.max((0.4 * F + 0.25 * QUIZ1 + 0.25 * QUIZ2), 0.5 * F+ 0.3 * Math.max(QUIZ1,QUIZ2))

        if( T > 40 ){
          T += Bonus
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

export default LargeLanguageModels