import React , {useEffect} from 'react';
import Cards from '../Card/card.js';
// import RouterLink from "../RouterLink/routerLink.js";
import { Col, Row } from 'antd';
import styles from './listCard.module.css';
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchAllDataRequest
} from "../../actions/index.js";

const style = { background: '#0092ff', padding: '8px 0' };


export default (props) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.FetchData);
  console.log("listCard -> data", data)
  useEffect(() => {
    async function fetchData() {
        await dispatch(actFetchAllDataRequest());
    }
    fetchData();
  }, [dispatch]);
  
  return (
    <>
    <Row gutter={{ xs: 8, sm: 15, md: 24, lg: 10 }} justify="start"  style={{margin:0}} className={styles.listCard}>
      <Col 
        xs={{ span: 5}} 
        lg={{ span: 6}} 
        className={styles.card_item}
      >
        <Cards/>
      </Col>
      <Col 
      xs={{ span: 5}} 
      lg={{ span: 6}} 
        className={styles.card_item}
      >
        <Cards/>
      </Col>
      <Col 
      xs={{ span: 5}} 
      lg={{ span: 6}} 
        className={styles.card_item}
      >
        <Cards/>
      </Col>
      <Col 
      xs={{ span: 5}} 
      lg={{ span: 6}} 
        className={styles.card_item}
      >
        <Cards/>
      </Col>
      <Col 
      xs={{ span: 5}} 
      lg={{ span: 6}} 
        className={styles.card_item}
      >
        <Cards/>
      </Col>

    </Row>
    </>
  )
}
