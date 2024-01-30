import "./CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (    
    <a href="#" id="contenedor">
      <div id="CartWidget">
          <div id="icono"> <ShoppingCartIcon/>  </div>          
          <p id="counter">
            <b>4</b> Artículos      
          </p>
      </div>    
    </a>

  )
}

export default CartWidget;