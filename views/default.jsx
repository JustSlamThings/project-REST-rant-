const React = require('react')

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
      <p>Copyright © 2023-$`{getFullYear()}` Stephen Lam</p>
    </li>
  </ul>
</nav>

            </footer>
        </html>
    )
}

module.exports = Def
