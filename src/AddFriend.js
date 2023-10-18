import Button from './Button';
import { useState } from 'react';
export default function AddFriend({handleAddFriends, setOpenAdd,openAdd ,handleOpenAdd}) {
    const [friendName , setFriendName] = useState("");
    const [friendImg , setFriendImg] = useState("https://i.pravatar.cc/48?u=118836");

    function handleFriendName(e) {
        setFriendName(e.target.value)
    }
    function handleFriendImg(e) {
        setFriendImg(e.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!friendName || !friendImg ) return;
        const id = Math.floor((Math.random()*10000)+1);
        const newFriend = {
            id,
            name : friendName,
            // image:friendImg,
            image:`https://i.pravatar.cc/48?u=${id}`,
            balance:0,
        }
        handleAddFriends(newFriend); 
        setFriendName("")
        setOpenAdd(false);
    }
    return<>
        {openAdd &&
            <form className="form-add-friend" onSubmit={(event)=> handleSubmit(event)}>
                <label>👩🏼‍🤝‍👩🏻Friend name</label>
                <input type="text" value={friendName} onChange={(event)=> handleFriendName(event)}/>
                <label>🖼 Image URL</label>
                <input type="text" value={friendImg} onChange={(event)=> handleFriendImg(event)}/>
                <Button>Add</Button>
            </form>
        }
        <Button handleOpen={handleOpenAdd}>{!openAdd ? "Add friend":"Close"}</Button>
    </>
}

// crypto.randomUUID() => this is another way to generate random id