import React from "react";
import { Menu, Label } from "semantic-ui-react";
import { Link } from "../routes";

const Header = () => {
  return(
  <Menu style = {{ marginTop: '30px', marginBottom: '30px' }}>
    <Link route="/">
      <object>
        <Label as='a' tag>
          <h2>ホーム</h2>
        </Label>
      </object>
    </Link>
    <Link route="/heal/indexh">
      <object>
        <Label as='a' color='teal' tag>
          <h2>整える</h2>
        </Label>
      </object>
    </Link>
    <Link route="/play/indexp">
        <object>
          <Label as='a' color='orange' tag>
            <h2>楽しむ</h2>
          </Label>
        </object>
    </Link>
    <Link route="/train/indext">
      <object>
        <Label as='a' color='black' tag>
          <h2>鍛える</h2>
        </Label>
      </object>
    </Link>
      <Link route="/event/indexe">
        <object>
          <Label as='a' color='pink' tag>
            <h2>ｲﾍﾞﾝﾄ</h2>
          </Label>
        </object>
    </Link>
  </Menu>
)};

export default Header;
