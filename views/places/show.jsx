const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
      <img src={data.place.pic} alt={data.place.name} />
            <h1>City</h1>
            <h3>{ data.place.city }</h3>
            <h1>State</h1>
            <h3>{ data.place.state }</h3>
            <h1>Cuisines</h1>
            <h3>{ data.place.cuisines }</h3>
            <h1>Ratings Section</h1>
            <h2>Currently Unrated</h2>
            <h1>Comments Section</h1>
            <h2>No Comments yet! </h2>
<a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     
  
<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 

   

          </main>
        </Def>
    )
}

module.exports = show
