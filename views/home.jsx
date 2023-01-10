const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
        <main>
            <h1>REST-Rant</h1>
                            <div>
                  <img src="images/milktea.jpg" alt="Milk Tea" />
      <div>
        Photo by <a href="https://unsplash.com/@tex450">Matthew Ball</a> on <a href="https://unsplash.com/photos/4HaWpdSoLd0">Unsplash</a>
      </div>
                </div>
    <a href="/places">
  <button className="btn-primary">Places Page</button>
    </a>
    <a href="/">
  <button className="btn-primary">Index Page</button>
    </a>

{/* can't seem to complete one of the bonus  
2. Make a prominent link on the home page that leads the user to the index page (this is the GET route for /places). */}
        </main>
    </Def>
  )
}

  
module.exports = home
