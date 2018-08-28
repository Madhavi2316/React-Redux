const intialState={age:21};

const reducer = (state=intialState, action)=>{
    const newState = {...state};
    if(action.type === 'AGE_UP'){
        newState.age++;
    }
    if(action.type === 'AGE_DOWN'){
        newState.age--;
    }
    return newState;
};


export default reducer;