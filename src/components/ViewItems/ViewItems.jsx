import SquareIcon from '@mui/icons-material/Square';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TableRowsIcon from '@mui/icons-material/TableRows';
import {Link} from 'react-router-dom';
import "./ViewItems.css";
import { useState } from 'react';

const ViewItems = ({onCambio}) => {

  const [numButon,setNumButon]= useState(0);

  const cambio=(op)=>{
    setNumButon(op);
    onCambio(numButon);
  }
  console.log(`recibido ${onCambio}`);

  return (
    <div className='ViewItems'>
        <Link to={"/"} onClick={()=>cambio(0)} ><ViewModuleIcon sx={{ color: "white", marginLeft: "40px"}}/></Link>    
        <Link to={"/"} onClick={()=>cambio(1)} ><TableRowsIcon sx={{ color: "white"}}/></Link>   
        <Link to={"/"} onClick={()=>cambio(2)} ><SquareIcon sx={{ color: "white"}}/></Link> 
        <p>{numButon}</p> 
    </div>
  )
}

export default ViewItems