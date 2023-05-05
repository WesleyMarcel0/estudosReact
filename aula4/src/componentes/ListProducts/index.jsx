import{ CardProduct } from '../ListProducts/CardProduct';
import style from './styles.module.css'

export const LListproduct = ({productList, removeProductfromProductList, editProductFromProductList }) => {
    // ternario no JSX: condição ? resposta verdadeira : resposta falsa


    return(

    <>

        {  // o lenght veja se existe algo digitado igual JS
            productList.length > 0 ? (
                <ul className={style.productList}>
                    { productList.map((product) =>{ 

                        return (<CardProduct
                                key={product.id}
                                product = {product}
                                removeProductfromProductList={removeProductfromProductList}
                                editProductFromProductList ={editProductFromProductList}
                            />
                            );

                    } )}  
                </ul>
            ) : (
                <p>Nenhum item Cadastrado...</p>
            )

        }


    </>
    );
};