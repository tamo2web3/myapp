import React, { Component } from "react";
import { Grid, Segment, Container, Header, Divider, Flag } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import styles from '../../style/Image.module.css';
import Image from "next/image";
import fm0105 from "../../public/fm0305.png";

class testIndex extends Component {

  render() {
    return (
      <Layout>

      <div className={styles.loop_wrap}>
        <Image src={fm0105} alt="family" /><Image src={fm0105} alt="family" />
      </div>

      <Divider section/>

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <Container fluid>
            <Header as='h2' color='orange'>家族旅行（２０２３年４月）</Header>
            <p>
            ＧＷは避けて、４月に家族旅行<br/>
            <Link route="https://m-ashiya.net/index.html">
              <object>
                <a>国民宿舎　マリンテラス芦屋</a>
              </object>
            </Link>
            <br/>
            </p>
            <p>
              季節の饅頭、黒毛和牛しゃぶしゃぶ、海老　真丈<br/>
            </p>
            <p>
              海老芋の玄米揚げ、旬の魚姿造り<br/>
            </p>
            <p>
              季節料理を視覚と味覚で楽しめました<br/>
            </p>
            <p>
            　夕陽も美しく、早朝散歩した先の鳥居もよかった
            </p>
            <p>
              心と体のご褒美に満足な休日でした<br/>
            </p>
          </Container>
          </Grid.Column>
          <Grid.Column>

              <p>
                早朝に帰ったので、次回はここに行こう<br/>
              </p>

                <iframe src="https://www.youtube.com/embed/ZsVxpLaD0zU" title="YouTube video player" width="560" height="315" ></iframe>

          </Grid.Column>

          </Grid.Row>
        </Grid>

      <Divider section />

      </Layout>
    )
  }
};

 export default testIndex;
