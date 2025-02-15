import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
const SearchBar = () => {
    const{search,setSaerch,showSearch,setShowSeacrh}=useContext(ShopContext)
  
    return showSearch? (
    <div className="border-t border-b bg-gra-50 text-center">
      
    </div>
  ):null
}

export default SearchBar
