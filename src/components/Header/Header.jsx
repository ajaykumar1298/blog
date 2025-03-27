import React from "react";
import { LogoutBtn, Container, Logo } from "../index";
import { Link, Links } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navitem = [
    {
      name: "home",
      slug: "/",
      active: true,
    },
    {
      name: "login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-grey-500">
      <Container>
        <nav className="flex">
          <div className="m-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navitem.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    onClick={navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
