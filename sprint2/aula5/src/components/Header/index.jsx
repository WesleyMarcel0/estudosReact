import { useOutclick } from "../../hooks/useOutClick"


export const Header = () => {

    const headerRef = useOutclick(({target}) => {
        console.log(target);
    })

    return(



        <header ref={headerRef}>

        <span>Receitas minhas</span>

        </header>
    )
}