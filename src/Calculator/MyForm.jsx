import React from 'react'

function MyForm({inputvalue,score,grade,handalscore,handalchange}) {
  return (
    <div className='md:w-1/2 md:absolute md:left-1/2 md:transform md:-translate-x-1/2'>
      <div className=' mt-[40px] mx-[20px] p-5  border-[1px] border-[#393939] rounded-md'>
        {Object.entries(inputvalue).map(([key, value]) => (
        <div key={key} className='w-[100%] flex'>
            <label htmlFor={key} className='w-[15%] text-nowrap p-2 text-white font-semibold '>
            {key}
            </label>
            <input
            className='   mx-20 bg-inherit text-yellow-700 min:w-[100%]   rounded-md outline-none border-b-[1px] border-[#393939]'
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
        <button onClick={handalscore} className='bg-purple-800 px-4 py-2 my-2 text-white rounded-full'>Submit</button>
        <div className='flex font-bold gap-7'>
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

export default MyForm