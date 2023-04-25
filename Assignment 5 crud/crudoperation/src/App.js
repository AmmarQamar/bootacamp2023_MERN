import { useEffect, useState } from 'react';
import App from './App.css';
function Crud() {

  return (
    <div className="container">
        <AddList />
      </div>
    
  )
}

function AddList() {
  const getLocalLists=()=>{
    let list=localStorage.getItem('lists');
    if(list){
      return JSON.parse(localStorage.getItem('lists'))
    } else{
      return [];
    }
  }
  
  const [inputUser, setInputUser] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [lists, setLists] = useState(getLocalLists());
  
  const addItems = () => {
    if (!(inputUser) || !(inputAddress) || !(inputCity)) { }
    else {
      setLists([...lists,[ inputUser, inputAddress, inputCity]]);
      setInputUser('');
      setInputAddress('');
      setInputCity('');
    }
  }

  const deleteItem = (id) => {
    const updatedList= lists.filter((elem,ind)=>{
      return ind!==id;
    });
    setLists(updatedList);
  }

  
  useEffect(()=>{
localStorage.setItem('lists',JSON.stringify(lists));
  },[lists])
  return (
    <div>
      <div class="addUser">
        <input type="text" name="name" placeholder='Enter Your name' required value={inputUser}
          onChange={(e) => { setInputUser(e.target.value) }}></input>
        <input type="text" name="address" placeholder='Enter your Address' required
          value={inputAddress}
          onChange={(e) => { setInputAddress(e.target.value) }}></input>
        <select value={inputCity} required
          onChange={(e) => { setInputCity(e.target.value) }}>
          <option value="" selected>Select City</option>
          <option value="islamabad">Islamabad</option>
          <option value="lahore">Lahore</option>
          <option value="rawalpindi">Rawalpindi</option>
          <option value="karachi">Karachi</option>
          <option value="peshawar">Peshawar</option>
        </select>
        <button onClick={addItems}>Add</button>
      </div>

      <div className='showUsers'>
        {

          <div>
            <table>
              {
                lists.map((elem,ind) => (
                  <div key={ind}>
                  <tr>
                    <td>{elem[0]}</td>
                    <td>{elem[1]}</td>
                    <td>{elem[2]}</td>
                    <td>
                       <button className='edit'>Edit</button> 
                      <button className='del' onClick={()=>deleteItem(ind)}>Delete</button> 
                    </td>
                  </tr>
                  </div>
                ))
              }

            </table>
          </div>

        }

      </div>
    </div>
  )
}
export default Crud;