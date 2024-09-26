const fetch = require('node-fetch')
const { JSDOM } = require('jsdom')
const wcwidth = require('wcwidth')

async function decodeSecretMessage(url) {
  const html = await retrieveHtml(url)
  const coordinatesTable = extractCoordinatesTable(html)
  const coordinatesGrid = buildCoordinatesGrid(coordinatesTable)
  printGrid(coordinatesGrid)
}

async function retrieveHtml(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Resonse status is: ${response.status}`)
    }
    return await response.text()
  } catch (error) {
      console.error('Error fetching the document:', error)
      throw new Error(`Error fetching the document: ${error}`)
    }
}

function extractCoordinatesTable(html) {
  const { document } = (new JSDOM(html)).window
  const rawCoordinatesTable = document.querySelector('table')

  if (!rawCoordinatesTable) {
    new Error('Table with coordinates not found in HTML')
  }

  let coordinatesTable = []
  const rows = rawCoordinatesTable.querySelectorAll('tr')
  rows.forEach(row => {
    const cells = row.querySelectorAll('td')
    const rowValues = Array.from(cells).map(cell => cell.textContent.trim())
    coordinatesTable.push(rowValues)
  });

  // Dropping table headers
  coordinatesTable = coordinatesTable.slice(1)
  return coordinatesTable
}

function buildCoordinatesGrid(coordinatesTable) {
  const coordinatesMap = new Map()
  let maxX = 0, maxY = 0
  coordinatesTable.forEach(([x, value, y]) => {
    const xNum = Number(x)
    const yNum = Number(y)
    if (xNum > maxX) maxX = xNum
    if (yNum > maxY) maxY = yNum
    coordinatesMap.set(`${x},${y}`, value)
  })

  // Create empty GRID
  const coordinatesGrid = Array.from({ length: maxY + 1 }, () => Array(maxX + 1).fill(' '))

  coordinatesMap.forEach((value, coordinates) => {
    const [x, y] = coordinates.split(',').map(Number)
    coordinatesGrid[y][x] = value
  })

  return coordinatesGrid
}

function printGrid(coordinatesGrid) {
  const colWidths = calculateColumnWidths(coordinatesGrid)
  coordinatesGrid.forEach(row => {
    const formattedRow = row.map((cell, colIndex) =>
      cell.padEnd(colWidths[colIndex], ' ')
    ).join('')
    console.log(formattedRow)
  })
}

function calculateColumnWidths(coordinatesGrid) {
  if (coordinatesGrid.length === 0) {
    new Error("Grid must not be empty")
  }

  return coordinatesGrid[0].map((_, colIndex) =>
    Math.max(...coordinatesGrid.map(row => wcwidth(row[colIndex] || '')))
  )
}

decodeSecretMessage("https://docs.google.com/document/d/e/2PACX-1vSHesOf9hv2sPOntssYrEdubmMQm8lwjfwv6NPjjmIRYs_FOYXtqrYgjh85jBUebK9swPXh_a5TJ5Kl/pub")
