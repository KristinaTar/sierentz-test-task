import React, { useState, useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import popupData from '../data/dataPopupTable';
import { Button } from '@mui/material';
import { Container } from '@mui/system';



const brStyle: React.CSSProperties = {
  border: '1px solid rgba(224, 224, 224, 1)',
  width: '100px',
  textAlign: 'center'
};

const inlineAlign: React.CSSProperties = {
  display: 'inline-block',
  verticalAlign: 'bottom',
};

type Props = {
  closeWindow: () => void;
}

const Popup: React.FC<Props> = ({ closeWindow }) => {
  const [tableData, setTableData] = useState(popupData);
  const [value, setValue] = useState('');
  const date = useMemo(() => {
    const myDate = new Date();
    const d = myDate.getDate();
    const m = myDate.getMonth() + 1;
    const y = myDate.getFullYear();

    const formatDate = (y + "-" + m + "-" + d);
    return formatDate;
  }, []);
  const [user, setUser] = useState('Anna');
  const [comment, setComment] = useState('');

  const addHandler = () => {
    const newObject = {
      value: value,
      created: date,
      name: user,
      comment: comment,
    }

    setTableData([...tableData, newObject]);
  }

  return (
    <>
      <Container style={inlineAlign}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={3} style={brStyle} align="center">value</TableCell>
                <TableCell colSpan={3} style={brStyle} align="center">date</TableCell>
                <TableCell colSpan={3} style={brStyle} align="center">user</TableCell>
                <TableCell colSpan={3} style={brStyle} align="center">comment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((data) => (
                <TableRow key={`${data.value}-${data.created}-${data.name}-${data.comment}`}>
                  <TableCell style={brStyle} colSpan={3} align="center">{data.value}</TableCell>
                  <TableCell style={brStyle} colSpan={3} align="center">{data.created}</TableCell>
                  <TableCell style={brStyle} colSpan={3} align="center">{data.name}</TableCell>
                  <TableCell style={brStyle} colSpan={3} align="center">{data.comment}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell
                  colSpan={3}
                  style={brStyle} align="center"
                >
                  <input value={value} onChange={(e) => { setValue(e.target.value) }} />
                </TableCell>
                <TableCell colSpan={3} style={brStyle} align="center">
                  {date}
                </TableCell>
                <TableCell colSpan={3} style={brStyle} align="center">
                  <select onChange={(e) => { setUser(e.target.value) }}>
                    <option value="Anna">Anna</option>
                    <option value="Roman">Roman</option>
                    <option value="Petro">Petro</option>
                  </select>
                </TableCell>
                <TableCell colSpan={3} style={brStyle} align="center">
                  <input value={comment} onChange={(e) => { setComment(e.target.value) }} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Button
        onClick={addHandler}
      >
        Add
      </Button>
      <Button
        onClick={() => closeWindow()}>
        Close
      </Button>
    </>

  );
}

export default Popup;

