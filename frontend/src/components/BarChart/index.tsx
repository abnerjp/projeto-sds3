import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { round } from "utils/format";
import { BASE_URL } from "utils/requests";


interface Categories {
  categories: string[];
}
interface SeriesData {
  name: string;
  data: number[];
}
interface ChartData {
  labels: Categories;
  series: SeriesData[];
}

const BarChart = () => {

  const [chartData, setChartData] = useState<ChartData>({
    labels: { categories: [] },
    series: [
      {
        name: "",
        data: [],
      },
    ],
  });

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`)
      .then(response => {
        const data = response.data as SaleSuccess[];
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => round(x.deals / x.visited * 100, 1));
        setChartData({
          labels: { categories: myLabels },
          series: [
            {
              name: "% Success",
              data: mySeries,
            },
          ],
        });
      });
  }, []);

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
};

export default BarChart;
