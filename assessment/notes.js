const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');
const wcwidth = require('wcwidth');

async function decodeSecretMessage(url) {
  const content = await retrieveContent(url)
  const table = parseContent(content)
  const gridData = parseGridData(table)
  printGrid(gridData)
}

function parseContent(htmlString) {
  const { document } = (new JSDOM(htmlString)).window;
  const table = document.querySelector('table');

  if (!table) {
    console.log('Table not found');
    return [];
  }

  const rows = table.querySelectorAll('tr');
  const matrix = [];

  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    const rowArray = Array.from(cells).map(cell => cell.textContent.trim());
    matrix.push(rowArray);
  });

  return matrix;
}

function parseGridData(data) {
  const charMap = new Map();
  const relevantData = data.slice(1);
  let maxX = 0, maxY = 0;
  relevantData.forEach(([x, value, y]) => {
    const xNum = Number(x);
    const yNum = Number(y);
    if (xNum > maxX) maxX = xNum;
    if (yNum > maxY) maxY = yNum;
    charMap.set(`${x},${y}`, value);
  });

  const grid = Array.from({ length: maxY + 1 }, () => Array(maxX + 1).fill(' '));

  charMap.forEach((value, coord) => {
    const [x, y] = coord.split(',').map(Number);
    grid[y][x] = value;
  });

  return grid;
}

function calculateColumnWidths(grid) {
  return grid[0].map((_, colIndex) =>
    Math.max(...grid.map(row => wcwidth(row[colIndex] || '')))
  );
}

function printGrid(grid) {
  const colWidths = calculateColumnWidths(grid);
  grid.forEach(row => {
    const formattedRow = row.map((cell, colIndex) =>
      cell.padEnd(colWidths[colIndex], ' ')
    ).join('');
    console.log(formattedRow);
  });
}

async function retrieveContent(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    } else {
      console.log("Content requested")
    }
    return await response.text();
  } catch (error) {
      console.error('Error fetching the document:', error);
      return '';
  }
}

decodeSecretMessage("https://docs.google.com/document/d/e/2PACX-1vSHesOf9hv2sPOntssYrEdubmMQm8lwjfwv6NPjjmIRYs_FOYXtqrYgjh85jBUebK9swPXh_a5TJ5Kl/pub")// decodeSecretMessage("https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub")



