import { Table as MUITable, TableBody, TableCell, TableHead as MUITableHead, TableHeadProps as MUITableHeadProps, TableProps as MUITableProps, TableRow } from '@mui/material';
import { styled } from '@mui/system';
import { FC } from 'react';
import * as interfaces from './table.interfaces';
const Table = styled(MUITable)<MUITableProps>(() => ({
  backgroundColor: 'aliceblue'
}));
const TableHead = styled(MUITableHead)<MUITableHeadProps>(() => ({
  backgroundColor: 'aliceblue'
}));

export const UITable: FC<interfaces.Table> = ({ columns, data }) => {
  return <Table>
    <TableHead>
      <TableRow>
        {columns.map(c => (<TableCell>{c.label}</TableCell>))}
      </TableRow>
    </TableHead>
    <TableBody>
      
        {
          data.map(d => {
            return  <TableRow>{ columns.map(c => (<TableCell>{d[c.internalName]}</TableCell>))}</TableRow>
          })}
      
    </TableBody>
  </Table>
}
