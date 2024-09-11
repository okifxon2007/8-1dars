import React, { useRef } from 'react';
import img1 from "../public/img/img.jpg";
import '../src/App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './store/userSlice';
import { toggleDark } from './store/darkSlice';  
const App = () => {
  const nameref = useRef();
  const ageref = useRef();
  const surref = useRef();
  const users = useSelector(state => state.user);
  const isDark = useSelector(state => state.dark.isDark);  
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(add({
      Name: nameref.current.value,
      Surname: surref.current.value,
      Age: ageref.current.value,
      id: Date.now()
    }));

    nameref.current.value = "";
    surref.current.value = "";
    ageref.current.value = "";
  };

  const handleToggleDarkMode = () => {
    dispatch(toggleDark());  
  };

  return (

   <div     className={`conta ${isDark ? 'dark-mode' : ''}`}>
     <div>
      <div className='header contai'>
        <h1>brix <span>templates</span></h1>
        <div className="bbc">
          <button onClick={handleToggleDarkMode}>Dark Mode</button> 
          <select>
            <option value="eng">eng</option>
            <option value="uzb">uzb</option>
          </select>
        </div>
      </div>

      <div className="main contai">
        <div className="paragraph">
          <p>-Webflow Design Agency</p>
          <h1>A top-notch Webflow <br /> Design Agency</h1>
          <h4>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat massa rhoncus odio feugiat tellus, elit massa sed.</h4>
        </div>
        <div className="img">
          <img src={img1} alt="" /> <br /> <br />
          <br />
        </div>
      </div>

      <div className="paragraphh contai">
        <input ref={nameref} type="text" placeholder='Name' /> <br /> <br />
        <input ref={surref} type="text" placeholder='Surname' /> <br /> <br />
        <input ref={ageref} type="number" placeholder='Age' /> <br /> <br />
        <button onClick={handleAddUser}>Card</button>
      </div>

      <div className="carding contai">
        {users.map(user => (
          <div className="card" key={user.id}>
            <h2><span className='spone'>Name</span>: {user.Name}</h2>
            <h2><span className='spone'>Surname</span>: {user.Surname}</h2>
            <p><span className='spone'>Age</span>: {user.Age} <span><span className='spone'>Id</span>: {user.id}</span></p>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default App;
