import "./header.css";
import { NavLink } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink className="li_des"  to="/">Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="li_des"  to="/admin-login">Admin</NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="li_des" to="/user-login">User</NavLink>
          </li>
        </ul>
      </nav>

      <div 
      style={{
        textAlign:"center"

      }}>
        <h3>It is a Quiz platform <br />
        where you can participate in multiple quiz and can win some Amazing Goodies
        </h3><br />
       <NavLink className="start" to="/user-login">Let's Start -></NavLink>
   </div>
    </>
  );
}
