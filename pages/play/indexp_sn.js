import React, {useState, useEffect} from "react";
import Layout from "../../component/Layout";
import styles from '../../style/Image.module.css';
import supabase from "../../utils/supabase";
import { Grid, Container, Header, Divider, Button, Dropdown, Form, Menu } from "semantic-ui-react";
import Image from "next/image";
import sn0 from "../../public/sn0105.png";
import s01 from "./1.png";
import s02 from "./2.png";
import s03 from "./3.png";
import s04 from "./4.png";
import s05 from "./5.png";
import s06 from "./6.png";
import s07 from "./7.png";
import s08 from "./8.png";
import s09 from "./9.png";
import s11 from "./11.png";
import s12 from "./12.png";
import s15 from "./15.png";
import s16 from "./16.png";
import s17 from "./17.png";
import s18 from "./18.png";

function Ups()
{

  const options = [
    { key: 1, value: 1 , text: "ハムタマゴ" },
    { key: 2, value: 2 , text: "完熟トマト＆とろーりチーズ" },
    { key: 3, value: 3 , text: "エッグ＆チーズ" },
    { key: 4, value: 4 , text: "タマゴ" },
    { key: 5, value: 5 , text: "あまおう苺＆マーガリン" },
    { key: 6, value: 6 , text: "シーチキン®＆タマゴ" },
    { key: 7, value: 7 , text: "ツナ＆マヨ" },
    { key: 8, value: 8 , text: "テリヤキチキン＆マヨ" },
    { key: 9, value: 9 , text: "ナポリタン味" },
    { key: 11, value: 11 , text: "ハム＆マヨ" },
    { key: 12, value: 12 , text: "ビーフカリー" },
    { key: 15, value: 15 , text: "ピーナツ" },
    { key: 16, value: 16 , text: "焼きそば＆マヨ" },
    { key: 17, value: 17 , text: "生チョコ" },
    { key: 18, value: 18 , text: "たまご＆かねふくの明太子入りマヨ" },
  ]

  const [osusume, setOsusume] = useState(50);
  const [want, setWant] = useState(50);
  const [id, setId] = useState(options[0].value);
  const [src, setSrc] = useState(s01);
  const [txt, setTxt] = useState("");
  const [energy, setEnergy] = useState(116);
  const [protein, setProtein] = useState(3.2);
  const [carbohydrates, setCarbohydrates] = useState(16);
  const [fat, setFat] = useState(4.3);
  const [saltEquivalent, setsaltEquivalent] = useState(0.76);
  const [cholesterol, setCholesterol] = useState(6);

  const changeOsusume = (e, { value }) => {setOsusume(value)};
  const changeWant = (e, { value }) => {setWant(value)};
  const changeBal = (e, { value }) => {setBal(value)};
  const onChangeTxt = (e) => { setTxt(e.target.value); }
  const onChangeName = (e, data) => {

    setId(data.value);

    selectDatabase(Number(data.value))
      .then(function(value){
        setEnergy(value.data[0].energy);
        setProtein(value.data[0].protein);
        setCarbohydrates(value.data[0].carbohydrates);
        setFat(value.data[0].fat);
        setsaltEquivalent(value.data[0].saltEquivalent);
        setCholesterol(value.data[0].cholesterol);
      });
    //写真を選択
    if(Number(data.value)==1) { setSrc(s01); }
    else if(Number(data.value)==2) { setSrc(s02); }
    else if(Number(data.value)==3) { setSrc(s03); }
    else if(Number(data.value)==4) { setSrc(s04); }
    else if(Number(data.value)==5) { setSrc(s05); }
    else if(Number(data.value)==6) { setSrc(s06); }
    else if(Number(data.value)==7) { setSrc(s07); }
    else if(Number(data.value)==8) { setSrc(s08); }
    else if(Number(data.value)==9) { setSrc(s09); }
    else if(Number(data.value)==11) { setSrc(s11); }
    else if(Number(data.value)==12) { setSrc(s12); }
    else if(Number(data.value)==15) { setSrc(s15); }
    else if(Number(data.value)==16) { setSrc(s16); }
    else if(Number(data.value)==17) { setSrc(s17); }
    else if(Number(data.value)==18) { setSrc(s18); }
    else{ setSrc(s01); }
  };

  async function selectDatabase(id) {
    const datas = await supabase.from("snack").select("*").eq('id', id);

      return new Promise(function(callback) {
          setTimeout(function() {
              callback(datas);
          }, 1000);
      });
  }


  const onClickVote = () => {

    if(txt==""){
      alert("コメントの入力をお願いします");
      return;
    }

    alert("ご協力、ありがとうございました");

    updateDatabase(id, osusume, want, txt);
    setOsusume(50);
    setWant(50);
    setTxt("");
    document.getElementById("b1").disabled = true;
    return;
  }

  return(
    <Container>
      <Form>

        <Menu >
          <Dropdown fluid dropdown
            text="人気投票にご協力ください"
            options={options}
            onChange={ (e, data) => onChangeName(e, data) }
            simple item />
        </Menu>

        <table class="ui celled structured table">
          <tbody>
            <tr>
              <td rowspan="6" width="30%"><Image src={src} alt="photo_snacksand"/></td>
              <td width="50%">エネルギー[kcal]</td>
              <td width="20%">{energy}</td>
            </tr>
            <tr>
              <td>たんぱく質[g]</td>
              <td>{protein}</td>
            </tr>
            <tr>
              <td>炭水化物[g]</td>
              <td>{carbohydrates}</td>
            </tr>
            <tr>
              <td>脂質[g]</td>
              <td>{fat}</td>
            </tr>
            <tr>
              <td>食塩相当量[g]</td>
              <td>{saltEquivalent}</td>
            </tr>
            <tr>
              <td>コレステロール[mg]</td>
              <td>{cholesterol}</td>
            </tr>
          </tbody>
        </table>

        <table class="ui celled table">
          <tbody>
            <tr>
              <td  width="30%">おすすめ度：{osusume}％</td>
              <td>
                <Form.Input
                  min="20" max="100" step="20" type="range"
                  onChange={changeOsusume}
                  value={osusume} />
              </td>
            </tr>
            <tr>
              <td>食べたい度：{want}％</td>
              <td>
                <Form.Input
                  min="20" max="100" step="20" type="range"
                  onChange={changeWant}
                  value={want}
                />
              </td>
            </tr>
            </tbody>
          </table>

        <div class="ui form success">
          <div class="field">
            <textarea orange
              placeholder="(入力必須)　おすすめのポイントや、召し上がったご感想など　お願いします。"
              value={txt}
              onChange={onChangeTxt} />
          </div>
        </div>

        <p>
          <button class="massive orange ui button" onClick={onClickVote} id="b1">　投票　</button>
        </p>

      </Form>
    </Container>
  );
}

