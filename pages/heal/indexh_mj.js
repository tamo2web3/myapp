import React, { Component } from "react";
import { Grid, Segment, Container, Header, Divider } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import styles from '../../style/Image.module.css';
import Image from "next/image";
import mj0105 from "../mj0105.png";

class testIndex extends Component {

  render() {
    return (
      <Layout>

      <div className={styles.loop_wrap}>
        <Image src={mj0105} alt="mukai" /><Image src={mj0105} alt="mukai" />
      </div>

      <Divider section/>

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <Container fluid>
            <Header as='h2' color='teal'>向井  潤吉</Header>
            <p>
              1901年　京都生まれ。若いころにフランスに留学して、<br/>
              美術館に通いながら、絵画を勉強したそうです。<br/>
            </p>
            <p>
              戦争末期、戦火の中で失われていく美しい民家を<br/>
              絵に残したいとの意思が次第に芽生え、<br/>
              戦後、民家をテーマとして活動されました。<br/>
            </p>
            <p>
              ノスタルジックだけど、温かみのある作風<br/>
              素朴だけど、生命力が感じられる色彩<br/>
              穏やかに暮らすことの大切さを感じます。
            </p>
            <p>
              <Link route="https://www.setagayaartmuseum.or.jp/annex/mukai/">
                <object><a>アトリエ@世田谷</a></object>
              </Link>
              に、いつか行こうと思っています。<br/>
              近くには美味しいパン屋さんも多いし...
            </p>
          </Container>
          </Grid.Column>
          <Grid.Column>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12970.718126694015!2d139.6392271078125!3d35.6356261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f48420960a05%3A0x8f13b2c06f2abc81!2z5ZCR5LqV5r2k5ZCJ44Ki44OI44Oq44Ko6aSo!5e0!3m2!1sja!2sjp!4v1672169116225!5m2!1sja!2sjp" width="450" height="338"></iframe>

          </Grid.Column>

          </Grid.Row>
        </Grid>

      <Divider section />

      </Layout>
    )
  }
};

 export default testIndex;
