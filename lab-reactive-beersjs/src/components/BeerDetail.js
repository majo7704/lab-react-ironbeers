import React from 'react'

export default function BeerDetail(props) {
  var { params } = props.match 
  var { beerId } = params;
  const foundBeer = props.listOfBeers.find((oneBeer) => (
    oneBeer._id === beerId
  ))
  return (
    <div>
      <ul>
        <li>
Beer detail
          
        </li>
      </ul>
    </div>
   )
}
