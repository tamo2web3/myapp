import React, { Component } from "react";
import { Grid, Segment, Container, Header, Divider, Flag } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import styles from '../../style/Image.module.css';
import Image from "next/image";
import tu0105 from "../../public/tw0105.png";
import tw00 from "./tw00.png";
import tw01 from "./tw01.jpg";
import tw02 from "./tw02.jpg";
import tw03 from "./tw03.jpg";
import tw04 from "./tw04.jpg";
import tw05 from "./tw05.jpg";
import tw06 from "./tw06.jpg";
import tw07 from "./tw07.jpg";
import tw08 from "./tw08.jpg";
import tw09 from "./tw09.jpg";
import tw10 from "./tw10.jpg";
import tw11 from "./tw11.jpg";
import tw12 from "./tw12.jpg";
import tw13 from "./tw13.jpg";
import tw14 from "./tw14.jpg";
import tw15 from "./tw15.jpg";

class testIndex extends Component {

  render() {
    return (
      <Layout>

      <div className={styles.loop_wrap}>
        <Image src={tu0105} alt="tuno" /><Image src={tu0105} alt="tuno" />
      </div>

      <Divider section/>

      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <Container fluid>
            <Header as='h2' color='orange'>個人旅行</Header>
            <p>
            今の自分と、世界の今<br/>
            異世界での旅行を通じて<br/>
            生きていく　喜びを感じています<br/>
            </p>

            <p style={{fontSize:"18px", color:"red"}} >2023年のGWは、台湾にいきました。～～～～</p>

            <p>
              <div style={{color:"orange"}}>台湾観光局のキャンペーン</div>
              <div>&emsp;&emsp;桃園国際空港で抽選したら、</div>
              <div>&emsp;&emsp;NT$5000（約 22,000 円）が当選しました。</div>
              <Image src={tw00} alt="yuyu1" layout={"intrinsic"} />
            </p>

            <p>
              <div style={{color:"orange"}}>＠　中正記念堂　＠</div>
              <div>&emsp;&emsp;快晴・広い・無料</div>
              <div>&emsp;&emsp;海外だから味わえる解放感で気分も高まります</div>
              <Image src={tw01} alt="chusei1" layout={"intrinsic"} />
              <Image src={tw02} alt="chusei2" layout={"intrinsic"} />
              <Image src={tw03} alt="chusei3" layout={"intrinsic"} />
            </p>

            <p>
              <div style={{color:"orange"}}>＠　台北１０１　＠</div>
              <div>&emsp;&emsp;台湾観光行ったら、まずここでしょ！</div>
              <div>&emsp;&emsp;お土産は最終日に買いました。カップラーメンは最低４００円。。</div>
              <Image src={tw04} alt="tp1011" layout={"intrinsic"} />
              <Image src={tw05} alt="tp1012" layout={"intrinsic"} />
              <Image src={tw06} alt="tp1013" layout={"intrinsic"} />
            </p>

            <p>
              <div style={{color:"orange"}}>＠　龍山寺　＠</div>
              <div>&emsp;&emsp;朝早く伺うと、現地の方がたくさんお参りにきてました</div>
              <div>&emsp;&emsp;読経・鐘・木魚…混在した独特の雰囲気</div>
              <div>&emsp;&emsp;不思議と泣きました。。魂を揺さぶられた感覚でした。</div>
              <Image src={tw07} alt="ryu1" layout={"intrinsic"} />
              <Image src={tw08} alt="ryu2" layout={"intrinsic"} />
            </p>

            <p>
              <div style={{color:"orange"}}>＠　華山1914文化創意園区　＠</div>
              <div>&emsp;&emsp;リノベーションスポットです。カフェしました</div>
              <div>&emsp;&emsp;行列が少なくて、安心できました。</div>
              <Image src={tw09} alt="kazan1" layout={"intrinsic"} />
              <Image src={tw10} alt="kazan2" layout={"intrinsic"} />
              <Image src={tw11} alt="kazan3" layout={"intrinsic"} />
            </p>

            <p>
              <div style={{color:"orange"}}>＠　関渡宮　＠</div>
              <div>&emsp;&emsp;金運UPスポット（と現地の方に聞きました）</div>
              <div>&emsp;&emsp;豪華な金装飾、パワー感じる赤…圧倒されましたね</div>
              <div>&emsp;&emsp;さらに、金運ついたかな？　笑</div>
              <Image src={tw12} alt="kazan1" layout={"intrinsic"} />
              <Image src={tw13} alt="kazan2" layout={"intrinsic"} />
              <Image src={tw14} alt="kazan3" layout={"intrinsic"} />
            </p>

          </Container>
          </Grid.Column>
          <Grid.Column>
                <iframe src="https://www.google.com/maps/d/embed?mid=1oiGJnQZqCFvCYLHJY10vrOtUJN6Ds1o&ehbc=2E312F" width="560" height="420"></iframe>
          </Grid.Column>

          </Grid.Row>
        </Grid>

      <Divider section />

      </Layout>
    )
  }
};

 export default testIndex;
