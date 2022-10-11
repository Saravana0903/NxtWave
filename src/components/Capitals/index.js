import {useState} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
const Capitals = () => {
  const [item, setterFun] = useState(countryAndCapitalsList[0])
  const updateCapital = e => {
    const newItem = countryAndCapitalsList.filter(
      each => each.capitalDisplayText === e.target.value,
    )
    setterFun(newItem)
    console.log(item)
    console.log(newItem)
    console.log(e.target.value)
  }

  return (
    <div className="bg-container">
      <div className="card-container">
        <h1 className="main-head">Countries and Capitals</h1>
        <p>{item.id}</p>
        <select onChange={updateCapital} value={item.id}>
          {countryAndCapitalsList.map(each => (
            <option className="form-control" key={each.id}>
              {' '}
              {each.capitalDisplayText}{' '}
            </option>
          ))}
        </select>{' '}
        <span className="span-ele"> is Capital of which Country?</span>
        <p className="para"> {item.country} </p>
      </div>
    </div>
  )
}
export default Capitals
