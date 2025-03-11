import React from "react";
import marketTrends from "../utils/marketTrends";

const MarketTrends = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Job Market Trends</h2>
      <ul>
        {marketTrends.map((trend, index) => (
          <li key={index}>
            {trend.title}: {trend.trend}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketTrends;
