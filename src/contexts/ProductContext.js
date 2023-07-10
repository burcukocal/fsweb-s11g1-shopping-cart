import { createContext } from "react";
//import { data } from "./data";

export const ProductContext = createContext();

/*
 const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState(data);
    const {addItem} = useContext(CartContext)
    
    return (
        <ProductContext.Provider value={{ products, addItem }}>
            {children}
        </ProductContext.Provider>
    )
    
}
export default ProductContextProvider;
*/