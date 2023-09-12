
import { useNewsContext } from "../../providers/NewsContext";

export const DesktopCategoryList = ({categoriesList}) => {

  const {setFilter} = useNewsContext();

  return (
    <ul>
      <li>
        <button onClick={() => setFilter("")}>Recentes</button>
      </li>

      {categoriesList.map((category) => (
        <li key={category.id}>
          <button onClick={() => setFilter(category.slug)}>
            {category.label}
          </button>
        </li>
      ))}
    </ul>
  );
};
