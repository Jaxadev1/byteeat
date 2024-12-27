
import { Link } from "react-scroll";

const App = () => {
  return (
    <div style={{ paddingTop: "100px", position: "relative" }}>
      {/* Navbar yoki menyu */}
      <nav style={{ position: "sticky", top: 0, left: 0, right: 0, backgroundColor: "lightgray" }}>
        <ul>
          <li>
            <Link to="section1" smooth={true} duration={500}>
              Section 1
            </Link>
          </li>
          <li>
            <Link to="section2" smooth={true} duration={500}>
              Section 2
            </Link>
          </li>
          <li>
            <Link to="section3" smooth={true} duration={500}>
              Section 3
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sahifadagi bo'limlar */}
      <div id="section1" style={{ height: "300px", backgroundColor: "lightblue" }}>
        <h1>Section 1</h1>
      </div>
      <div id="section2" style={{ height: "300px", backgroundColor: "lightgreen" }}>
        <h1>Section 2</h1>
      </div>
      <div id="section3" style={{ height: "300px", backgroundColor: "lightcoral" }}>
        <h1>Section 3</h1>
      </div>
    </div>
  );
};

export default App;
