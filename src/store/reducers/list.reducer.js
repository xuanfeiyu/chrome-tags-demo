import { CREATE, DELETE } from "../const/list.const"
const initialState = {
  list: [
    { webname: "百度", webaddress: "https://www.baidu.com" },
  ],
}
const CreateNewTag=(state,action)=>{
  let newstate = JSON.parse(JSON.stringify(state))
  newstate.list.push(action.payload)
  return {...state,list:newstate.list}
}
const DeleteTag=(state,action)=>{
  let newstate = JSON.parse(JSON.stringify(state))
  newstate.list.splice(action.payload.index,1)
  return {...state,list:newstate.list}
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE: {
      return CreateNewTag(state,action)
    }
    case DELETE: {
      return DeleteTag(state,action)
    }
    default: {
      return state
    }
  }
}
export default reducer
