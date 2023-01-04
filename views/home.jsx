const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
        <main>
            <h1>REST-Rant</h1>
                            <div>
                  <img src="images/milktea.jpg" alt="Milk Tea" />
                  </div>
      <div>
        Photo by <a href="https://unsplash.com/@tex450">Matthew Ball</a> on <a href="https://unsplash.com/photos/4HaWpdSoLd0">Unsplash</a>
      </div>
                
<a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
        </main>
    </Def>
  )
}

  
module.exports = home
