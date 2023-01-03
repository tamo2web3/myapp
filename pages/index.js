import React, { Component } from "react";
import { Label, Grid, Container } from "semantic-ui-react";
import Layout from "../component/Layout";
import Image from "next/image";
import styles from '../style/Image.module.css';
import fm0105 from "./fm0105.png";
import gr0105 from "./gr0105.png";
import li0105 from "./li0105.png";
import mj0105 from "./mj0105.png";
import re0105 from "./re0105.png";
import tu0105 from "./tu0105.png";
import zm0105 from "./zm0105.png";
import sn0105 from "./sn0105.png";

class homeIndex extends Component {

  renderList(){

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

  render() {
    return (
      <Layout>
            <div className={styles.loop_wrap}>
              {this.renderList()}
              {this.renderList()}
            </div>
      </Layout>
    )
  }
};

 export default homeIndex;
