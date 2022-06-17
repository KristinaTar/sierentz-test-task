import * as React from 'react';
import ReactDOM, { createPortal } from "react-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import untypedData from '../data/dataMainTable';
import Popup from '../Popup';
import parseObject from '../data/parseObject';
import { Container } from '@mui/system';

const keys = parseObject(untypedData);

const regionKeys = [...keys[0]] as const;
const yearKeys = [...keys[2]] as const;
const yearPropsKeys = [...keys[3]] as const;

type RegionKeys = typeof regionKeys[number];
type YearKeys = typeof yearKeys[number];
type YearPropsKeys = typeof yearPropsKeys[number];

type Data = { [Key in RegionKeys]: {
  G: {
    [Key in YearKeys]?: {
      [Key in YearPropsKeys]?: {
        value?: number,
        dateRelease?: string,
      }
    }
  }
}
};

const data: Data = untypedData;
const brStyle = { borderRight: '1px solid rgba(224, 224, 224, 1)' };

function openPopup() {
  const newWindow = window.open('', '', 'width=700,height=600,left=200,top=200');

  if (newWindow) {
    ReactDOM.render(
      [<Popup closeWindow={() => newWindow.close()} /> as React.ReactElement],
      newWindow.document.body.appendChild(document.createElement("DIV"))
    )
  }
}

const rowsData: JSX.Element[] = [];
for (let i = 0; i < regionKeys.length; i++) {
  const regionData = data[regionKeys[i]];
  const innerRowData: JSX.Element[] = [];
  innerRowData.push(
    <TableCell
      style={brStyle}
      align="center"
      key={regionKeys[i]}
    >
      {regionKeys[i]}
    </TableCell>
  );

  for (let j = 0; j < yearKeys.length; j++) {
    const yearData = regionData.G[yearKeys[j]];

    for (let k = 0; k < yearPropsKeys.length; k++) {
      const propsData = yearData && yearData[yearPropsKeys[k]];
      const value = propsData?.value;
      innerRowData.push(
        <TableCell
          style={brStyle}
          align="center"
          key={`${regionKeys[i]}-${yearKeys[j]}-${yearPropsKeys[k]}`}
          onClick={() => {
            if (propsData?.value) {
              openPopup();
            }
          }}
        >
          {value}
        </TableCell>
      )

    }
  }

  rowsData.push(<TableRow key={`${regionKeys[i]}-row`}>{innerRowData}</TableRow>)
}

const TableBasic: React.FC = () => {
  return (
    <Container style={{padding: '100px'}}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell rowSpan={2} style={brStyle}>regions</TableCell>
              {yearKeys.map(year =>
                <TableCell
                  colSpan={yearPropsKeys.length}
                  style={brStyle}
                  align="center"
                  key={year}
                >
                  {year}
                </TableCell>
              )}
            </TableRow>
            <TableRow>
              {
                new Array(yearKeys.length)
                  .fill(yearPropsKeys.map((propsKey, i) =>
                    <TableCell
                      style={brStyle}
                      align="center"
                      key={`${propsKey}-${i}`}
                    >
                      {propsKey}
                    </TableCell>
                  ))
              }
            </TableRow>

            {rowsData}

          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableBasic;