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

            <p style={{fontSize:"18px", color:"red"}} >2023年のGWは、山口にしよう。～～～～</p>

            <p>
              <div style={{color:"orange"}}>メイン（4/30?）</div>
              <div>&emsp;&emsp;元乃隅稲成神社を訪ねる&emsp;&emsp;⇒角島大橋の絶景を満喫する</div>
            </p>
            <p>
              <div style={{color:"orange"}}>サブ(5/02?)</div>
              <div>&emsp;&emsp;広大な秋吉台をサイクリング&emsp;&emsp;⇒秋芳洞の探検もセットで</div>
            </p>
            <p>
              <div>休憩</div>
              <div>&emsp;&emsp;温泉につかる&emsp;&emsp;⇒温田温泉でほっこりする</div>
            </p>
            <p>
              <div>〆</div>
              <div>&emsp;&emsp;瓦(かわら)の上でそばを焼いた「瓦そば」</div>
            </p>

            <p>
              <Link route="https://matcha-jp.com/jp/7855">
                <object>
                  <a>&emsp;&emsp;旅の計画の参考に（１）</a>
                </object>
              </Link>
            </p>
            <p>
              <Link route="https://nanavi.jp/sightseeing/motonosumiinarijinja/">
                <object>
                  <a>&emsp;&emsp;旅の計画の参考に（２）</a>
                </object>
              </Link>
            </p>

          </Container>
          </Grid.Column>
          <Grid.Column>

            <p>
              <iframe src="https://www.google.com/maps/d/embed?mid=1s09ryTIVqf2yHwwen2ISwuzr1Aw8x1I&ehbc=2E312F" width="640" height="480"></iframe>
            </p>

          </Grid.Column>

          </Grid.Row>
        </Grid>

      <Divider section />

      </Layout>
    )
  }
};

 export default testIndex;
