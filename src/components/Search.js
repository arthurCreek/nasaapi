import React, { useState, useEffect} from "react";
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
// eslint-disable-next-line
const curiosity_dates = "09/05/2012 thru Present"; 
// eslint-disable-next-line
const opportunity_dates =  "01/05/2004 thru 06/10/2018"; 
// eslint-disable-next-line
const spirit_dates =  "01/04/2004 thru 05/25/2011"; 

const Search = () => {
    const [time, setTime] = useState(now);
    const [focused, setFocused] = useState(false);
    const [currentRoverDates, setRoverDates] = useState(curiosity_dates);
    const [currentRoverString, setRoverString] = useState('Curiosity');



    function setRover(e) {
        switch (e.target.value) {
            case 'curiosity':
                setRoverDates(curiosity_dates);
                setRoverString('Curiosity');
                break;
            case 'opportunity':
                setRoverDates(opportunity_dates);
                setRoverString('Opportunity');
                break;
            case 'spirit':
                setRoverDates(spirit_dates);
                setRoverString('Spirit');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        console.log(time);
        console.log(focused);

    }, [focused, time]);
    
    return (
        <div className="search">
            <div className="search__form">
                <div className="search__form--container">
                    <p>I'd like to see pictures from </p>
                    <select onChange={setRover} defaultValue={'curiosity'}>
                        <option value="curiosity">Curiosity</option>
                        <option value="opportunity">Opportunity</option>
                        <option value="spirit">Spirit</option>
                    </select>
                    
                    <p> from this day: </p>
                    <SingleDatePicker
                        date={time} // momentPropTypes.momentObj or null
                        onDateChange={date => setTime(date)} // PropTypes.func.isRequired
                        focused={focused} // PropTypes.bool
                        onFocusChange={({ focused }) => setFocused(focused)} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        id="your_unique_id" // PropTypes.string.isRequired,
                    />
                </div>

                <div className="search__form--date-hint">
                    <p>Mission Range for {currentRoverString}: {currentRoverDates}</p>
                </div>
            </div>


        </div>
    )
}

export default Search;