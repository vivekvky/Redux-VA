import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchListData } from '../../store/search-actions';
import classes from './Search.module.css';

export default function Search() {
  const [searchValue, setValue] = useState({ location: 'new-york', date: '' });
  const minDate = new Date().toISOString().slice(0, 10);
  const defaultData = {
    bookingType: 'hotel',
    location: 'orlando',
    departureDate: '24-09-2022',
    duration: '7',
    partyCompositions: [
      {
        adults: 2,
        childAges: [],
        infants: 0
      }
    ]
  };

  const onLocationChange = (event) => {
    console.log(event.target.value);
    setValue((prevValue) => {
      return { ...prevValue, location: event.target.value };
    });
  };

  const onDateChange = (e) => {
    setValue((prevValue) => {
      return { ...prevValue, date: e.target.value };
    });
  };
  const dispatch = useDispatch();
  const onSearch = (e) => {
    e.preventDefault();
    const postdata = {
      ...defaultData,
      location: searchValue.location,
      departureDate: searchValue.date
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-')
    };
    dispatch(searchListData(postdata));
  };

  return (
    <form className={classes['form']}>
      <div className={classes['content']}>
        <div className={classes['flex-container']}>
          <label>Country</label>
          <select
            data-testid="country"
            className="input-control"
            name="country"
            value={searchValue.location}
            onChange={onLocationChange}>
            {['new-york', 'orlando', 'barbados', 'toronto'].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className={classes['flex-container']}>
          <label>Date</label>
          <input
            data-testid="start"
            type="date"
            className="input-control"
            name="trip-start"
            onChange={onDateChange}
            value={searchValue.date}
            min={minDate}
            max="2025-12-31"
          />
        </div>
        <div className={classes['flex-container']}>
          <button
            className={classes['submit-button']}
            type="submit"
            onClick={onSearch}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
