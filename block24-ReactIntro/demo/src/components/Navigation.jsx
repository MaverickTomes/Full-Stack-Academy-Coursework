
function Navigation() { //most components start this way
  return (
    //add the <> </> to have more than one element inside
    <> 
    <nav>
      <h1>Intro To React-Demo</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
    </nav>
      </>
  )
}

export default Navigation; 
// have to export it to let it talk to another file.
//make sure the function and the export match.
