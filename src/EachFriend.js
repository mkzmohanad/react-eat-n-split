import Button from "./Button"
export default function EachFriend({friend,handleSetOpenBill,selectedFriendId}) {
    return <ul>
        <li className={selectedFriendId === friend.id?"selected":""}>
        <img src={friend.image} alt={friend.name}/>
        <h3>{friend.name}</h3>
        <p className={friend.balance > 0 ? "green" : friend.balance < 0 ? "red" : ""}>
            {friend.balance > 0 && `${friend.name} Owes you ${friend.balance}$`}
            {friend.balance < 0 && `You Owe ${friend.name} ${Math.abs(friend.balance)}$`}
            {friend.balance === 0 && `You and ${friend.name} are even`}
        </p>
            <Button handleOpen = {()=>handleSetOpenBill(friend)}>{selectedFriendId === friend.id ? "Close" : "Select"}</Button>
        </li>
    </ul>
}
