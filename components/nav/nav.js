import React from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
          
          <div>
            <h1>
              <span>PROTIK</span>
              <span>SARKAR {String.fromCodePoint('0x1F50A')}</span>
            </h1>
          </div>
        </div>
        <nav>
          <Link className={slug === "" ? null : null} href="/">
          me
          </Link>
          <Link
            className={slug === "page-two" ? "selected" : null}
            className={slug === "page-two" ? "selected" : null}
            href="/page-two"
          >
            my-stuff
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
