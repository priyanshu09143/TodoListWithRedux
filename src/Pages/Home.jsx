import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo } from '../Redux/Action/Index';
import { signOut } from 'firebase/auth'
import { auth} from '../firebase'
import { useNavigate } from 'react-router-dom'
import List from '../Components/List';
import toast from 'react-hot-toast';
function Home() {
  const [title, setTitle] = useState("")
  const [dic, setDic] = useState("")
  const edit  = false
  const isComplete = false
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const list = useSelector(state => state.todoReducer.data);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(!user) navigate('/login');
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  const addTodo = () => {
   if(true){
   let check =  list.map((item)=>{
      if(item.edit) {
        toast.error("You can't add todo while editing a todo")
        return true 
      }
    })
   if(check[0]) return
   }
    
    if(title === "" || dic === ""){
      return toast.error("Please fill all the fields")
    }
    else{
      dispatch(AddTodo({ title, dic , isComplete , edit }))
      setTitle("")
      setDic("")
      toast.success("Todo Added")
    }
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signout Successfull")
        navigate('/login')
      })
      .catch(err => console.log(err));
  }
  const value = {setTitle , setDic , title , dic}
  return (
    <div className='h-full bg-green-200'>
      <div className='h-screen w-full'>
        <h1 className='text-3xl font-semibold text-center text-gray-800 p-3'>Home</h1>
        <div className='todo flex flex-col items-center gap-4 my-6 px-4'>
          <input type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='outline-none rounded-md px-6 py-3 bg-green-100 w-full md:w-1/3 lg:w-1/4' placeholder='Add Title' />
          <input type='text'
            value={dic}
            onChange={(e) => setDic(e.target.value)}
            className='outline-none rounded-md px-6 py-3 bg-green-100 w-full md:w-1/3 lg:w-1/4' placeholder='Add Description' />
          <button
            onClick={addTodo}
            className='bg-green-400 px-10 py-3 rounded-md text-white transition w-full md:w-1/3 lg:w-1/4 hover:bg-green-100 hover:text-black'>Add Todo</button>
          <List value = {value} />

          <button 
          onClick={handleSignOut}
          className='absolute top-10 left-10 bg-green-600 text-white px-6 py-2 rounded-md transition hover:bg-white hover:text-green-600'>SignOut</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
