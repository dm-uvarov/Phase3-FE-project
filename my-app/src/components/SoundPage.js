import React from "react";
import { Button, Image, List, Container, Grid } from "semantic-ui-react";
import SoundCollection from "./SoundCollection";

function SoundPage({ categoryTest }) {
  return (
    <Container>
      <Grid centered={true}>
        <Grid.Row style={{ marginBottom: "50px" }}>
          <Grid.Column width={8}>
            <h1>Sound Equipment</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <SoundCollection categoryTest={categoryTest} />
    </Container>
  );
}

export default SoundPage;
