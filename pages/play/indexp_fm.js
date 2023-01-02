import React, { Component } from "react";
import { Grid, Segment, Container, Header, Divider, Flag } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import styles from '../../style/Image.module.css';
import Image from "next/image";
import fm0105 from "../fm0105.png";

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
            <Header as='h2' color='orange'>家族旅行</Header>
            <p>
            数か月に一度、家族で泊まる<br/>
            <Link route="https://www.seaside.karatsu.saga.jp/">
              <object>
                <a>唐津シーサイドホテル</a>
              </object>
            </Link>
            <br/>
            サウナで整えた後の食事に、幸せを感じます。<br/>
            </p>
            <p>
              松茸と鱧（ハモ）の土瓶蒸し<br/>
            </p>
            <p>
              烏賊（イカ）のお造りと天麩羅（てんぷら）<br/>
            </p>
            <p>
              栄螺（さざえ）の磯風味焼き<br/>
            </p>
            <p>
            ...
            </p>
            <p>
              今度は近くの唐津城にも登ってみようかな<br/>
            </p>
          </Container>
          </Grid.Column>
          <Grid.Column>

                <iframe src="https://www.youtube.com/embed/ktebYRYYutE" title="YouTube video player" width="560" height="315" ></iframe>

          </Grid.Column>

          </Grid.Row>
        </Grid>

      <Divider section />

      </Layout>
    )
  }
};

 export default testIndex;
