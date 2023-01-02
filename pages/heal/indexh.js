import React, { Component } from "react";
import { Label, Grid, Segment, Card, Icon } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import Image from "next/image";
import mj05 from "./mj05.png";
import re02 from "./re02.png";
import gr05 from "./gr05.png";
import li07 from "./li07.png";

class testIndex extends Component {

  render_leftup(){
    return(
      <Card color='teal'>
        <Image src={mj05} alt="mukai" layout={"intrinsic"} />
        <Card.Content>
          <Card.Header>向井潤吉</Card.Header>
          <Card.Meta>
            <span className='date'>こころ癒されます</span>
          </Card.Meta>
          <Card.Description>
            　戦後の高度経済成長で、次第に伝統的家屋が失われていくなか、
            全国を巡り藁葺き屋根の家屋を描き続けられました。<br/>
            昔のゆっくりした時間の過ごし方にあこがれます。
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link route="/heal/indexh_mj">
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
      <Card color='teal'>
        <Image src={re02} alt="renoir" layout={"intrinsic"} />
        <Card.Content>
          <Card.Header>ルノアール</Card.Header>
          <Card.Meta>
            <span className='date'>明るく暮らす気分になれます</span>
          </Card.Meta>
          <Card.Description>
          　楽しいからこそ、絵を描き続けるのです。と語ったルノアール。
            子供、花、美しい情景を描いた、色と光に満ちた作品は、
            がんばって前に歩もうという気持ちにさせてくれます。
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link route="/heal/indexh_re">
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
      <Card color='teal'>
        <Image src={gr05} alt="greece" layout={"intrinsic"} />
        <Card.Content>
          <Card.Header>ギリシャ</Card.Header>
          <Card.Meta>
            <span className='date'>食べ物も美味しそう。。。</span>
          </Card.Meta>
          <Card.Description>
            　色調をみているだけでも、ウキウキします。
            夏場の１～２週間くらいかけて旅行したい国の一つです。
            行き当たりばったりで巡りたい
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link route="/heal/indexh_gr">
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
      <Card color='teal'>
        <Image src={li07} alt="lizuqi" layout={"intrinsic"} />
        <Card.Content>
          <Card.Header>李子柒（リー・ズー・チー）</Card.Header>
          <Card.Meta>
            <span className='date'>できないけど、憧れの暮らし方</span>
          </Card.Meta>
          <Card.Description>
            　家が貧しくて高1で休学して都会に働きに出た女神です。
            旬野菜を採って、鮮やかな料理に仕上げ、おばあちゃんとともに食べる。<br/>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link route="/heal/indexh_li">
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
