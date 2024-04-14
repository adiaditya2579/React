import React from 'react'
import { useForm } from 'react-hook-form'

function Form({adduser}) {
  const {register,handleSubmit,reset} = useForm()
  // const submmitdta = (data)=> {
  //   adduser(data);
  //   reset();
  // }

  return (
    <div className=' flex justify-center m-10'>
      <form className=' flex gap-10 ' onSubmit={handleSubmit(data => {adduser(data); reset()})}>
        <input {...register('name')} className=' rounded-lg px-2 pt-1' type="text" placeholder="Name" />
        <input {...register('email')} className=' rounded-lg px-2 pt-1' type="text" placeholder="Email" />
        <input {...register('image')} className=' rounded-lg px-2 pt-1' type="text" placeholder="image Url" />
        <input className=' roemaild-lg px-2 pt-1 bg-teal-600 text-white' type="submit" />
        

      </form>
    </div>
  )
}

export default Form