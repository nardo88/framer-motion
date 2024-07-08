import { FormEvent, useState } from 'react'
import './App.scss'
import { Reorder } from 'framer-motion'

const defaultValues = [
  {
    id: 1,
    value: 'React',
  },
  {
    id: 2,
    value: 'TypeScript',
  },
]

function App() {
  const [value, setValue] = useState('')
  const [list, setList] = useState(defaultValues)

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (value) {
      setList((p) => [...p, { id: Date.now(), value }])
      setValue('')
    }
  }
  return (
    <div className="app">
      <form onSubmit={submitHandler} className="form">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">submit</button>
      </form>
      <div className="list">
        <Reorder.Group
          className="list__wrapper"
          as="ul"
          axis="y"
          values={list}
          onReorder={setList}>
          {list.map((item) => (
            <Reorder.Item
              className="list__item"
              key={item.id}
              value={item}
              whileDrag={{
                scale: 1.1,
                boxShadow: '0 0 5px 3px rgba(0,0,0,0.3)',
                background: 'white',
              }}>
              {item.value}
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </div>
  )
}

export default App
