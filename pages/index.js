import React, { Component } from "react";
import { Label, Grid, Image, Segment } from "semantic-ui-react";
import Layout from "../Component/Layout";

class testIndex extends Component {
  render() {
    return (
      <Layout>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          home
          </Grid.Column>
          <Grid.Column>
          right
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Layout>
    )
  }
};

 export default testIndex;
