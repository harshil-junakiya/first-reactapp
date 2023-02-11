
const Square = ( {colorValue, hexValue , darkText }) => {
    return (
        <section 
            className="square"
            style={{backgroundColor: colorValue,
                color : darkText ? "black" : "white"
            }}
        >
            <p>{colorValue ? colorValue : "Empty Value"}</p>
            <p>{hexValue ? hexValue : "No Hex Value"}</p>
        </section>
    )
}

Square.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Square