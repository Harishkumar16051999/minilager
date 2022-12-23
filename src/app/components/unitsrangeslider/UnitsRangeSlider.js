import React, {useState} from "react";
import ReactSlider from "react-slider";

const UnitsRangeSlider = (props) => {
    let intialMin;
    let intialMax;
    intialMin = Number(sessionStorage.getItem('MinValue'));
    intialMax =  Number(sessionStorage.getItem('MaxValue'));
    const[min, setMin] = useState(intialMin);
    const[max, setMax] = useState(intialMax);
    
    const handleChange = (data)=> {
         props.pricerangeinitialvalue(data);
         setMin(data[0]);
         setMax(data[1]);
    }
    return (
        <div className="range-div mt-2">
            <ReactSlider
                className="range-slider"
                thumbClassName="thumb"
                trackClassName="track"
                reverse = {false}
                defaultValue={[10, 500]}
                min={props.priceRange.minPrice}
                max={props.priceRange.maxPrice}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext="auto"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                step={10}
                onChange={handleChange}
            />
        </div>
    )
}

export default UnitsRangeSlider