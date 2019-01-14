import React from "react";
import Helmet from "react-helmet";

const HoldingPage = () => (
  <React.Fragment>
    <Helmet>
      <title>SpaceX Flights</title>
      <link rel="canonical" href="https://www.spacexflights.io/" />
      <meta
        property="description"
        content="The latest information on SpaceX launches, rockets and vehicles"
      />

      {/* Open Graph meta data */}
      <meta property="og:title" content="SpaceX Flights" />
      <meta property="og:url" content={`https://www.spacexflights.io/`} />
      <meta property="og:site_name" content="SpaceX Flights" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="The latest information on SpaceX launches, rockets and vehicles"
      />
      <meta property="og:image" content="" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter meta data */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="Space X Flights" />
      <meta name="twitter:creator" content="@robeasthope" />
    </Helmet>

    <main>
      <h1>SpaceX Flights</h1>
    </main>
  </React.Fragment>
);

export default HoldingPage;
