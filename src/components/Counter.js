import { userCounterStore } from "../store";


export default function Counter() {
  const {count, inc} = userCounterStore()
  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={inc}>one up</button>
    </div>
  )
}