async function selectView() {
  const datas = await supabase.from("snack_view").select("*");

    return new Promise(function(callback) {
        setTimeout(function() {
            callback(datas);
        }, 1000);
    });
}

function Test(){

  const [name1, setName1] = useState();
  const [name2, setName2] = useState();
  const [name3, setName3] = useState();
  const [point1, setPoint1] = useState(0);
  const [point2, setPoint2] = useState(0);
  const [point3, setPoint3] = useState(0);
  const [mail1, setMail1] = useState(0);
  const [mail2, setMail2] = useState(0);
  const [mail3, setMail3] = useState(0);

  let viewvals;
  selectView()
  .then(function(value){
     setName1(value.data[0].name);
     setName2(value.data[1].name);
     setName3(value.data[2].name);
     setPoint1(value.data[0].points);
     setPoint2(value.data[1].points);
     setPoint3(value.data[2].points);
     setMail1(value.data[0].mails);
     setMail2(value.data[1].mails);
     setMail3(value.data[2].mails);

  });

  return(
    <table class="ui celled table">
      <tbody>
        <tr>
          <td width="34%">
            <a class="ui yellow circular label">第1位</a>&emsp;&emsp;{name1}
          </td>
          <td width="33%">
            <a class="ui grey circular label">第2位</a>&emsp;&emsp;{name2}
          </td>
          <td width="33%">
            <a class="ui brown circular label">第3位</a>&emsp;&emsp;{name3}
          </td>
        </tr>
        <tr>
          <td>
            &emsp;&emsp;<Image src={s01} alt="egg_cheese"/><br/>
            &emsp;&emsp;
            <div class="ui labeled button" tabindex="0">
              <div class="ui blue button">
                <i class="heart icon"></i> &nbsp;Point&nbsp;
              </div>
              <a class="ui basic blue left pointing label">
                {point1}
              </a>
            </div>
            <br/><br/>
            &emsp;&emsp;
            <div class="ui labeled button" tabindex="0">
              <div class="ui orange button">
                <i class="mail icon"></i> Message
              </div>
              <a class="ui basic orange left pointing label">
                {mail1}
              </a>
            </div>
          </td>
          <td>
            &emsp;&emsp;<Image src={s03} alt="ham_egg"/><br/>
            &emsp;&emsp;
            <div class="ui labeled button" tabindex="0">
              <div class="ui blue button">
                <i class="heart icon"></i> &nbsp;Point&nbsp;
              </div>
              <a class="ui basic blue left pointing label">
                {point2}
              </a>
            </div>
            <br/><br/>
            &emsp;&emsp;
            <div class="ui labeled button" tabindex="0">
              <div class="ui orange button">
                <i class="mail icon"></i> Message
              </div>
              <a class="ui basic orange left pointing label">
                {mail2}
              </a>
            </div>
          </td>
          <td>
            &emsp;&emsp;<Image src={s17} alt="tomato_cheese"/><br/>
            &emsp;&emsp;
            <div class="ui labeled button" tabindex="0">
              <div class="ui blue button">
                <i class="heart icon"></i> &nbsp;Point&nbsp;
              </div>
              <a class="ui basic blue left pointing label">
                {point3}
              </a>
            </div>
            <br/><br/>
            &emsp;&emsp;
            <div class="ui labeled button" tabindex="0">
              <div class="ui orange button">
                <i class="mail icon"></i> Message
              </div>
              <a class="ui basic orange left pointing label">
                {mail3}
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

async function updateDatabase (id, osusume, want, txt){

  const datas = await supabase.from("snack").select("*").eq('id', id);

  let voteCast = Number(datas.data[0].voteCast) + 1;
  let voteOsusume = Number(datas.data[0].voteOsusume) + Number(osusume);
  let voteWant = Number(datas.data[0].voteWant) + Number(want);

  const updates = {
    id: id,
    voteCast: voteCast,
    voteOsusume: voteOsusume,
    voteWant: voteWant,
  }
  let { error } = await supabase.from('snack').upsert(updates);

  const upserts = {
    keyId: id,
    Comment: txt
  }
  let { error2 } = await supabase.from('snackStat').insert(upserts);
}

export default function mainIndex() {
  return (
    <Layout>
      <div className={styles.loop_wrap}>
        <Image src={sn0} alt="snack" /><Image src={sn0} alt="snack" />
      </div>
      <Divider section/>
      <Header as='h2' invert color='orange'>スナックサンド</Header>
      {Ups()}
      {Test()}
      <Divider section/>
    </Layout>
  )
};
