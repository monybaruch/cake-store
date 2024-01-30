import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice.js';
import { useState } from 'react';
const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(3))}>Restock ice creams</button>
    </div>
  );
};
export default IcecreamView;
