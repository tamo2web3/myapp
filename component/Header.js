import React from "react";
import { Menu, Label } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return(
  <Menu style = {{ marginTop: '30px', marginBottom: '30px' }}>
    <Link route="/">
      <object>
        <Label as='a' tag>
          <h2>Home</h2>
        </Label>
      </object>
    </Link>
    <Link route="/indexz">
      <object>
        <Label as='a' color='black' tag>
          <h2>鍛える</h2>
        </Label>
      </object>
    </Link>
    <Link route="/indexa">
      <object>
        <Label as='a' color='teal' tag>
          <h2>整える</h2>
        </Label>
      </object>
    </Link>
      <Link route="/indexb">
        <object>
          <Label as='a' color='orange' tag>
            <h2>遊ぶ</h2>
          </Label>
        </object>
    </Link>
      <Link route="/indexc">
        <object>
          <Label as='a' color='pink' tag>
            <h2>Event</h2>
          </Label>
        </object>
    </Link>
  </Menu>
)};

export default Header;
