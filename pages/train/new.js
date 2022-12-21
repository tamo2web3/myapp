import React, { Component } from "react";
import { Label, Grid, Image, Segment, Item, Form, Button, Table } from "semantic-ui-react";
import Youtube from "react-youtube";
import Layout from "../../Component/Layout";
import { Link } from "../../routes";
import "../../style/style.module.css";

class testIndex0 extends Component {

  renderRight(){
    const { Header, Row, HeaderCell, Body } = Table;

    return(

      <Table sortable celled selectable compact striped color='black' key='black'>
        <Header>
          <Row>
          <HeaderCell>ID</HeaderCell>
          <HeaderCell>Date</HeaderCell>
          <HeaderCell>Machine</HeaderCell>
          <HeaderCell>min</HeaderCell>
          <HeaderCell>cal</HeaderCell>
          <HeaderCell>Weight</HeaderCell>
          <HeaderCell>Gym Stuff Yell/Messages</HeaderCell>
          <HeaderCell></HeaderCell>
          </Row>
        </Header>
      </Table>
    );
  }

  renderLeft(){
    return(
      <Item key="xOEontwitK4">
        <Item.Content verticalAlign='middle'>
          <Item.Header content="Treadmill"/>
          <Youtube videoId="xOEontwitK4" />
          <Item.Header content="Abdominal crunch"/>
          <Youtube videoId="EiDxYUjHc3E" />
          <Item.Header content="Rotary torso"/>
          <Youtube videoId="CdNy715BU6E" />
          <Item.Header content="Back extension"/>
          <Youtube videoId="6qmDKo7ar6E" />
          <Item.Header content="Glute"/>
          <Youtube videoId="JKtSTihxJBM" />
        </Item.Content>
      </Item>
    );
  }

  render() {

    return (
      <Layout>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <h3>Trainning Histories</h3>
          <Link route={`/smartgym/${this.props.adr}/new`}>
            <a>
              <Button
                content="Input Gym"
                icon="add circle"
                secondary
              />
            </a>
          </Link>
          {this.renderRight()}
          </Grid.Column>
          <Grid.Column>
            {this.renderLeft()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Layout>
    )
  }
};

 export default testIndex0;
