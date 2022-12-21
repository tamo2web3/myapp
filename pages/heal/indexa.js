import React, { Component } from "react";
import { Label, Grid, Image, Segment } from "semantic-ui-react";
import Layout from "../../Component/Layout";

class testIndex extends Component {
  render() {
    return (
      <Layout>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          index1
          </Grid.Column>
          <Grid.Column>
          整える
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Layout>
    )
  }
};

 export default testIndex;
