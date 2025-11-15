import { act, useState } from "react";

export const Navbar = ({setCategory}) => {

    const [active, setActive] = useState(1)

  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-5">Today News</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" style={{textTransform:'capitalize',cursor:'pointer'}}>
        <li className="nav-item">
         <div  className={`nav-link ${active == 1 ?'active':''}`} onClick={()=> {setCategory('technology'); setActive(1)}}>technology</div>
        </li>
         <li className="nav-item">
         <div  className={`nav-link ${active == 2 ?'active':''}`} onClick={()=>{setCategory('sports');setActive(2);}}>sports</div>
        </li>
         <li className="nav-item">
         <div  className={`nav-link ${active == 3 ?'active':''}`} onClick={()=>{setCategory('science');setActive(3);}}>science</div>
        </li>
         <li className="nav-item">
         <div  className={`nav-link ${active == 4 ?'active':''}`} onClick={()=>{setCategory('health');setActive(4);}}>health</div>
        </li>
         <li className="nav-item">
         <div  className={`nav-link ${active == 5 ?'active':''}`} onClick={()=>{setCategory('entertainment');setActive(5);}}>entertainment</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
