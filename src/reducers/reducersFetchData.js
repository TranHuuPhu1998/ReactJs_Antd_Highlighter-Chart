import * as Types from "../constants/ActionTypes";

var initialState = [
    {title:'title1' , id:1 ,content : 'content1'},
    {title:'title2' , id:2 ,content : 'content1'},
    {title:'title3' , id:3 ,content : 'content1'},
    {title:'title4' , id:4 ,content : 'content1'}

]

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ALL_DATA:
            state = action.data
            return [...state];
        default:
            return state;
    }
};

export default myReducer;
