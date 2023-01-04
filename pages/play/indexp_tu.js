import React, { Component } from "react";
import { Grid, Segment, Container, Header, Divider, Flag } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import styles from '../../style/Image.module.css';
import Image from "next/image";
import tu0105 from "../../public/tu0105.png";

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
            <Header as='h2' color='orange'>角島</Header>
            <p>
            海沿いに育った自分にとって、<br/>
            大切で／安心できる居場所<br/>
            藍、青、碧、紺、蒼（アオ）...の海と潮風<br/>
            </p>

            <p>
              角島大橋：エメラルドグリーンからコバルトブルーに変わる海
            </p>

            <p>角島灯台公園：散歩すると、海風が涼しく感じられます
            </p>

            <p>元乃隅神社：大鳥居の賽銭箱に、賽銭を投げてみて、<br/>
            　入ったら、願い事を叶うらしいです。
            </p>

            <p>
            <Link route="https://matcha-jp.com/jp/7855">
              <object>
                <a>旅の計画の参考に（１）</a>
              </object>
            </Link>
            </p>


            <p>
            <Link route="https://nanavi.jp/sightseeing/motonosumiinarijinja/">
              <object>
                <a>旅の計画の参考に（２）</a>
              </object>
            </Link>
            </p>

          </Container>
          </Grid.Column>
          <Grid.Column>

                <iframe src="https://www.youtube.com/embed/maU6ERbUrIg" title="YouTube video player" width="560" height="315" ></iframe>

          </Grid.Column>

          </Grid.Row>
        </Grid>

      <Divider section />

      </Layout>
    )
  }
};

 export default testIndex;
