import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slices/counterSlice";
import {fetchAllUser,updateUser} from "./redux/slices/userSlice";
import { store } from "./redux/store";
import Counter from "./components/counter";


function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const listUser = useSelector((state) => state.user.listUser);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);
  const name=useSelector((state)=>state.user.name)



  const changeName=()=>{
    dispatch(updateUser('123'))
  }


  return (
    <>
      <Counter/>
      <div>{name}</div>
      {
        isLoading ? 
          <div>is Loading ...</div>
        :
        listUser.map((item,index)=>{
        return(
          <ul key={index}>
            <li>{item.id}</li>
          </ul>
        )
        })
      }
      
      <div>count:{count}</div>
      <button onClick={() => {
        dispatch(fetchAllUser());
      }}>GetAll</button>
      
      <button onClick={changeName}>UpdateUser</button>
    </>
  );
}

export default App;
