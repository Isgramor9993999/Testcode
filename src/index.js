import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, lastName, age) {
  return { name, lastName, age };
}


const rows = [
  createData('Frozen', 'alez', 24, ),
  createData('Frozen', 'alez', 24, ),
  createData('Frozen', 'alez', 24, ),
  createData('Frozen', 'alez', 24, ),
  createData('Frozen', 'alez', 24, ),
];

const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
    { id: 'lastName', numeric: true, disablePadding: false, label: 'Calories' },
    { id: 'age', numeric: true, disablePadding: false, label: 'Fat (g)' },
  ];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Age</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
