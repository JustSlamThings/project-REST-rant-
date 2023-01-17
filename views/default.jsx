const React = require('react')
// const today=New Date()
// const year = today.getFullYear()

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/places">Places</a>
    </li>
    <li>
      <a href="/places/new">Add Place</a>
    </li>
  </ul>
</nav>

                {html.children}
            </body>
            <footer>

              <nav>
  <ul>
    <li>
      <p>Author: Stephen Lam</p>
    </li>
    <li>
      <p>Copyright © 2023 to 2023</p>
    </li>

<li>
{/* {getFullYear()} */}
    </li>

  </ul>
</nav>

            </footer>
        </html>
    )
}

module.exports = Def
