import React,{useState} from 'react'
import MyForm from '../../MyForm'
function MachineLearningPractice() {
    const [inputvalue,setInputvalue] = useState({QUIZE1:'',OPPE1:'',OPPE2:'',GAA:'',END_TERM:'',QUIZE2:'','BONUS MARKS':'',})
    const [score,setScore] = useState(0)
    let [grade, setgrade] = useState("")
    const handalchange = (e)=>{
        const { name,value} = e.target;
        if(name === 'BONUS MARKS' && parseInt(value) > 5 ){
          setInputvalue({
             ...inputvalue,
              [name]:5
          })
          return;
        }
        setInputvalue({
            ...inputvalue,
            [name]: value
        })
    }

    const handalscore = ()=>{
        const { QUIZE1,OPPE1,OPPE2,GAA,END_TERM,QUIZE2,'BONUS MARKS':bonusmark} = inputvalue
        let T = 0.1 * GAA + 0.3 * END_TERM + 0.15 * OPPE1 + 0.15 * OPPE2 + Math.max(0.15 * QUIZE1 + 0.15 * QUIZE2, 0.2*Math.max(QUIZE1,QUIZE2))
        if (T > 40){
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

export default MachineLearningPractice