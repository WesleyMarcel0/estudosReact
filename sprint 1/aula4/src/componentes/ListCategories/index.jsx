export const ListCategorys = ({categories}) => {
    return(
        <ul>
            {categories.map(({label,slug},index)=> (
                <li key={slug} >
                {label} </li>))} 

      </ul>
    );
};