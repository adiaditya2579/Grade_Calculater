import React,{useState} from 'react'
import MyForm from '../../MyForm'
function BusinessAnalytics() {
  const [inputvalue,setInputvalue] = useState({
    'QUIZ 1':'',
    'QUIZ 2':'',
    'Assignent 1':'',
    'Assignent 2':'',
    'BONUS MARKS':'',
    'END TERM':'',
  })
    const [score,setScore] = useState('')
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
        const {'END TERM':END_TERM,'QUIZ 1':Qz1,'QUIZ 2':Qz2,'Assignent 1':A1,'Assignent 2':A2,'BONUS MARKS':bonusmark} = inputvalue
        let T = 0.7* Math.max(Qz1, Qz2) + 0.3 * Math.min(Qz1, Qz2)
        if(T > 40){
            T += parseInt(bonusmark)
        }
        T = Math.min(T, 20);
        let A = A1 + A2
        let score = parseInt(T+A+END_TERM)
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
    <h1 className=' p-5 text-yellow-700 flex justify-center items-center font-semibold text-xl'>Out of Three assignments given, Best Two Assignent will be Assignent 1 & 2 </h1>
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

export default BusinessAnalytics;