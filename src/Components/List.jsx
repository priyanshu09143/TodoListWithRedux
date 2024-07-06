import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegEdit } from 'react-icons/fa';
import { MdOutlineCancel, MdDone } from 'react-icons/md';
import { DeleteTodo, EditTodo, EditComplete, idCompleted } from '../Redux/Action/Index';
import { IoCloudDone } from "react-icons/io5";

function List({value}) {
  const list = useSelector(state => state.todoReducer.data);
  const dispatch = useDispatch()

  function handleEdit(item) {
    dispatch(EditTodo(item.id))
    value.setTitle(item.title)
    value.setDic(item.description)
  }

  function updateComplete(item){
    dispatch(EditComplete(item.id, value.title , value.dic))
    value.setTitle('')
    value.setDic('')
  }
  return (
    <div className='flex flex-col items-center gap-4 h-[30rem] overflow-auto'>
      {list.map((item, index) => (
        <div
          key={index}
          className={` px-4 py-3 rounded-md w-[28rem] max-w-md ${item.isComplete ? "bg-gray-200" : "bg-green-100"}` }
        >
          <h5 className='text-lg font-semibold'>
            <strong>Title :</strong> {item.title}
          </h5>
          <p className='text-md'>
            <strong>Description :</strong> {item.description}
          </p>
          <p>{item.isComplete && "Complete"}</p>
          <div className='flex justify-evenly text-2xl pt-5'>
            <button>
              {item.edit === true ? <IoCloudDone onClick={() => { updateComplete(item) }} /> : <FaRegEdit onClick={() => handleEdit(item)} />}
            </button>
            <button disabled ={item.edit }>
              <MdOutlineCancel onClick={() => { dispatch(DeleteTodo(item.id)) }} />
            </button>
            <button disabled ={item.edit}>
              <MdDone onClick={()=> dispatch(idCompleted(item.id))} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
