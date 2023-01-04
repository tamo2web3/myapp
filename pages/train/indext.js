import React, { Component } from "react";
import { Label, Grid, Image, Segment, Item, Form, Button, Table, Icon } from "semantic-ui-react";
import Layout from "../../component/Layout"
import ChartData from "./chartdata";
import { Link } from "../../routes";

class trainIndex extends Component {

  renderRow(){

    const { Header, Row, HeaderCell, Body, Cell } = Table;

    const gym = [
      { date: "11/05", mac: "400", weight: "53.5 ->53.0", yell: ""},
      { date: "11/06", mac: "325", weight: "53.5 ->53.0", yell: ""},
      { date: "11/13", mac: "400", weight: "53.5 ->52.5", yell: "本日もお疲れ様です、ナイストレーニング!!"},
      { date: "11/19", mac: "425", weight: "54.5 ->53.5", yell: "good"},
      { date: "11/20", mac: "400", weight: "54.0 ->53.0", yell: "水分も抜けて、体重もしっかり戻ってますね☺"},
      { date: "11/26", mac: "400", weight: "53.5 ->52.5", yell: "いい調子ですね、12月からも頑張っていきましょう"},
      { date: "11/27", mac: "400", weight: "53.5 ->52.5", yell: "連日のトレーニングお疲れ様です。本日はコスタリカ戦、私たちも熱い気持ちでトレーニング励みましょう"},
      { date: "12/03", mac: "400", weight: "53.5 ->52.5", yell: "Goodです"},
      { date: "12/04", mac: "375", weight: "54.0 ->53.5", yell: "体重が減らないと不安になるかもしれませんが、後から必ず結果がついてきます！頑張りましょう"},
      { date: "12/10", mac: "400", weight: "54.0 ->53.0", yell: "今年もあとわずかですが、一緒に頑張りましょう"}
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
            <HeaderCell width={3}>Date</HeaderCell>
            <HeaderCell width={3}>Kcal</HeaderCell>
            <HeaderCell width={3}>Kg</HeaderCell>
            <HeaderCell width={10}>Message from Gym stuff</HeaderCell>
          </Row>
        </Header>
        <Body>
          {this.renderRow()}
        </Body>
      </Table>
    );
  }

  renderRight(){

    const ytt = "YouTube video player" ;
    const ytw = "400";
    const yth = "230";

    return(
      <Item>
        <iframe src="https://www.youtube.com/embed/xOEontwitK4" title={ytt} width={ytw} height={yth} ></iframe>
        <iframe src="https://www.youtube.com/embed/EiDxYUjHc3E" title={ytt} width={ytw} height={yth} ></iframe>
        <iframe src="https://www.youtube.com/embed/CdNy715BU6E" title={ytt} width={ytw} height={yth} ></iframe>
        <iframe src="https://www.youtube.com/embed/6qmDKo7ar6E" title={ytt} width={ytw} height={yth} ></iframe>
        <iframe src="https://www.youtube.com/embed/JKtSTihxJBM" title={ytt} width={ytw} height={yth} ></iframe>
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
          <Grid.Column  width={10}>
            <h4>Gym Histories</h4>
            {this.renderChart()}
            {this.renderTable()}
          </Grid.Column>
          <Grid.Column  width={3}>
            <h4>Gym Machines</h4>
            {this.renderRight()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Layout>
    )
  }
};

 export default trainIndex;
