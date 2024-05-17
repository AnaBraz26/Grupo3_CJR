import NavBar from "../Navbar";
import './page.css';


export default function Profile() {
        
    return (
      <>
        <link rel="stylesheet" href="styles.css"></link>
        <NavBar/>
        <h1 className="custom-text"> Novos professores </h1>
        <div> 
          <input className="custom-scr" placeholder="Pesquisar Professor"> 
          </input>
        </div>
      </>
    );
  }
  