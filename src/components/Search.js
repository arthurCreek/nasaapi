import React, { useState, useContext } from "react";
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import NasaContext from '../context/nasa-img-context';

const now = moment();
// eslint-disable-next-line
const curiosity_dates = "09/05/2012 thru Present"; 
// eslint-disable-next-line
const opportunity_dates =  "01/05/2004 thru 06/10/2018"; 
// eslint-disable-next-line
const spirit_dates =  "01/04/2004 thru 05/25/2011"; 

const Search = () => {

    {/* 
       Start up variables for images and search options
    */}
    const { dispatch } = useContext(NasaContext);

    const [time, setTime] = useState(now);
    const [focused, setFocused] = useState(false);
    const [currentRoverDates, setRoverDates] = useState(curiosity_dates);
    const [currentRoverString, setRoverString] = useState('Curiosity');


    const searchNasa = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SEARCH',
            data: {
                date: time.format('YYYY-MM-DD'),
                rover: currentRoverString.toLowerCase()
            }
        })
    }

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
    
    return (
        <div className="search">
            <div className="search__form">
                <form>
                    {/* 
                        Form for picking the rover and the date with range recommendations
                    */}
                    <div className="search__form--container">
                        <div className="search__form--container-box">
                            <p>I'd like to see pictures from &nbsp;</p>
                            <select onChange={setRover} defaultValue={'curiosity'} className="search__select">
                                <option value="curiosity">Curiosity</option>
                                <option value="opportunity">Opportunity</option>
                                <option value="spirit">Spirit</option>
                            </select>
                        </div>
                        
                        <div className="search__form--container-box">
                            <p>&nbsp; on this day:&nbsp;</p>
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
                    </div>

                    <div className="search__form--date-hint">
                        <p>Mission Range for <span id="rover-name">{currentRoverString}</span>: {currentRoverDates}</p>
                    </div>

                    <div className="search__form--button">
                        <button onClick={searchNasa}>Search</button>
                    </div>

                </form>

            </div>


        </div>
    )
}

export default Search;