import React from 'react'

const navLinks:{
  name:string,
  url:string}[]=[
  {
    name:"Products",
    url:""
  },
  {
    name:"Integrations",
    url:""
  },
  {
    name:"Pricing",
    url:""
  },
  {
    name:"Buisness",
    url:""
  },
  {
    name:"Resources",
    url:""
  },
]

const NavBar = () => {
  return (
    <div className='bg-grey text-[#FFFFFF]'>
    <div className=' px-32 flex justify-between py-4 text-white max-w-[75%] mx-auto'>
        <div className='flex gap-1 my-auto'>
            <img src='/logo.png' alt="Logo" className='w-5 h-5 my-auto'/>
            <p className='text-lg font-bold'>Hypotenuse AI</p>
        </div>

        <div className='flex mx-8 gap-4'>
          {navLinks.map((items,index)=> (
            <p className='font-medium text-lg mx-4 my-auto' key={index}>{items.name}</p>
          ))}
        </div>

        <div className='flex gap-8'>
            <p className='text-lg mx-4 my-auto'>Login</p>
            <button className='bg-[#eaecf026] px-4 py-2 rounded-md'>Try it free -{'>'}</button>
        </div>
    </div>
    </div>
  )
}

export default NavBar