import{ CardProduct } from '../ListProducts/CardProduct';

export const LListproduct = ({productList}) => {
    return(
        <ul>
            { productList.map(({id, productName,productWeight},index) =>{ 

                return (<CardProduct
                        key={id}
                        productName = {productName} 
                        productWeight= {productWeight} 
                    />
                    );

            } )}  
        </ul>
    );
};