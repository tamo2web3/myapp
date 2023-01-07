import React, { Component } from "react";
import { Grid, Segment, Container, Header, Divider, Flag } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import styles from '../../style/Image.module.css';
import Image from "next/image";
import fm0105 from "../../public/fm0205.png";

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
            <Header as='h2' color='orange'>家族旅行（２０２３年始）</Header>
            <p>
            年始から、家族で泊った定宿の<br/>
            <Link route="https://www.seaside.karatsu.saga.jp/">
              <object>
                <a>唐津シーサイドホテル</a>
              </object>
            </Link>
            <br/>
            </p>
            <p>
              白子豆腐、焼きアラ、鴬（うぐいす）菜<br/>
            </p>
            <p>
              車海老、鮪（まぐろ）、切り鯨（くじら）<br/>
            </p>
            <p>
              ロブスター、寿芽揚げ、寿福豆<br/>
            </p>
            <p>
            ...
            </p>
            <p>
              金箔がちりばめられた食事に、今年も頑張ろう！<br/>
              との気持ちがわいてきました<br/>
            </p>
            <p>
              天皇陛下の年始のお言葉から引用（→）<br/>
              本年が皆さんにとって<br/>
              安らかでよいお年になりますように。<br/>
            </p>
          </Container>
          </Grid.Column>
          <Grid.Column>

                <iframe src="https://www.youtube.com/embed/frLHE68KCWQ" title="YouTube video player" width="560" height="315" ></iframe>

          </Grid.Column>

          </Grid.Row>
        </Grid>

      <Divider section />

      </Layout>
    )
  }
};

 export default testIndex;
