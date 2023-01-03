const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
        <main>
            <h1>REST-Rant</h1>
                            <div>
                  <img src="images/unsplash.jpg" alt="Unsplash" />
                  </div>
      <div>
        Photo by <a href="https://unsplash.com/@kalvisuals">KAL VISUALS</a> on <a href="https://unsplash.com/photos/aK4iPNYipnU">Unsplash</a>
      </div>
                
<a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

        </main>
    </Def>
  )
}

  
module.exports = home
