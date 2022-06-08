export default function FindForm({ onChange, enterValue, onSubmit }) { 
    return (
        <form className="form" onSubmit={onSubmit}>
            <input type="search" placeholder="Enter the movie name" value={enterValue} onChange={ evt => onChange(evt.target.value) }/>
            <button className="find-button" type="submit">Find movie</button>
        </form>
    )
}