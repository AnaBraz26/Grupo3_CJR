import NavBar from "../Navbar";
import './page.css';


export default function Profile() {
        
    return (
      <>
        <link rel="stylesheet" href="styles.css"></link>
        <NavBar></NavBar>
        <div className="flex items center justify win-h screen bg-gray">
            <h1 className="custom-text"> Novos professores </h1>
            <div> 
               <form>
                    <textarea className="custom-scr" id="professor" name="professor" cols="25"></textarea>
                </form>
            </div>
        </div>
        <div>


        </div>
      </>
    );
  }
  