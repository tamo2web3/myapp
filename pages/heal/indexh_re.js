import React, { Component } from "react";
import { Grid, Segment, Container, Header, Divider } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import styles from '../../style/Image.module.css';
import Image from "next/image";
import re0105 from "../re0105.png";

class testIndex extends Component {

  render() {
    return (
      <Layout>

      <div className={styles.loop_wrap}>
        <Image src={re0105} alt="renoir" /><Image src={re0105} alt="renoir" />
      </div>

      <Divider section/>

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <Container fluid>
            <Header as='h2' color='teal'>ルノアール</Header>
            <p>
              印象派の代表画家、ルノアール。<br/>
              当時のパリに住む人々を、印象派の明るいタッチで描いた<br/>
              　ムーラン・ド・ラ・ギャレット
            </p>
            <p>
              少女の上品な顔立ちと、印象的な瞳、清潔感ある衣服<br/>
              　イレーヌ・カーン・ダンヴェール嬢の肖像
            </p>
            <p>
              華やかさに彩られた印象派の世界観<br/>
              普段の日常を切り取っただけかもしれないけど<br/>
              生き生きと暮らすヒントがあると感じます
            </p>
            <p>
              <Link route="https://www.louvre.fr/en">
                <object><a>ルーブル美術館</a></object>
              </Link>
              で見てみたい。
            </p>
          </Container>
          </Grid.Column>
          <Grid.Column>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.874101278919!2d2.337644!3d48.8606111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sLouvre%20Museum!5e0!3m2!1sen!2sjp!4v1672234964827!5m2!1sen!2sjp" width="600" height="450"></iframe>

          </Grid.Column>

          </Grid.Row>
        </Grid>

      <Divider section />

      </Layout>
    )
  }
};

 export default testIndex;
