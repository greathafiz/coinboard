import React from "react";

const AboutPage = () => {
  return (
    <div className="about">
      <h1>About CoinBoard</h1>{" "}
      <p>
        CoinBoard is a simple React application that displays live
        cryptocurrency data using the CoinGecko API.
      </p>
      <p>
        You can explore the top cryptocurrencies by market cap, filter by name
        or symbol, and sort them by price, market cap, or 24-hour change.
      </p>
      <p>
        This project is built as part of a React tutorial to help understand
        hooks, components, state management, and integrating with external APIs.
      </p>
      <p>
        🚀 Future features might include detailed coin views, favorites,
        pagination, and much more!
      </p>
    </div>
  );
};

export default AboutPage;
