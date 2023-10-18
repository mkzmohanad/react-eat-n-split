import Button from "./Button"
import { useState } from "react"
export default function BillMenu({selectedFriend,updateFriend,handleCloseBillAfterSubmit}) {
    const [totalBill , setTotalBill] = useState(0);
    const [yourBill , setYourBill] = useState(0);
    const [whoPays , setWhoPays] = useState(0);
    
    function handleSetTotalBill(event) {
        setTotalBill(Number(event.target.value))
    }
    function handleSetYourBill(event) {
         // if your bill is greater than the total bill it will keep the last bill you typed (will not update it to the larger value)
        setYourBill(Number(event.target.value) > totalBill ? yourBill : Number(event.target.value))
    }
    function handleSetWhoPays(event) {
        setWhoPays(Number(event.target.value))
    }
    function handleReset() {
        setTotalBill(0);
        setYourBill(0);
        setWhoPays(0);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!totalBill || !yourBill) return;
        if (whoPays === 0) {
            updateFriend(friendBill + selectedFriend.balance)
        }
        else {
            updateFriend(-yourBill + selectedFriend.balance)
        }
        handleReset()
        handleCloseBillAfterSubmit(false)
    }
    if (whoPays !== 0 && whoPays !== selectedFriend.id) {
        handleReset()
    }
    const friendBill = totalBill - yourBill;
    return <form className = "form-split-bill" onSubmit={(e) => handleSubmit(e)}>
        <h2>split a bill with {selectedFriend.name}</h2>
        <label>💰 Bill Value</label>
        <input type="text" value={totalBill > 0 ? totalBill : ""} onChange={(event) => {handleSetTotalBill(event)}}/>
        <label>🧍🏻‍♂️ Your expense</label>
        <input type="text" value={yourBill > 0 ? yourBill : ""} onChange={(event) => {handleSetYourBill(event)}}/>
        <label>👩🏼‍🤝‍🧑🏼 {selectedFriend.name}'s expense</label>
        <input type="text" disabled value={friendBill >= 0 ? friendBill : ""}/>
        <label>🤑 Who is paying the bill?</label>
        <select value={whoPays} onChange={(e) => {handleSetWhoPays(e)}}>
            <option value={0}>You</option>
            <option value={selectedFriend.id}>{selectedFriend.name}</option>
        </select>
        <Button>Split bill</Button>
    </form>
}