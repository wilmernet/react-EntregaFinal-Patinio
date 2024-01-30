import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./CategoryButton.css";


const CategoryButton=()=> {

  const [categories, setCategories]=useState([]);
  useEffect(()=>{
    axios("https://fakestoreapi.com/products/categories")
    .then((resp)=>setCategories(resp.data))
    .catch(()=>{alert("Error al cargar las Categorías de la API")});
  },[])

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      
      <Button
        className='CategoryButton'              
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} 
         sx={{
          borderRadius: "15px",
           color: 'white',
           borderColor: "#333",
           border: "solid"
         }}             
      >
        Categorías
      </Button>
      
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {categories.map((category,item)=>{
          return(
            <div key={category}>                            
              <MenuItem onClick={handleClose}><Link to={`/category/${category}`}>{category}</Link></MenuItem>                            
            </div>
          );
        })}        
      </Menu>
    </div>
  );
}

export default CategoryButton;

