import React,{useState} from 'react'

function MachineLearningPractice() {
    const [inputvalue,setInputvalue] = useState({QUIZE1:'',OPPE1:'',OPPE2:'',GAA:'',END_TERM:'',QUIZE2:''})
    const [score,setScore] = useState(0)
    let [grade, setgrade] = useState("")
    const handalchange = (e)=>{
        const { name,value} = e.target;
        setInputvalue({
            ...inputvalue,
            [name]: value
        })
    }

    const handalscore = ()=>{
        const { QUIZE1,OPPE1,OPPE2,GAA,END_TERM,QUIZE2} = inputvalue
        const T = 0.1 * GAA + 0.3 * END_TERM + 0.15 * OPPE1 + 0.15 * OPPE2 + Math.max(0.15 * QUIZE1 + 0.15 * QUIZE2, 0.2*Math.max(QUIZE1,QUIZE2))

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
    {Object.entries(inputvalue).map(([key, value]) => (
        <div key={key}>
          <label htmlFor={key}>
            {key}
          </label>
          <input
            type="number"
            name={key}
            placeholder={key}
            value={value}
            onChange={handalchange}
            onKeyPress={(e) => {
              const charCode = e.which? e.which : e.keyCode;
              if (
                charCode!== 46 &&
                charCode > 31 &&
                (charCode < 48 || charCode > 57)
              ) {
                e.preventDefault();
              }
            }}
          />
        </div>
      ))}
      <div>
        <button onClick={handalscore}>Submit</button>
        <p>Final score {score}</p>
        <h1>Letter Grade {grade}</h1>
      </div>
    </>
  )
}

export default MachineLearningPractice