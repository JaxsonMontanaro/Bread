const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads})  {
    return (
<Default>
  <h2>Index Page</h2>
  {
  breads.map((bread, index)=> {
    return (
      <li key={index}>
        <a href={`/breads/${index}`}>
          {bread.name}
        </a>
      </li>
    )
  })
}

  <ul>
    {
      breads.map((bread, index)=> {
        return (<li></li>)
      }) 
    }
  </ul>
</Default>


//Change
    )
}


module.exports = Index
