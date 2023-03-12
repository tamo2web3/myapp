import React, { Component } from "react";
import { Label, Grid, Container, Icon } from "semantic-ui-react";
import { Link } from "../routes";
import Layout from "../component/Layout";
import Feed from "../component/Feed";
import Image from "next/image";
import styles from '../style/Image.module.css';
import fm0105 from "../public/fm0105.png";
import gr0105 from "../public/gr0105.png";
import li0105 from "../public/li0105.png";
import mj0105 from "../public/mj0105.png";
import re0105 from "../public/re0105.png";
import tu0105 from "../public/tu0105.png";
import zm0105 from "../public/zm0105.png";
import sn0105 from "../public/sn0105.png";

function renderList(){

    let dt = new Date();
    let sc = dt.getSeconds();
    let adr = "";

    if (sc < 7.5) {
      adr = fm0105;
    } else if(sc <15){
      adr = gr0105;
    } else if(sc <22.5){
      adr = li0105;
    } else if(sc <30){
      adr = mj0105;
    } else if(sc <37.5){
      adr = re0105;
    } else if(sc <45){
      adr = tu0105;
    } else if(sc <52.5){
      adr = zm0105;
    } else if(sc <60){
      adr = sn0105;
    }

    return(
      <Image src={adr} alt="image of indeces"/>
    );
  }

  function renderDown() {
    return (
      <div class="ui feed">
        <br/>
        <Feed
          color="orange"
          icon="plane"
          dates="2023/01/17"
          messages="At the beginning of the year, We had a delicious and auspicious "
          linkword="family trip"
          links="/play/indexp_fm2"
        />

        <br/>
        <Feed
          color="black"
          icon="hand peace outline"
          dates="2023/02/17"
          messages="I was cured of my illness and worked up a nice sweat "
          linkword="at the gym."
          links="/train/indext"
        />

        <br/>
        <Feed
          color="orange"
          dates="2023/02/22"
          icon="coffee"
          messages="I have started a popularity contest for our "
          linkword="favorite snack sand bread."
          links="/play/indexp_sn"
        />
        <br/>
        <Feed
          color="orange"
          dates="2023/03/12"
          icon="calendar alternate outline"
          messages="I have made plans for "
          linkword="Golden Week 2023."
          links="/play/indexp_tu"
        />
      </div>
    )
  }

export default function homeIndex() {

    return (
      <Layout>
        <div className={styles.loop_wrap}>
          {renderList()}
          {renderList()}
        </div>
        {renderDown()}
      </Layout>
    )
};
