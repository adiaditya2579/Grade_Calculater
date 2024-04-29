import React from 'react'

function MyForm({inputvalue,score,grade,handalscore,handalchange}) {
  return (
    <div className=' bg-[27272b] h-auto w-auto sm:flex sm:justify-center'>
      <div className=' sm:w-[30%] bg-[27272b] my-5  border-[1px] border-[393939] mx-8  rounded-md '>
        <div className=' w-[100%]'>
          {Object.entries(inputvalue).map(([key, value]) => (
          <div key={key} className=' w-[100%] flex px-8'>
              <label htmlFor={key} className=' w-[40%] my-2 hidden sm:inline text-white font-bold '>
              {key}
              </label>
              <input
              className=' my-2 p-1 bg-inherit text-yellow-300 focus:outline-none focus:border-blue-500 border-[1px] border-[393939] rounded-md '
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
          <div className=' flex justify-center mt-4 bg-[27272b]'>
            <button onClick={handalscore} className='bg-purple-800 px-4 py-2 my-2 text-white rounded-full'>Submit</button>
          </div>
          <div className=' flex font-bold gap-7 mt-2 px-2 bg-[27272b]'>
              <h1 className='text-white'>Final Score: </h1>
              <div className={score < 40 ? 'text-red-600' : 'text-green-600'}> {score}</div>
          </div>
          <div className=' flex font-bold gap-6 my-2 px-2 bg-[27272b]'>
              <h1 className='text-white'>Letter Grade:</h1>
              <div className={grade === 'FAIL' ? 'text-red-600' : 'text-green-600'}>{grade}</div>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyForm