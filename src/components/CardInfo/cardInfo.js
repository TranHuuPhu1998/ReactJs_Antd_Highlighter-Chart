import React , {useEffect ,useState} from 'react'
import styles from './cardInfo.module.css'
import ListAnswer from './listAnswer.js';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    actFetchEnglishDetailRequest
} from "../../actions/index.js";

import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
export default (props) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const data = useSelector(state => state.FetchDataEngDetails)
    console.log("data", data)
    let [idquestion , setidQuestion] = useState('2');
    let [lengthid , setlengthID] = useState(1);
    let [isDisabled , SetDisabled] = useState(true);
    let [isChecked , SetChecked] = useState(false);
    let id = history.location.state;

    useEffect(() => {
        async function fetchData(id) {
          await dispatch(actFetchEnglishDetailRequest(id));
        }
        fetchData(id);
    }, [id]); // Or [] if effect doesn't need props or state
    


    const Next = (data,value)=>{
        let total = lengthid + value;
        let _length = data.length;

        if(total === _length){
            SetDisabled(false);
        }
        
        data.forEach((item,index)=>{
            if(index === lengthid) {
                setidQuestion(item.id)
                return;
            }
        })
        setlengthID(total);
        return;
    }
    
    const check = (value)=>{
        console.log("check -> value", value)
        SetChecked(!isChecked);
        if(value === 1){
            NotificationManager.success('Success message', 'Title here', 5000, () => {
                alert('callback');
              });
            Next(data,1)
            return;
        }else {
            NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
            });
            Next(data,1)
            return;
        }
        
    }

    return (
        <div>
                    <NotificationContainer/>
            <h2>CardInfo</h2>
                {data.map((value, index) => {
                    if(value.id === idquestion){
                        return (
                            <div key={index}>
                                <h3>{value.title}</h3>
                                <h4>{value.question}</h4>
                                <p>{value.content}</p>
                                <p>id:{value.id}</p>
                                <ListAnswer  id={value.id} value={value.answer} isCheck={check} />   
                            </div>
                        )
                    }

                })}
                <button className={isDisabled  ? styles.active : styles.eventNone } onClick={()=>Next(data,1)}>next</button>
        </div>
    )
}
