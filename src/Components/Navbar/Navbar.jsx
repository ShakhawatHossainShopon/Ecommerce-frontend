import { NavLink } from "react-router-dom";
import { Logo } from "./navData";
export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>Logo</div>
        <div className="flex justify-between gap-4">
          search
          <ul className="flex justify-between gap-4">
            {Logo.map((Logo) => {
              return (
                <li className="list-none" key={Logo.name}>
                  <NavLink to={Logo.link}>{Logo.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
