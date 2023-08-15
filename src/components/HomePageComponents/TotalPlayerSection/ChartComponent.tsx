import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import styles from "./ChartComponent.module.css";

const BarChartComponent: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null); // Store chart instance
  const [timePeriod, setTimePeriod] = useState<string>("month");
  const [peakValue, setPeakValue] = useState<number | null>(null);
  const [lowValue, setLowValue] = useState<number | null>(null);

  const handleTimePeriodChange = (period: string) => {
    setTimePeriod(period);

    const currentDate = new Date();
    const labels: string[] = [];
    let dataValues: number[] = [];

    // check chosen period
    if (period === "hour") {
      for (let i = 23; i >= 0; i--) {
        const hour = new Date(currentDate);
        hour.setHours(hour.getHours() - i);
        labels.push(
          hour.toLocaleTimeString("en-US", { hour: "2-digit", hour12: false })
        );
        dataValues.push(Math.floor(Math.random() * 50)); // Replace with actual data
      }
    } else if (period === "day") {
      for (let i = 6; i >= 0; i--) {
        const day = new Date(currentDate);
        day.setDate(day.getDate() - i);
        labels.push(day.toLocaleDateString("en-US", { weekday: "short" }));
        dataValues.push(Math.floor(Math.random() * 50)); // Replace with actual data
      }
    } else if (period === "week") {
      for (let i = 11; i >= 0; i--) {
        const weekStartDate = new Date(currentDate);
        weekStartDate.setDate(weekStartDate.getDate() - i * 7);
        labels.push(
          weekStartDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })
        );
        dataValues.push(Math.floor(Math.random() * 50)); // Replace with actual data
      }
    } else if (period === "month") {
      for (let i = 11; i >= 0; i--) {
        const lastMonth = new Date(currentDate);
        lastMonth.setMonth(lastMonth.getMonth() - i);
        labels.push(lastMonth.toLocaleDateString("en-US", { month: "short" }));
        dataValues.push(Math.floor(Math.random() * 50)); // Replace with actual data
      }
    } else if (period === "year") {
      for (let i = 4; i >= 0; i--) {
        const yearDate = new Date(currentDate);
        yearDate.setFullYear(yearDate.getFullYear() - i);
        labels.push(yearDate.getFullYear().toString());
        dataValues.push(Math.floor(Math.random() * 50)); // Replace with actual data
      }
    } else if (period === "minute") {
      const currentHour = currentDate.getHours();
      for (let i = 59; i >= 0; i--) {
        const minuteDate = new Date(currentDate);
        minuteDate.setHours(currentHour, minuteDate.getMinutes() - i);
        labels.push(
          minuteDate.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
        );
        dataValues.push(Math.floor(Math.random() * 50)); // Replace with actual data
      }
    }

    const peak = Math.max(...dataValues);
    const low = Math.min(...dataValues);

    setPeakValue(peak);
    setLowValue(low);

    if (chartInstanceRef.current) {
      chartInstanceRef.current.data.labels = labels;
      chartInstanceRef.current.data.datasets[0].data = dataValues;
      chartInstanceRef.current.update();
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstanceRef.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: [],
            datasets: [
              {
                label: "Total players in period",
                data: [],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, []);

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartTitle}>Total Players</h2>
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.timePeriodButton} ${
            timePeriod === "minute" ? styles.active : ""
          }`}
          onClick={() => handleTimePeriodChange("minute")}
        >
          Minute
        </button>
        <button
          className={`${styles.timePeriodButton} ${
            timePeriod === "hour" ? styles.active : ""
          }`}
          onClick={() => handleTimePeriodChange("hour")}
        >
          Hour
        </button>
        <button
          className={`${styles.timePeriodButton} ${
            timePeriod === "day" ? styles.active : ""
          }`}
          onClick={() => handleTimePeriodChange("day")}
        >
          Day
        </button>
        <button
          className={`${styles.timePeriodButton} ${
            timePeriod === "week" ? styles.active : ""
          }`}
          onClick={() => handleTimePeriodChange("week")}
        >
          Week
        </button>
        <button
          className={`${styles.timePeriodButton} ${
            timePeriod === "month" ? styles.active : ""
          }`}
          onClick={() => handleTimePeriodChange("month")}
        >
          Month
        </button>
        <button
          className={`${styles.timePeriodButton} ${
            timePeriod === "year" ? styles.active : ""
          }`}
          onClick={() => handleTimePeriodChange("year")}
        >
          All Time
        </button>
      </div>
      <canvas className={styles.canvas} ref={chartRef} />
      <div className={styles.peakLowText}>
        {peakValue !== null && lowValue !== null && (
          <div className={styles.peakLowTextContainer}>
            <p className={styles.peakLowTextItem}>
              Peak: {peakValue}
              <br />
              Low: {lowValue}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BarChartComponent;
