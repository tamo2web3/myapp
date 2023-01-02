import React, { Component } from "react";
import { Grid, Segment, Container, Header, Divider, Flag } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import styles from '../../style/Image.module.css';
import Image from "next/image";
import li0105 from "../li0105.png";

class testIndex extends Component {

  render() {
    return (
      <Layout>

      <div className={styles.loop_wrap}>
        <Image src={li0105} alt="lizuqii" /><Image src={li0105} alt="lizuqii" />
      </div>

      <Divider section/>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <Container fluid>
            <Header as='h2' color='teal'>李子柒（リー・ズー・チー）</Header>
            <p>
            世界的インフルエンサー<br/>
            純粋に、素直に、暮らすことの大切さを<br/>
            伝えています。<br/>
            </p>
            <p>
              <Link route="https://is.gd/EBwo2n">
                <object><a>Spring 春之卷：</a></object>
              </Link>
            </p>
            <p>
              <Link route="https://is.gd/i1jJ46">
                <object><a>Summer 夏之卷：</a></object>
              </Link>
            </p>
            <p>
              <Link route="https://is.gd/YBVeL2">
                <object><a>Autumn 秋之卷：</a></object>
              </Link>
            </p>
            <p>
              <Link route="https://is.gd/3JqW8D">
                <object><a>Winter 冬之卷：</a></object>
              </Link>
            </p>
            <p>
            綿陽市で撮影されているそうです。<br/>
            <Link route="https://stworld.jp/feature/CN/kyuusaikou/">
              <object><a>九塞溝</a></object>
            </Link>
            が北にあるし、いつか行ってみたい
            </p>
          </Container>
          </Grid.Column>
          <Grid.Column>

            <iframe src="https://www.youtube.com/embed/YKIXHn3kDL0" title="YouTube video player"　width="560" height="315" ></iframe>

          </Grid.Column>

          </Grid.Row>
        </Grid>

      <Divider section />

      </Layout>
    )
  }
};

 export default testIndex;
