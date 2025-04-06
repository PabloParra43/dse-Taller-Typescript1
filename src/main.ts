import { series } from './data.js';

const tableBody: HTMLElement = document.getElementById('series-table-body')!;
const averageElement: HTMLElement = document.getElementById('average-seasons')!; 

let totalSeasons = 0;

series.forEach((serie) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${serie.id}</td>
    <td>${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
  tableBody.appendChild(row);
  totalSeasons += serie.seasons; 
});

// Calcular y mostrar el promedio
const averageSeasons = (totalSeasons / series.length).toFixed(0); 
averageElement.textContent = `Promedio de temporadas: ${averageSeasons}`; 