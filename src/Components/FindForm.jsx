export default function FindForm() { 
    return (
        <form className="form">
            <input type="text" placeholder="Enter the movie name" />
            <button className="find-button" type="submit">Find movie</button>
        </form>
    )
}