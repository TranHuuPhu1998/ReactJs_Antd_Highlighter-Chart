import React from 'react';

import styles from './card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';

const openCard = (history,id) =>{
    history.push("/info",id);
}

function card({id,name,discription,history}) {
  return (
    <div
      className={styles.card_item}
      onClick={()=>openCard(history,id,name)}
    >
      <p className={styles.card_icon}><FontAwesomeIcon style={{'width':'100%', 'height':'100%'}} icon={faBookReader} /></p>
      <p className={styles.card_title}>{name}</p>
      <p className={styles.card_dis}>{discription}</p>
    </div>
    )
}


export default card

