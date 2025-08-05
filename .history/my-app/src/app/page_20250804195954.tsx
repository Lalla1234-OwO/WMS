// src/app/page.tsx
'use client'; // 👈 ต้องใส่ถ้าใช้ useEffect ใน App Router ของ Next.js

import { useEffect, useRef } from 'react';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
} from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler);

export default function Home() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = (chartRef.current as HTMLCanvasElement).getContext('2d');

    new Chart(ctx!, {
      type: 'line',
      data: {
        labels: ['จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.'],
        datasets: [
          {
            label: 'มูลค่าสินค้า',
            data: [10, 20, 15, 30, 25],
            fill: 'origin', // ✅ fill ตรงนี้
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }, []);

  return (
    <main>
      <h1>📊 ร้านแสงดีแคร์ ยินดีต้อนรับ!</h1>
      <canvas ref={chartRef} width="600" height="300" />
    </main>
  );
}
