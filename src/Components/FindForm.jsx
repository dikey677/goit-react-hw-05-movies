export default function FindForm({ onClick, onChange }) { 
    return (
        <form className="form" onChange={onChange}>
            <input type="text" placeholder="Enter the movie name" />
            <button className="find-button" type="submit" onClick={onClick}>Find movie</button>
        </form>
    )
}