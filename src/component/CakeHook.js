import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { buycake } from '../actions/ActionCake';

export const CakeHook = () => {
 const numbOfCake =   useSelector(state => state.numbOfCakes);
 const dispatch =  useDispatch();
 console.log(`value of state in cake hook`,numbOfCake)
  return (
    <>
    <div>CakeHook{numbOfCake}</div>
    <button onClick={() => dispatch(buycake())}>buy cake</button>
    </>
  )
}
