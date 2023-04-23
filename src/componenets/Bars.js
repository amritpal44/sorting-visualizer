import './Bars.css';

function Bars({value}){
    return(
        <div className="bar-container">
            {value.map((values, index) => (
            <div className="array-bar" key={index} style={{height: `${values*3}px`}} > 
                <div className='array-values'>{values}</div>
            </div>
        ))}
        </div>
    )
}

export default Bars;