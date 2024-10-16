import React from 'react';
import StatItem from './StatItem';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


export default function BoxContent() {

  const stats = [
    { title: 'Offre validée', value: '300' },
    { title: 'Offre en attente', value: '150' },
    { title: 'Candidature reçue', value: '200' },
    { title: 'Candidature acceptée', value: '100' },
    { title: 'Cv validée', value: '100' },
  ];

  // Données pour le LineChart
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Offres',
        data: [30, 50, 45, 80, 8, 110, 100, 110, 60, 85, 70, 60], // Exemple de données pour les offres
        borderColor: 'rgba(59, 130, 246, 1)', // Couleur de la ligne
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Couleur de remplissage sous la courbe
        fill: true, // Remplir sous la ligne
        tension: 0.4, // Rend la ligne lisse
      },
      {
        label: 'Candidatures',
        data: [40, 60, 50, 65, 90, 85, 110, 120, 105, 95, 80, 75], // Exemple de données pour les candidatures
        borderColor: 'rgba(153, 102, 255, 1)', // Couleur de la ligne
        backgroundColor: 'rgba(153, 102, 255, 0.2)', // Couleur de remplissage sous la courbe
        fill: true,
        tension: 0.4, // Ligne lisse également
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Masque la grille verticale
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.2)', // Couleur légère pour la grille horizontale
        },
      },
    },
  };


  return (
    <div className="flex w-full flex-col md:flex-row gap-4 h-[420px]">
      {/* Première boîte: 70% de la largeur */}
      <div className="w-full md:w-[70%] bg-gray-50 border border-gray-200 hover:border-blue-200 p-1 rounded-xl h-full">
        <div className="bg-white text-black/80 border rounded-[10px] border-gray-300 p-4 h-full font-bold hover:border-blue-200">
          Histogramme
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>

      {/* Deuxième boîte: 30% de la largeur */}
      <div className="w-full md:w-[30%] bg-gray-50 border border-gray-200 hover:border-blue-200 rounded-xl p-1 h-full">
        <div className="bg-white text-black/80 border rounded-[10px] border-gray-300 p-2 h-full font-bold hover:border-blue-200">

        {stats.map((stat, index) => (
          <div key={index}>
            <StatItem title={stat.title} value={stat.value} />
            {index !== stats.length - 1 && <hr className="border-gray-200" />}
          </div>
        ))}
          
        </div>
      </div>
    </div>
  );
}
