import React, { Component } from "react";
import { Grid, Segment, Container, Header, Divider, Flag } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import styles from '../../style/Image.module.css';
import Image from "next/image";
import tu0105 from "../../public/tw0105.png";

class testIndex extends Component {

  render() {
    return (
      <Layout>

      <div className={styles.loop_wrap}>
        <Image src={tu0105} alt="tuno" /><Image src={tu0105} alt="tuno" />
      </div>

      <Divider section/>

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <Container fluid>
            <Header as='h2' color='orange'>個人旅行</Header>
            <p>
            今の自分と、世界の今<br/>
            異世界での旅行を通じて<br/>
            生きていく　喜びを感じています<br/>
            </p>

            <p style={{fontSize:"18px", color:"red"}} >2023年のGWは、台湾にしよう。～～～～</p>

            <p>
              <div style={{color:"orange"}}>＠　台北１０１　＠</div>
              <div>&emsp;&emsp;活気あるショッピングモールで過ごす</div>
            </p>
            <p>
              <div style={{color:"orange"}}>＠　龍山寺　＠</div>
              <div>&emsp;&emsp;パワースポットで運気ＵＰ！</div>
            </p>
            <p>
              <div style={{color:"orange"}}>＠　華山1914文化創意園区　＠</div>
              <div>&emsp;&emsp;リノベーションスポットで一息つく</div>
            </p>
            <p>
              <div style={{color:"orange"}}>＠　行天宮　＠</div>
              <div>&emsp;&emsp;歴史と心の拠り所にふれたい</div>
            </p>
            <p>
              <div style={{color:"orange"}}>＠　淡水　＠</div>
              <div>&emsp;&emsp;東洋のベニスで夕陽をみたい</div>
            </p>
            <p>
              <div style={{color:"orange"}}>＠　北投温泉　＠</div>
              <div>&emsp;&emsp;最後はリラックスして完了</div>
            </p>
          </Container>
          </Grid.Column>
          <Grid.Column>
                <iframe src="https://www.google.com/maps/d/embed?mid=1oiGJnQZqCFvCYLHJY10vrOtUJN6Ds1o&ehbc=2E312F" width="560" height="420"></iframe>
          </Grid.Column>

          </Grid.Row>
        </Grid>

      <Divider section />

      </Layout>
    )
  }
};

 export default testIndex;
