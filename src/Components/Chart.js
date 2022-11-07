// import ReactApexChart from "react-apexcharts";

// import { Typography, Box } from "@mui/material";

// // ----------------------------------------------------------------------

// // const RootStyle = styled(Card)(({ theme }) => ({
// //   display: "flex",
// //   position: "relative",
// //   alignItems: "center",
// //   padding: theme.spacing(3),
// //   backgroundColor: theme.palette.primary.darker,
// // }));

// // const IconStyle = styled(Iconify)(({ theme }) => ({
// //   width: 120,
// //   height: 120,
// //   opacity: 0.12,
// //   position: "absolute",
// //   right: theme.spacing(-3),
// //   color: theme.palette.common.white,
// // }));

// // ----------------------------------------------------------------------

// // AppWidget.propTypes = {
// //   chartData: PropTypes.number.isRequired,
// //   color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error']),
// //   icon: PropTypes.string.isRequired,
// //   title: PropTypes.string.isRequired,
// //   total: PropTypes.number.isRequired,
// // };

// export default function AppWidget({
//   title,
//   total,
//   icon,
//   // color = "primary",
//   chartData,
//   ...other
// }) {
//   const chartOptions = {
//     colors: "#fff",
//     chart: { sparkline: { enabled: true } },
//     legend: { show: true },
//     plotOptions: {
//       radialBar: {
//         hollow: { size: "78%" },
//         track: { margin: 0 },
//         dataLabels: {
//           name: { show: true },
//           value: {
//             offsetY: 6,
//             color: "#fff",
//             fontSize: "18px",
//           },
//         },
//       },
//     },
//   };

//   return (
//     <>
//       <ReactApexChart
//         type="radialBar"
//         series={[chartData]}
//         options={chartOptions}
//         width={86}
//         height={86}
//       />
//       <Box sx={{ ml: 3, color: "#fff" }}>
//         <Typography variant="h4">{total}</Typography>
//         <Typography variant="body2" sx={{ opacity: 0.72 }}>
//           {title}
//         </Typography>
//       </Box>
//     </>
//   );
// }
