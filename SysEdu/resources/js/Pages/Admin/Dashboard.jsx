import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import Breadcrumb from "../../Components/Breadcrumbs/Breadcrumb";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const data = {
    labels: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
    ],
    datasets: [
        {
            label: "Số lượng giảng viên",
            data: [44, 41, 45, 39, 33, 43, 36, 38, 38, 30, 40, 55],
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            tension: 0.4,
        },
        {
            label: "Số lượng sinh viên",
            data: [
                700, 500, 1100, 900, 800, 500, 700, 500, 1100, 900, 800, 1200,
            ],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            tension: 0.4,
        },
        {
            label: "Số lượng khoa đào tạo",
            data: [36, 35, 31, 42, 33, 37, 32, 37, 33, 41, 35, 38],
            borderColor: "rgba(255, 159, 64, 50)",
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            tension: 0.4,
        },
        {
            label: "Số lượng lớp học",
            data: [34, 45, 30, 36, 44, 43, 40, 35, 37, 32, 37, 50],
            borderColor: "rgba(75, 192, 192, 100)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.4,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Biểu đồ thống kê",
        },
    },
};

function Dashboard() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed border-t-blue-600 border-b-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h2 className="text-2xl font-bold">Danh sách thống kê</h2>
            <div className="flex flex-col items-start mb-2">
                <Breadcrumb items={[{ label: "Danh sách thống kê" }]} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StatisticCard
                    label="Số lượng giảng viên"
                    value={55}
                    backgroundColor="rgba(255, 99, 132, 0.2)"
                />
                <StatisticCard
                    label="Số lượng sinh viên"
                    value={1200}
                    backgroundColor="rgba(54, 162, 235, 0.2)"
                />
                <StatisticCard
                    label="Số lượng khoa đào tạo"
                    value={38}
                    backgroundColor="rgba(255, 159, 64, 0.2)"
                />
                <StatisticCard
                    label="Số lượng lớp học"
                    value={50}
                    backgroundColor="rgba(75, 192, 192, 0.2)"
                />
            </div>
            <div className="mt-8">
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

function StatisticCard({ label, value, backgroundColor }) {
    return (
        <div
            className="p-4 rounded-lg shadow-md flex justify-between items-center"
            style={{ backgroundColor }}
        >
            <div>
                <h4 className="text-lg font-semibold">{label}</h4>
                <p className="text-2xl font-bold">{value}</p>
            </div>
        </div>
    );
}

export default Dashboard;
