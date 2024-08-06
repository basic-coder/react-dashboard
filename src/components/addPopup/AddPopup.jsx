import React from 'react'
import { IoMdClose } from "react-icons/io";

const AddPopup = ({setOpen,slug}) => {
  return (
      <div className='addPopup'>
          <div className="modal">
                <IoMdClose onClick={() => setOpen(false)} className='close'/>
                <h3>Add New {slug}</h3>

                <form action="#">

                </form>
          </div>
      </div>
  )
}

export default AddPopup