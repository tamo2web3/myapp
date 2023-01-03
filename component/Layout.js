import React from "react";
import Header from "./Header";
import { Container, List } from "semantic-ui-react";

const Layout = (props) => {
  return (
    <Container>
      <link async rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"/>
      <Header>
        {props.children}
        ※スマホの場合、横向きでお願いします
      </Header>
      <List>
        <List.Item>
          <List.Icon name='mail' />
          <List.Content>
            <List.Header>Contact Me <a href="mailto:tamo2nice@gmail.com">tamo2nice@gmail.com</a></List.Header>
            <List.Description>  Updated 2023/01/03 </List.Description>
          </List.Content>
        </List.Item>
      </List>

    </Container>
  );
};
export default Layout;
