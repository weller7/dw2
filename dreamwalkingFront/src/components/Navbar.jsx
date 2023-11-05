import React from "react";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 z-40 mb-4">
  <div className="flex-1">
    <a className="btn btn-primary normal-case text-xl" href="/">Dreamwalkin'</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-base-100 z-40">
            <li><a href="/location/create">Create location</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    )
}

export default Navbar