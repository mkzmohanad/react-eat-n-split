import { useState } from "react";
import FriendList from "./FriendList";
import BillMenu from "./BillMenu";
import AddFriend from "./AddFriend";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends , setFriends] = useState(initialFriends);
  const [OpenBill , setOpenBill] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState({});
  const [selectedFriendId, setSelectedFriendId] = useState(0);
  const [openAdd , setOpenAdd] = useState(false);

  function handleOpenAdd() {
    if(!openAdd) {
        setOpenBill(false);
        setSelectedFriendId(0);
    }
    setOpenAdd((open) => !open);
  }
  function handleCloseBillAfterSubmit() {
    setOpenBill(false);
    setSelectedFriendId(0);
  }
  function handleSetOpenBill(friend) {
    setOpenAdd(false);
    setOpenBill((isOpen)=> selectedFriendId === friend.id ? !isOpen : true);
    setSelectedFriend(friend);
    setSelectedFriendId(selectedFriendId === friend.id ? null : friend.id);
  }

  function handleAddFriends(newFriend) {
    setFriends((friendsList) => [...friendsList , newFriend])
  }
  function updateFriend(balance) {
    setFriends((friends)=> friends.map((friend) => friend.id === selectedFriendId ? {...friend , balance:balance} : friend))
  }
  return <div className="app">
    <div className="sidebar">
      <FriendList friends = {friends} handleSetOpenBill={handleSetOpenBill} selectedFriendId={selectedFriendId}/>
      <AddFriend handleAddFriends={handleAddFriends} openAdd={openAdd} setOpenAdd={setOpenAdd} handleOpenAdd={handleOpenAdd}/>
    </div>
    {OpenBill && <BillMenu selectedFriend = {selectedFriend} updateFriend={updateFriend} handleCloseBillAfterSubmit={handleCloseBillAfterSubmit} />}
  </div>
}