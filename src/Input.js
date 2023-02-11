import colorNames from "colornames";
const Input = ({
    colorValue,setcolorValue,setHexValue, darkText, setDarkText}) => {
    return (
        <form onSubmit={(e)=> 
            e.preventDefault()
        }>
        <label>Add Color Name: </label>
        <input 
            autoFocus
            type="text"
            placeholder="Add Color Name"
            required
            value={colorValue}
            onChange = {(e) => {
                setcolorValue(e.target.value);
                setHexValue(colorNames(e.target.value));
            }}
        />
        
        <button
            type="button"
            onClick={() => setDarkText(!darkText)}
        >
            toggle text color
        </button>
        </form>
    )
}

export default Input