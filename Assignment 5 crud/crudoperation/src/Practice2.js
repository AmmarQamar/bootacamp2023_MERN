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
  const getLocalLists = () => {
    let list = localStorage.getItem('lists');
    if (list) {
      return JSON.parse(localStorage.getItem('lists'))
    } else {
      return [];
    }
  }

  const [inputUser, setInputUser] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [lists, setLists] = useState(getLocalLists());
  const [editClick, setEditClick] = useState(true);
  const [updateIndex, setUpdateIndex] = useState("");
  const [searchUser, setSearchIndex] = useState("");

// Create Item
  const addItems = () => {
    if (!(inputUser) || !(inputAddress) || !(inputCity)) { }
    else {
      setLists([...lists, [inputUser, inputAddress, inputCity]]);
      setInputUser('');
      setInputAddress('');
      setInputCity('');
    }
  }
  // update Item
  const update = () => {
    updateIndex[0] = inputUser
    updateIndex[1] = inputAddress
    updateIndex[2] = inputCity
    console.log(lists)
    console.log(updateIndex)
    setLists([...lists])
  }

  // Edit Item
  const edit = (id) => {
    const editList = lists[id];
    setInputUser(editList[0]);
    setInputAddress(editList[1]);
    setInputCity(editList[2]);
    setEditClick(false)
    setUpdateIndex(editList);
  }
  const deleteItem = (id) => {
    // const updatedList = lists.filter((elem, ind) => {
    //     return ind !== id;
    // });
    // setLists(updatedList);
    // Above OR Below
    let delItem = lists[id];
    let itemIndex = lists.indexOf(delItem);
    lists.splice(itemIndex, 1);
    setLists([...lists]);
  }
const search =(e)=>{

  //  setSearchIndex(e.target.value);
   let query=e.target.value;
   const searchFilter=lists.filter((lists)=>{
    lists.inputUser.toLowerCase().includes(query.toLowerCase())
    debugger
   })

}
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  return (
    <div>
      <div class="addUser">
        <div>
          <input type="search"  onChange={search}></input>
        </div>
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
        {
          editClick ? <button onClick={() => addItems()}>ADD</button> :
            <button onClick={() => update()}>UPDATE</button>
        }
      </div>

      <div className='showUsers'>
        {

          <div>
            <table>
              {
                lists.map((elem, ind) => (
                  <div key={ind}>
                    <tr>
                      <td>{elem[0]}</td>
                      <td>{elem[1]}</td>
                      <td>{elem[2]}</td>
                      <td>
                        <button className='edit' onClick={() => edit(ind, elem)}>Edit</button>
                        <button className='del' onClick={() => deleteItem(ind)}>Delete</button>
                      </td>
                    </tr>
                  </div>
                ))
              }

            </table>
          </div>

        }

      </div>

      {/* <div>
      <ul>
        {filteredItems.map(lists => (
          <li key={lists.id}>{lists.name}</li>
        ))}
      </ul>
      </div> */}
    </div>
  )
}
export default Crud;