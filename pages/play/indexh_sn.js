import React, { Component } from "react";
import { Grid, Segment, Container, Header, Divider, Flag } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import styles from '../../style/Image.module.css';
import Image from "next/image";
import r01 from "./1.png";
import r02 from "./2.png";
import r03 from "./3.png";
import sn0105 from "../sn0105.png";

class testIndex extends Component {

  render() {
    return (
      <Layout>

      <div className={styles.loop_wrap}>
        <Image src={sn0105} alt="snack" /><Image src={sn0105} alt="snack" />
      </div>

      <Divider section/>

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <Container fluid>
            <Header as='h2' color='teal'>スナックサンド</Header>
            <p>
            こだわり食パン！どんな味でも具っとチョイス！！<br/>
            ～フジパンさんHPより～<br/>
              </p>
            <p>
            まろやかなタマゴとハムの組み合わせが好き<br/>
            <Image src={r01} />
            </p>
            <p>
            温めた方がピザっぽくなって、ランチにぴったり<br/>
            <Image src={r02} />
            </p>
            <p>
            モッツアレラチーズの主張しすぎない風味<br/>
            <Image src={r03} />
            </p>
          </Container>
          </Grid.Column>
          <Grid.Column>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/Yx_OICbjXUc" title="YouTube video player"></iframe>

          </Grid.Column>

          </Grid.Row>
        </Grid>

      <Divider section />

      </Layout>
    )
  }
};

 export default testIndex;
