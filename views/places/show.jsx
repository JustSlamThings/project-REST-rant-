const React = require('react')
const Def = require('../default')

function show (data) {

    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😸 »'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    
let rating = (
  <h3 className="inactive">
    Not yet rated
  </h3>
)
if (data.place.comments.length) {
  let sumRatings = data.place.comments.reduce((tot, c) => {
    return tot + c.stars
  }, 0)
  let averageRating = Math.round(sumRatings / data.place.comments.length)
  rating = (
    <h3>
      {averageRating} stars
    </h3>
  )

}
    return (
        <Def>
          <main>
          <h1>Show Page</h1>
          <div className='row'>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
      <img src={data.place.pic} alt={data.place.name} />
      <h3>
      Located in {data.place.city}, {data.place.state}
      </h3>
          </div>
                <div className="col-sm-6">
        <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
                <h2>
                  Rating
                </h2>
                {rating}
                <hr />
            <h1>Comments Section</h1>
            <h2>{comments}</h2>
 </div></div>
   
<a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     
    

<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 
 <form method='POST' action={`/places/${data.place.id}/comment`}>
                <div>
                <span>
                    <label htmlFor='author'>Name:</label>
                    <input className='form-control text-center' type='text' id='author' name='author'></input>
                    
                    <label htmlFor='content'>Comments</label>
                    <input className='form-control text-center' type='textarea' id='content' name='content'></input>

                    <label htmlFor='stars'>Rating</label>
                    <input step={.5} type='number' id='stars' name='stars' min={0} max={5}></input>
</span>

<span>
                    <label htmlFor='rant'>Would you like to rant?</label>
                    <input type="checkbox" name='rant' id='rant'></input>
</span>
                    <input type='submit' className="btn btn-primary" value='Submit Comments'></input>
 
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = show
