import { Box, Typography } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = (props) => {
  const {
    title,
    // color = "primary",
    chartData,
    // ...other
  } = props;

  const options = {
      chart: {
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          // blur: 3,
          // left: 1,
          // top: 1,
          // opacity: 0.1,
        },
      },
      colors: ["#ffcd00"],
      plotOptions: {
        radialBar: {
          // offsetY: 10,
          // startAngle: -150,
          // endAngle: 150,
          hollow: {
            size: "65%",
          },
          track: {
            background: "#ebe9f1",
            strokeWidth: "100%",
          },
          dataLabels: {
            name: {
              show: false,
              fontSize: "1.00rem",
              top: "-1",
            },
            value: {
              color: "#fff",
              fontFamily: "inherit",
              // fontSize: "1.05rem",
              fontSize: "1.86rem",

              fontWeight: "600",
            },
          },
        },
      },

      stroke: {
        lineCap: "round",
      },
      grid: {
        padding: {
          bottom: 0,
        },
      },
    },
    series = [chartData];

  return (
    <div>
      <ReactApexChart
        type="radialBar"
        series={series}
        options={options}
        width={275}
        height={150}
      />
      <Box sx={{ color: "#fff" }}>
        {/* <Typography variant="h4">{total}</Typography> */}
        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginTop: "15px" }}
        >
          {title}
        </Typography>
      </Box>
    </div>
  );
};

export default ApexChart;
