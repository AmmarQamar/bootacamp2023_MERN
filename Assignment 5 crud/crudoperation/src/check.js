import { useEffect, useState } from 'react';

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
return JSON.parse(list)
} else {
return [];
}
};

const [inputUser, setInputUser] = useState('');
const [inputAddress, setInputAddress] = useState('');
const [inputCity, setInputCity] = useState('');
const [lists, setLists] = useState(getLocalLists());
const [editClick, setEditClick] = useState(true);
const [updateIndex, setUpdateIndex] = useState("");
const [searchUser, setSearchUser] = useState("");
const [filteredLists, setFilteredLists] = useState(lists);

// Create Item
const addItems = () => {
if (!(inputUser) || !(inputAddress) || !(inputCity)) { }
else {
setLists(prevLists => [...prevLists, [inputUser, inputAddress, inputCity]]);
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
setLists(prevLists => [...prevLists])
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
setLists(prevLists => {
const updatedLists = [...prevLists];
updatedLists.splice(id, 1);
return updatedLists;
});
}

const search = (e) => {
const searchText = e.target.value.toLowerCase();
setSearchUser(searchText);
setFilteredLists(lists.filter(list => list[0].toLowerCase().includes(searchText)));
}

useEffect(() => {
localStorage.setItem('lists', JSON.stringify(lists));
setSearchUser("");
setFilteredLists(lists);
}, [lists]);

return (
<div>
<div className="addUser">
<div>
<input type="search" onChange={search} />
</div>
<input type="text" name="name" placeholder='Enter Your name' required value={inputUser}
onChange={(e) => { setInputUser(e.target.value) }}></input>
<input type="text" name="address" placeholder='Enter your Address' required
value={inputAddress}
onChange={(e) => { setInputAddress(e.target.value) }}></input>
<select value