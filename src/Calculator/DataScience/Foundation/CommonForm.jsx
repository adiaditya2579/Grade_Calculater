import React,{useState} from 'react'

function CommonForm() {
    const [inputvalue, setInputvalue] = useState({
        QUIZ1: '',
        QUIZ2: '',
        GAA  : '',
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
        const {GAA,END_TERM,QUIZ1,QUIZ2} = inputvalue;
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
    <div className=' absolute left-1/2 transform -translate-x-1/2'>
      <div className=' mt-[40px] mx-[20px] p-5 max-w-[800px] border-[1px] border-[#393939] rounded-md'>
        {Object.entries(inputvalue).map(([key, value]) => (
        <div key={key} className='w-[100%] flex'>
            <label htmlFor={key} className='p-2 text-white font-semibold w-[5%]'>
            {key}
            </label>
            <input
            className='p-2 mx-20 bg-inherit text-yellow-500 w-[90%] md:w-[50%] rounded-md outline-none border-b-[1px] border-[#393939]'
            type="number"
            name={key}
            placeholder={`${key} Score`}
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
        <button onClick={handalscore} className='bg-purple-800 px-4 py-2 my-2 text-white rounded-md'>Submit</button>
        <div className='flex font-bold gap-6'>
            <h1 className='text-white'>Final Score: </h1>
            <div className={score < 40 ? 'text-red-600' : 'text-green-600'}> {score}</div>
        </div>
        <div className='flex font-bold gap-6'>
            <h1 className='text-white'>Letter Grade:</h1>
            <div className={grade === 'FAIL' ? 'text-red-600' : 'text-green-600'}>{grade}</div>
        </div>
        
        </div>
      </div>
    </div>

  )
}

export default CommonForm;