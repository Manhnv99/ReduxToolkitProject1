import { useCallback, useState } from "react"
import Rerender from "./rerender"
import { useDispatch, useSelector } from "react-redux";
import { increment,setValue } from "../redux/slices/counterSlice";



const Counter=()=>{

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const listUser = useSelector((state) => state.user.listUser);
    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);
    const name=useSelector((state)=>state.user.name)


    const handleSet=()=>{
        dispatch(setValue())
    }

    return(
        <>
            <span>{count}</span>
            <button onClick={handleSet}>Click</button>
            <Rerender/>
        </>
    )

}

export default Counter