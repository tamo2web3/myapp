import React, { useState } from "react";
import { Label, Grid, Image, Segment, Item, Form, Button, Table, Icon } from "semantic-ui-react";
import Layout from "../../component/Layout"
import ChartData from "./chartdata";
import { Link } from "../../routes";
//import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";

function renderRow(props){

  const pres = props.posts;
  const iines = pres.map((pre) => pre.iine);

  const [iine, setIine] = useState(iines);

  const onClickMessage = (index) => {
    if (index < 0) return;
    if (index >= iine.length) return;

    const newAry = [...iine];
    let temp = newAry[index];
    let item = String(Number(temp) + 1);
    newAry.splice(index, 1, item);
    setIine(newAry);
  }

  const { Header, Row, HeaderCell, Body, Cell } = Table;

  const gyms = props.posts;
  const outgyms = gyms.map((gym, index) => {
    return (
      <Row key={index}>
        <Cell>{gym.date}</Cell>
        <Cell>{gym.kcal}</Cell>
        <Cell>{gym.weight}</Cell>
        <Cell>{gym.yell}</Cell>
        <Cell>
        <Button onClick={() => onClickMessage(index)} icon>
          <Icon name='like' color='red' />
        </Button>
        </Cell>
        <Cell>{iine[index]}</Cell>
      </Row>
    );
  });

  return outgyms;

}

function renderTable(props){

  const [iine, setIine] = useState([0,0,0,0,0,0,0,0]);


  const { Header, Row, HeaderCell, Body, Cell } = Table;

  return(

    <Table striped fixed color='black' key='black'>
      <Header>
        <Row>
          <HeaderCell width={2}>Date</HeaderCell>
          <HeaderCell width={2}>Kcal</HeaderCell>
          <HeaderCell width={3}>Weight</HeaderCell>
          <HeaderCell width={8}>Message from Gym stuff</HeaderCell>
          <HeaderCell width={3}>応援💗</HeaderCell>
          <HeaderCell width={3}>応援数</HeaderCell>
        </Row>
      </Header>
      <Body>
        {renderRow(props)}
      </Body>
    </Table>
  );
}

function renderRight(){

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

function renderChart(){
  //return <ChartData charts = {this.props.gyms} />
}

export default function trainIndex(props) {

    return (
      <Layout>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column  width={10}>
              <h4>Gym Histories</h4>
              {renderChart()}
              {renderTable(props)}
            </Grid.Column>
            <Grid.Column  width={3}>
              <h4>Gym Machines</h4>
              {renderRight()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    )
};

 export async function getStaticProps() {

   const filePath = path.join(process.cwd(), '//pages/train//Rdata.json');
   const jsonData = await fsPromises.readFile(filePath);
   const objectData = JSON.parse(jsonData);

   fsPromises.writeFile("pages/train//Wdata.json", jsonData);

   return {
     props: objectData
   }
 }
