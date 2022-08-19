import React from 'react'

const TopButtons = () => {

    const cities = [ {
        id:1,
        title: 'London'
    },
    {
        id:2,
        title: 'Nigeria'
    },
    {
        id:3,
        title: 'Italy'
    },
    {
        id:4,
        title: 'South Africa'
    },
    {
        id:5,
        title: 'Nairobi'
    },
]
  return (
    <div className = "flex items-center my-6 justify-around">{cities.map((city) => (
        <button key ={city.id} className = "text-white text-lg font-medium">{city.title}</button>

    ))}
        </div>
  )
}

export default TopButtons