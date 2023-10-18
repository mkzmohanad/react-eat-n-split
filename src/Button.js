export default function Button({handleOpen,children}) {
    return <button className="button" onClick={handleOpen}>{children}</button>
}