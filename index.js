// main-ag-grid.js
import {Grid} from '@ag-grid-community/all-modules';

// or, if using enterprise features
// import {Grid} from '@ag-grid-enterprise/all-modules'

// specify the columns
var columnDefs = [
  {headerName: "Make", field: "make"},
  {headerName: "Model", field: "model"},
  {headerName: "Price", field: "price"}
];

// specify the data
var rowData = [
  {make: "Toyota", model: "Celica", price: 35000},
  {make: "Ford", model: "Mondeo", price: 32000},
  {make: "Porsche", model: "Boxter", price: 72000}
];

// let the grid know which columns and what data to use
var gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
};

// lookup the container we want the Grid to use
var eGridDiv = document.querySelector('#myGrid');


// create the grid passing in the div to use together with the columns & data we want to use
new Grid(eGridDiv, gridOptions, {modules: [{rowModelType: 'clientSide'}]});

// tried passing modules as a params as well but had no effect
// new Grid(eGridDiv, gridOptions, {modules: [{rowModelType: 'clientSide'}]});
