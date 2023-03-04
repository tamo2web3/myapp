import React, { useState } from "react";
import { Divider, Header, Menu, Dropdown } from "semantic-ui-react";
import { Link } from "../../routes";
import Layout from "../../component/Layout";
import Feed from "../../component/Feed";
import supabase from "../../utils/supabase";
import Image from "next/image";
import cal03a from "./03a.png";
import cal03b from "./03b.png";

async function selectDatabase() {
  const datas = await supabase.from("feed").select("*").order('id', { ascending: true });

    return new Promise(function(callback) {
        setTimeout(function() {
            callback(datas);
        }, 1000);
    });
}

async function insertDatabase (messages, name, icon, color){

  let inday = new Date();
  let created = `${inday.getFullYear()}/${inday.getMonth()+1}/${inday.getDate()} ${inday.getHours()}:${inday.getMinutes()}:${inday.getSeconds()}`

  const params = { messages, name, created, icon, color, }
  let { error } = await supabase.from("feed").insert(params);
}

const UpsState =()=> {

  const icons = [
    { key: 1, value: "coffee" , text: "coffee" },
    { key: 2, value: "plane" , text: "plane" },
    { key: 3, value: "hand peace" , text: "hand peace" },
    { key: 4, value: "comment" , text: "comment" },
  ]

  const colors = [
    { key: 1, value: "teal" , text: "teal" },
    { key: 2, value: "orange" , text: "orange" },
    { key: 3, value: "black" , text: "black" },
    { key: 4, value: "pink" , text: "pink" },
  ]

  const [ msg, setMsg ] = useState("");
  const [ name, setName ] = useState("");
  const onChangeMessage = (e) => { setMsg(e.target.value); }
  const onChangeName = (e) => { setName(e.target.value); }
  const [ icon, setIcon ] = useState("");
  const [ color, setColor ] = useState("");

  const onChangeIcon = (e, data) => {setIcon(data.value); }
  const onChangeColor = (e, data) => {setColor(data.value); }

  const onClickComment = () => {
    if(msg==""){
      alert("コメントの入力をお願いします");
      return;
    }

    insertDatabase(msg, name, icon, color);
    setMsg("");
    setName("");
    document.getElementById("b1").disabled = true;
    return;
  }

  return(
    <div>
      <Menu >
        <Dropdown fluid dropdown
          text="アイコン"
          options={icons}
          onChange={ (e, data) => onChangeIcon(e, data) }
          simple item />
      </Menu>
      <Menu >
        <Dropdown fluid dropdown
          text="カラー"
          options={colors}
          onChange={ (e, data) => onChangeColor(e, data) }
          simple item />
      </Menu>
      <div class="ui form success">
          <div class="field">
            <input type="text" placeholder="お名前" value={name} onChange={onChangeName} />
          </div>
          <div class="field">
            <textarea pink
              placeholder="コメント"
              value={msg}
              onChange={onChangeMessage} />
          </div>
          <p>
            <button class="large pink ui button" onClick={onClickComment} id="b1">　書込む　</button>
          </p>
      </div>
    </div>
  )
}

const FeedState =(feedlist)=> {

  const msg = feedlist.map((item) => {
    return (
      <div class="ui feed" key={item.id}>
        <Feed
          key={item.id}
          color={item.color}
          icon={item.icon}
          dates={item.created}
          user={item.name}
          messages={item.messages}
          linkword="OMIT"
          links="OMIT"
        />
        </div>
    );
  })
  return msg;
}

export default function IndexEvent() {

  const [feedlist, setFeedlist] = useState([]);

  selectDatabase()
  .then(function(value){
      let temp = [...value.data];
     setFeedlist(temp);
  });

  return (
    <Layout>
      <Divider section/>
      <Image src={cal03a} width="300" height="300" alt="photo_calenderA"/>
      <Image src={cal03b} width="300" height="300" alt="photo_calenderB"/>

      <Divider section/>
        {UpsState()}

      <Divider section/>
        <div class="ui feed">
        {FeedState(feedlist)}
        </div>
    </Layout>
  )
};
