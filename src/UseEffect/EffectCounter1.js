import React, { useState } from 'react'
import { useEffect } from 'react'
function EffectCounter1() {
  const [count, setCount] = useState(2);
  useEffect(() => {
    document.title = count
    console.log(count);
  })
  return (
    <div className="text-capitalize text-center mt-5">
      <button onClick={() => setCount(count + 1)}>Click{count} times </button>
      <p>We updating dom intial render and subsequent render using use Effect.it some cases applying effect after every render it will create performance problem</p>
    </div>
  )
}

export default EffectCounter1