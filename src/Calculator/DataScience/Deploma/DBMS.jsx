import React from 'react'

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

export default DBMS