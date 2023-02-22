import React, { Component } from "react";
import { Label, Grid, Container, Icon } from "semantic-ui-react";
import { Link } from "../routes";
import Layout from "../component/Layout";
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

      <div class="event">
        <div class="label">
          <Icon name='hand point right outline' color='orange' />
        </div>
        <div class="content">
          <div class="date">
            2023/01/17
          </div>
          <div class="summary">
             We had a delicious and auspicious <u><Link route="/play/indexp_fm2">family trip</Link></u> at the beginning of the year.
          </div>
        </div>
      </div>

        <div class="event">
          <div class="label">
          <Icon name='hand point right outline' color='black' />
          </div>
          <div class="content">
            <div class="date">
              2023/02/17
            </div>
            <div class="summary">
               I was cured of my illness and worked up a nice sweat <u><Link route="/train/indext">at the gym.</Link></u>
            </div>
          </div>
        </div>
        <div class="event">
          <div class="label">
          <Icon name='hand point right outline' color='orange' />
          </div>
          <div class="content">
            <div class="date">
              2023/02/22
            </div>
            <div class="summary">
              I have started a popularity contest for our <u><Link route="/play/indexp_sn">favorite snack sand bread.</Link></u>
            </div>
          </div>
        </div>

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
