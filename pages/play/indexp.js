import React, { Component } from "react";
import { Label, Grid, Segment, Card, Icon } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import Image from "next/image";
import fm01 from "./fm01.jpg";
import zm01 from "./zm01.png";
import tu04 from "./tu04.png";
import sn04 from "./sn04.png";

class testIndex extends Component {

  render_leftup(){
    return(
      <Card color='orange'>
        <Image src={fm01} alt="family" layout={"intrinsic"} />
        <Card.Content>
          <Card.Header>家族旅行</Card.Header>
          <Card.Meta>
            <span className='date'>年数回のイベント</span>
          </Card.Meta>
          <Card.Description>
            泊まって、話して、寝る<br/>
            美味しい料理を一緒に、ゆっくり過ごす<br/>
            些細な一日に、幸せを感じます。
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link route="/play/indexp_fm">
            <object>
              <a><Icon name='book' />続き．．．</a>
            </object>
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render_rightup(){
    return(
      <Card color='orange'>
        <Image src={zm01} alt="zumba" layout={"intrinsic"} />
        <Card.Content>
          <Card.Header>Zumba(ズンバ)</Card.Header>
          <Card.Meta>
            <span className='date'>楽しく踊って、リフレッシュ</span>
          </Card.Meta>
          <Card.Description>
            世界中に広がっているダンスプログラム<br/>
            180か国、1500万人もいるそうです<br/>
            <br/>
            友人に誘われたのがきっかけで<br/>
            <br/>
            その魅力は、離れられない
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link route="/play/indexp_zm">
            <object>
              <a><Icon name='book' />続き．．．</a>
            </object>
          </Link>
        </Card.Content>
        </Card>
    )
  }

  render_leftdown(){
    return(
      <Card color='orange'>
        <Image src={tu04} alt="tunoshima" layout={"intrinsic"} />
        <Card.Content>
          <Card.Header>個人旅行</Card.Header>
          <Card.Meta>
            <span className='date'>Enjoy　My　Life</span>
          </Card.Meta>
          <Card.Description>
            好きなことの楽しみ方って<br/>
            人それぞれですよね<br/>
            非日常での癒しが、最高の休日
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link route="/play/indexp_tu">
            <object>
              <a><Icon name='book' />続き．．．</a>
            </object>
          </Link>
        </Card.Content>
      </Card>
    );
  }

  render_rightdown(){
    return(
      <Card color='orange'>
        <Image src={sn04} alt="snack" layout={"intrinsic"} />
        <Card.Content>
          <Card.Header>スナックサンド</Card.Header>
          <Card.Meta>
            <span className='date'>ふわふわ柔らかいパンは、お昼の友</span>
          </Card.Meta>
          <Card.Description>
            　常に変化する味・パッケージが嬉しい<br/>
            応援してます、フジパンさん
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link route="/play/indexp_sn">
            <object>
              <a><Icon name='book' />続き．．．</a>
            </object>
          </Link>
        </Card.Content>
      </Card>
    );
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

          <Grid.Column>
            {this.render_leftdown()}
          </Grid.Column>
          <Grid.Column>
            {this.render_rightdown()}
          </Grid.Column>

        </Grid.Row>
      </Grid>
      </Layout>
    )
  }
};

 export default testIndex;
