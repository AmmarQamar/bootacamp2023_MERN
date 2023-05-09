const reducer = (state,action) => {
if(action.type==="INC"){
    return (state=state+1);
}
if(action.type==="DEC")
{
    let newNum=0;
    // state>=1?(newNum=state-1):(newNum=0)
  const st=state>=1?(state=state-1):(state=0)
    return (st);
}
return state;
}
export default reducer;