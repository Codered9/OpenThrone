import React from 'react'

const CreateCard = (props:{
    index:number,
    heading:string,
    desc:string,
    icon:string,
    isActive:number,
    setIsActive:any
}) => {

    const toggleBtn = () => {
        props.setIsActive(props.index)
    }
  return (
    <div className={`flex ${props.isActive === props.index ? "border-l-8 border-l-btn-blue shadow-custom" : "shadow-custom-lite"} rounded-md`} onClick={toggleBtn}>
        {/* <FontAwesomeIcon icon={icon({name: props.icon})} /> */}
        <div  className='p-4'>
            <h4 className='text-xl font-normal'>{props.heading}</h4>
            {
                props.isActive === props.index ? (
                    <p>{props.desc}</p>
                ) : ''
            }
        </div>
    </div>
  )
}

export default CreateCard