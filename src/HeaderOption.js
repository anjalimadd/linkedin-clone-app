import React from 'react'

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='flex flex-col items-center mr-5 text-gray-500 cursor-pointer hover:text-black '>
      {Icon && <Icon className="object-contain w-6 h-6 "/>}
      <h3 className="text-xs-12 font-normal">{title}</h3>
    </div>
  )
}

export default HeaderOption
