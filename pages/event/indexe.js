import React, { Component } from "react";
import { Grid, Card, Icon } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import Image from "next/image";
import rr01 from "./rr01.png";
import rr02 from "./rr02.png";

class testIndex extends Component {

  render_leftup(){
    return(
      <Card color='pink'>
        <Image src={rr01} alt="hotel" layout={"intrinsic"} />
        <Card.Content>
          <Card.Header>Ticket</Card.Header>
          <Card.Meta>
            <span className='date'>リーガロイヤル小倉、 鉄板焼 なにわ</span>
          </Card.Meta>
          <Card.Description>
            　チケット当選したので（2.6万円相当）<br/>
            <br/>
            どなたかご一緒に（女性1名、2/末まで）<br/>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link route="https://www.rihga.co.jp/kokura">
            <object>
              <a><Icon name='book' />ホテル場所です</a>
            </object>
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render_rightup(){
    return(
      <Card color='pink'>
        <Image src={rr02} alt="cource" layout={"intrinsic"} />
        <Card.Content>
          <Card.Header>Ticket（追加情報）</Card.Header>
          <Card.Meta>
            <span className='date'>Dinnerコース：景～けしき～</span>
          </Card.Meta>
          <Card.Description>
          　ランチにもできるとのこと<br/>
          <br/>
          でも一人では、使えない　泣。。。<br/>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link route="https://www.rihga.co.jp/kokura/restaurant/list/teppanyaki/menu/dinner/">
            <object>
              <a><Icon name='book' />ディナー内容です</a>
            </object>
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <Layout>

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            {this.render_leftup()}
          </Grid.Column>
          <Grid.Column>
            {this.render_rightup()}
          </Grid.Column>

        </Grid.Row>
      </Grid>
      </Layout>
    )
  }
};

 export default testIndex;
