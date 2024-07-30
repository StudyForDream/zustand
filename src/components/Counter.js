import { userCounterStore } from "../store";


export default function Counter() {
  const {count, inc, dec, res} = userCounterStore()
  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={inc}>one up</button>
      <button onClick={dec}>one down</button>
      <button onClick={res}>reset zero</button>
    </div>
  )
}