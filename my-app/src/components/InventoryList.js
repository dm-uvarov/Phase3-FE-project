import React from "react";
import { Card, Grid } from "semantic-ui-react";

function InventoryList() {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Card
            centered={true}
            href="#card-example-link-card"
            header="Sound"
            description="View Sound equipment"
          />
        </Grid.Column>
        <Grid.Column>
          <Card
            centered={true}
            href="#card-example-link-card"
            header="Lighting"
            description="View Lighting equipment"
          />
        </Grid.Column>
        <Grid.Column>
          <Card
            centered={true}
            href="#card-example-link-card"
            header="Decorations"
            description="View Decorations"
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Card
            centered={true}
            href="#card-example-link-card"
            header="Furniture"
            description="View Furniture"
          />
        </Grid.Column>
        <Grid.Column>
          <Card
            centered={true}
            href="#card-example-link-card"
            header="Games"
            description="View Game Equipment"
          />
        </Grid.Column>
        <Grid.Column>
          <Card
            centered={true}
            href="#card-example-link-card"
            header="Clean Up"
            description="View Clean Up supplies"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    // <Card
    //   centered={true}
    //   href="#card-example-link-card"
    //   header="Sound"
    //   description="View Sound equipment"
    // />
  );
}

export default InventoryList;