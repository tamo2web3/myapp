import React, { Component } from "react";
import { Grid, Segment, Container, Header, Divider, Flag } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import styles from '../../style/Image.module.css';
import Image from "next/image";
import gr0105 from "../gr0105.png";

class testIndex extends Component {

  render() {
    return (
      <Layout>

      <div className={styles.loop_wrap}>
        <Image src={gr0105} alt="greece" /><Image src={gr0105} alt="greece" />
      </div>

      <Divider section/>

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <Container fluid>
            <Header as='h2' color='teal'>ギリシャ</Header>
            <p>
            　青い海に美しい街並み、絵に描いたような風景。<br/>
            多くの世界遺産と、異なる魅力を持つ美しい島々。<br/>
            エーゲ海の美しい島々
            </p>
            <p>
              青い空と海に白壁の建物が映える街並み<br/>
              <Flag name='gr'/>
              サントリーニ島
            </p>
            <p>
            かわいい街並みと、白い砂浜が魅力的な<br/>
              <Flag name='gr'/>
              サントリーニ島
            </p>
            <p>
            歴史と遺跡も必須でしょ<br/>
              <Flag name='gr'/>
              ロードス島<br/>
            </p>
            <p>
            の前に…横浜行ったら、試してみよう<br/>
              <Link route="https://www.olympiayokohama.com/food">
                <object><a>ギリシャ料理</a></object>
              </Link>
            </p>
          </Container>
          </Grid.Column>
          <Grid.Column>

                <iframe src="https://www.google.com/maps/d/embed?mid=1MWJz5RFg9xqiCfrlmDXz9X9j0EI&hl=en_US&ehbc=2E312F" width="640" height="480"></iframe>

          </Grid.Column>

          </Grid.Row>
        </Grid>

      <Divider section />

      </Layout>
    )
  }
};

 export default testIndex;
