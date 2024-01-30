import ListProducts from "../../components/ListProducts/ListProducts"

const HomePage = ({cambioVista}) => {
  return (
    <div>
      <div><ListProducts cambioVista={cambioVista}/></div>
      {/* <div><ListProducts /></div> */}
    </div>
    
  )
}

export default HomePage