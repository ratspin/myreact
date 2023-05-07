import React from "react";
import * as BiIcon from "react-icons/bi";
function sidebar() {
  return (
    <div className="side-bar">
      <div>
        <a href="/">
          <BiIcon.BiBriefcaseAlt size={"1.5rem"} />
        </a>
        <a href="/overview">
          <BiIcon.BiBriefcaseAlt size={"1.5rem"} />
        </a>
        <a href="#third">
          <BiIcon.BiBriefcaseAlt size={"1.5rem"} />
        </a>
        <a href="#fourth">
          <BiIcon.BiBriefcaseAlt size={"1.5rem"} />
        </a>
      </div>
    </div>
  );
}

export default sidebar;
