import { memo } from "react"
import { useSelector } from "react-redux";


const Rerender=()=>{
    const count = useSelector((state) => state.counter.value);

    return(
        <>
            {console.log(count)}
            {console.log('re-render')}
        </>
    )

}

export default memo(Rerender)