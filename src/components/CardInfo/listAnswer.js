import React , {useState} from 'react'
import styles from './cardInfo.module.css';

export default (props) => {
console.log("props", props)

    const [result , setResult] = useState(''); 
    // console.log("result", result)
    const [isActive , setIsActive] = useState(false);
    const [isid , setisid ] = useState('')
 

    const isChoose = (idx,value) => {
        setisid(idx)
        if(Number(value[1]) == 1){
            setResult(true)
        }else {
            setResult(false)
        }
    } 

   
    return (
      <>

          {props ? props.value.map((item, index) =>(
            <ul className={item.id == isid ? styles.active_q : ''} key={index} onClick={()=>isChoose(item.id,Object.values(item))}>
                <li> {index} </li>
                <li>id : {item.id}</li>
                <li className={styles.cursor} >{Object.keys(item)}</li>
            </ul>
            
            )) : ""}
        <button onClick={()=>props.isCheck(result)}>check</button>
      </>
    )
}
