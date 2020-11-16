import React , {useEffect} from 'react';
import Cards from '../Card/card.js';

import styles from './listCard.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  actFetchAllDataRequest
} from "../../actions/index.js";


export default (props) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.FetchData);
  let history = useHistory();

  
  useEffect(() => {
    async function fetchData() {
      await dispatch(actFetchAllDataRequest());
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state
  
  return (
    <>
      <div className={styles.listCard}>
        {data.map((item, index) => (
          <div key={index} className={styles.card_item}>
            <Cards 
              id={item.id}
              name={item.name}
              discription={item.discription}
              avatar={item.avatar}
              history={history}
            />
          </div>
        ))}
      </div>
    </>
  )
}
