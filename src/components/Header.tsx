import React from 'react';
import { Link } from 'react-router-dom';
//@ts-ignore
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';

import { setInputValue } from '../slices/filterSlice';

import styles from '../scss/_header.module.scss';

export const Header: React.FC<Record<string, number>> = ({ orderTotal, quantity }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const dispatch = useDispatch();

  const searchDebounce = React.useCallback(
    debounce((value: string) => {
      dispatch(setInputValue(value));
    }, 500),
    [],
  );

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    searchDebounce(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.company}>
        <div>
          <Link className={styles.routerLink} to="/">
            <img alt="pizza-logo" src="/img/icons/pizza-logo.svg"></img>
          </Link>
        </div>
        <div>
          <Link className={styles.routerLink} to="/">
            <h1>PIZZERIA NAMING</h1>
            <p className={styles.greyFont}>the most delicious pizza in the universe</p>
          </Link>
        </div>
      </div>

      <div className={styles.inputZone}>
        <svg
          enableBackground="new 0 0 32 32"
          id="EditableLine"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="14"
            cy="14"
            fill="none"
            id="XMLID_42_"
            r="9"
            stroke="#aeaeae"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"></circle>
          <line
            fill="none"
            id="XMLID_44_"
            stroke="#aeaeae"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="27"
            x2="20.366"
            y1="27"
            y2="20.366"></line>
        </svg>
        <input
          value={searchValue}
          onChange={(event) => onSearchChange(event)}
          placeholder="Find pizza..."></input>
        <svg
          onClick={() => {
            dispatch(setInputValue(''));
            setSearchValue('');
          }}
          className={styles.clearSearchField}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#aeaeae"
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
        </svg>
      </div>

      <div className={styles.cartButton}>
        <Link to="/cart">
          <button>
            <div>
              {orderTotal} €<div className={styles.buttonDelimeter}></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>
              {quantity}
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};
