import EachFriend from "./EachFriend";

export default function FriendList({friends,handleSetOpenBill,selectedFriendId}) {
    return <div>
        {friends.map((friend) => <EachFriend friend={friend} key={friend.id} 
        handleSetOpenBill={handleSetOpenBill} selectedFriendId={selectedFriendId}/>)}
    </div>
}