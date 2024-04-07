import React,{useState} from 'react'
import MyForm from '../../MyForm'
function BusinessDatamanagement() {
  const [inputvalue, setInputvalue] = useState({    
    GAA: '',
    'BONUS MARKS':'',
    'END TERM': '',
  });
  const [score, setScore] = useState("");
  let [grade, setgrade] = useState("");

  const handalchange = (e) => {
    const { name, value } = e.target;
    if(name === 'BONUS MARKS' && parseInt(value) > 5 ){
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
    const {'END TERM':END_TERM,GAA,'BONUS MARKS':bonusmark} = inputvalue;
    let T =  (0.7 * GAA) + (0.30 * END_TERM )
    if( T > 40){
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
  }
  return (
    <div>
    <h1 className=' p-5 text-yellow-700 flex justify-center items-center font-semibold text-xl'>Out of 11 assignments given, Average of  best 7 will be GAA </h1>
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

export default BusinessDatamanagement