import React, { Component } from "react";
import { Label, Grid, Image, Segment, Item, Form, Button, Table } from "semantic-ui-react";
import Youtube from "react-youtube";
import Layout from "../../component/Layout"
import ChartData from "./chartdata";
import { Link } from "../../routes";

class testIndex0 extends Component {

  renderRow(){

    const { Header, Row, HeaderCell, Body, Cell } = Table;

    const gym = [
      { date: "2022/11/05", mac: "45min, 400Kcal", weight: "53.5->53.0", yell: "Good!!!です"},
      { date: "2022/11/06", mac: "45min, 400Kcal", weight: "53.5->53.0", yell: ""},
      { date: "2022/11/13", mac: "45min, 400Kcal", weight: "53.5->52.5", yell: ""},
      { date: "2022/11/19", mac: "45min, 400Kcal", weight: "54.5->53.5", yell: ""},
      { date: "2022/11/20", mac: "45min, 400Kcal", weight: "54.0->53.0", yell: ""},
      { date: "2022/11/26", mac: "45min, 400Kcal", weight: "53.5->52.5", yell: ""},
      { date: "2022/11/27", mac: "45min, 400Kcal", weight: "53.5->52.5", yell: ""},
      { date: "2022/12/03", mac: "45min, 400Kcal", weight: "53.5->52.5", yell: ""},
      { date: "2022/12/04", mac: "45min, 400Kcal", weight: "54.0->53.5", yell: ""},
      { date: "2022/12/10", mac: "45min, 400Kcal", weight: "54.0->53.0", yell: ""}
    ];

    const outgyms = gym.map((v, i) => {
      return (
        <Row key={i}>
          <Cell>{gym[i].date}</Cell>
          <Cell>{gym[i].mac}</Cell>
          <Cell>{gym[i].weight}</Cell>
          <Cell>{gym[i].yell}</Cell>
        </Row>
      );
    });

    return outgyms;

  }

  renderTable(){
    const { Header, Row, HeaderCell, Body, Cell } = Table;

    return(

      <Table striped fixed color='black' key='black'>
        <Header>
          <Row>
            <HeaderCell>Date</HeaderCell>
            <HeaderCell>Done</HeaderCell>
            <HeaderCell>Weight</HeaderCell>
            <HeaderCell>Stuff Yell</HeaderCell>
          </Row>
        </Header>
        <Body>
          {this.renderRow()}
        </Body>
      </Table>
    );
  }

  renderRight(){
    return(
      <Item>
        <iframe src="https://www.youtube.com/embed/xOEontwitK4" title="YouTube video player" width="560" height="315" ></iframe>
        <iframe src="https://www.youtube.com/embed/EiDxYUjHc3E" title="YouTube video player" width="560" height="315" ></iframe>
        <iframe src="https://www.youtube.com/embed/CdNy715BU6E" title="YouTube video player" width="560" height="315" ></iframe>
        <iframe src="https://www.youtube.com/embed/6qmDKo7ar6E" title="YouTube video player" width="560" height="315" ></iframe>
        <iframe src="https://www.youtube.com/embed/JKtSTihxJBM" title="YouTube video player" width="560" height="315" ></iframe>
      </Item>
    );
  }

  renderChart(){
    return <ChartData charts = {this.props.gyms} />
  }


  render() {

    return (
      <Layout>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <h4>Gym Histories</h4>
            {this.renderChart()}
            {this.renderTable()}
          </Grid.Column>
          <Grid.Column>
            <h4>Gym Machines</h4>
            {this.renderRight()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Layout>
    )
  }
};

 export default testIndex0;
