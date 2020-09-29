import React, {useState} from 'react';

function HookCouter() {
	const [count,setCount] = useState(0)
	return (
		<div>
			// <button onClick = {()=>setCount(prevCount=>prevCount+1)}> Count {count}</button>
			<button onClick = {()=>setCount(count + 1)}> Count {count}</button>


		</div>
		)
}

export default HookCouter;