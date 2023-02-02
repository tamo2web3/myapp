import React, { useState, useEffect } from "react";
import { Label, Grid, Image, Segment, Item, Form, Button, Table, Icon } from "semantic-ui-react";
import Layout from "../../component/Layout";
import supabase from "../../utils/supabase";

function RenderRows(){
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    fetchTodos()
  }, [gyms])

  const fetchTodos = async () => {
    const datas = await supabase.from("gymtrain").select("*").order('date', { ascending: false });
    setGyms(datas.data)
  }

  const { Row, Cell } = Table;

  const outgyms = gyms.map((gym, index) => {
    return (
      <Row key={gym.id}>
        <Cell>{gym.date}</Cell>
        <Cell>{gym.kcal}</Cell>
        <Cell>{gym.weight}</Cell>
        <Cell>{gym.message}</Cell>
        <Cell>
          <Button onClick={() => onClickMessage(gym.id, gym.yellcount)} icon>
            <Icon name='like' color='red' />
          </Button>
        </Cell>
        <Cell>{gym.yellcount}</Cell>
      </Row>
    );
  });

  return outgyms;
}

async function onClickMessage (gymId, gymYellcount){

  const updates = {
    id: gymId,
    yellcount: gymYellcount +1,
  }

  let { error } = await supabase.from('gymtrain').upsert(updates)

}

function RenderLeft(){

  const { Header, Row, HeaderCell, Body } = Table;

  return(

    <Table striped fixed color='black' key='black'>
      <Header>
        <Row>
          <HeaderCell width={4}>Date</HeaderCell>
          <HeaderCell width={2}>Kcal</HeaderCell>
          <HeaderCell width={3}>Weight</HeaderCell>
          <HeaderCell width={7}>Message from Gym stuff</HeaderCell>
          <HeaderCell width={3}>応援💗</HeaderCell>
          <HeaderCell width={3}>応援数</HeaderCell>
        </Row>
      </Header>
      <Body>
        {RenderRows()}
      </Body>
    </Table>
  );
}

function RenderRight(){

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

export default function TrainIndex() {
    return (
      <Layout>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column  width={10}>
              <h4>Gym Histories</h4>
              {RenderLeft()}
            </Grid.Column>
            <Grid.Column  width={3}>
              <h4>Gym Machines</h4>
              {RenderRight()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    )
};
