import React, { Component } from "react";
import { Grid, Segment, Container, Header, Divider, Flag } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import styles from '../../style/Image.module.css';
import Image from "next/image";
import zm0105 from "../zm0105.png";

class testIndex extends Component {

  render() {
    return (
      <Layout>

      <div className={styles.loop_wrap}>
        <Image src={zm0105} alt="zumba" /><Image src={zm0105} alt="zumba" />
      </div>

      <Divider section/>

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <Container fluid>
            <Header as='h2' color='orange'>Zumba(ズンバ)</Header>
            <p>
            体動かすのが好きな人は、ハマると思います<br/>
            手軽で、お金もかからず、<br/>
            体重も減るから、人気なのかも<br/>
            </p>

            <p>
              <Link route="https://www.youtube.com/channel/UCmzRlnYu2x5l-kmjpF08Hnw">
                <object>
                  <a>Mark Kramer Pastrana</a>
                </object>
              </Link>
            </p>
            <p>
              <Link route="https://www.youtube.com/user/saskiasdansschool">
                <object>
                  <a>Saskia's Dansschool</a>
                </object>
              </Link>
            </p>
            <p>
            <Link route="https://www.youtube.com/user/flurimanka1">
              <object>
                <a>Flurim & Anka</a>
              </object>
            </Link>
            </p>
            <p>
            <Link route="https://www.youtube.com/user/ReFitRev">
              <object>
                <a>REFITREV</a>
              </object>
            </Link>
            </p>
            <p>
            <Link route="https://www.youtube.com/user/patrickchoreo">
              <object>
                <a>Patrick SweatnDance</a>
              </object>
            </Link>
            </p>
            <p>
              芸能人でもハマるひとがいるのだから<br/>
              とても影響力あるのだと思います
            </p>
          </Container>
          </Grid.Column>
          <Grid.Column>

                <iframe src="https://www.youtube.com/embed/w2nQl1cYX5E" title="YouTube video player" width="560" height="315" ></iframe>

          </Grid.Column>

          </Grid.Row>
        </Grid>

      <Divider section />

      </Layout>
    )
  }
};

 export default testIndex;
