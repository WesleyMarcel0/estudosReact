import { Children, createContext } from "react";

export const BookContext = createContext({});

export const BookProvider = ({ children }) =>{
    const[books, setBooks] = useState([]);
    const [searchParams] = useSearchParams();

    console.log(searchParams.get('search'));

    useEffect(() =>{

       async function getBooks(){
/*          const response = await api.get('/books',{
            params:{
                name_like: searchParams.get('search') || ''
            }  
          }); */ // pra APi de verdade usar esse 

           const response = await api // esse ta aqui só porque to sem API

            console.log(response);

    /*      setBooks(response.date); pra APi de verdade usar esse */
            setBooks(response);
        }

        getBooks();
    },[searchParams.get('search')]);


    return(
        <BookContext.Provider value={{}}>
            {children}
        </BookContext.Provider>
    )
}