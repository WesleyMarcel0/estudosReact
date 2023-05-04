import {Header} from '../../componentes/comp'
import {Footer} from '../../componentes/foot'

export const DefaultTemplate = ({children}) => { // sempre colocar em letra maiuscula o nome da função

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}