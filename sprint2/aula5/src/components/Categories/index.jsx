import { StyledButton } from "../../style/button";
import { StyledCategoryList } from "./style";

export const Categories = ({ categories, setFilter, filter }) => {
  return (
    <>
      <StyledCategoryList>
        <li>
          <StyledButton
            StyledButton={filter === "" ? "little" : "outline-primary"}
            buttonSize="little"
            onClick={() => setFilter("")}
          >
            Todos
          </StyledButton>
        </li>

        {categories.map((category) => (
          <li key={category.slug}>
            <StyledButton
              StyledButton={filter === category.slug ? "little" : "outline-primary"}
              buttonSize="little"
              onClick={() => setFilter(category.slug)}
            >
              {category.label}
            </StyledButton>
          </li>
        ))}
      </StyledCategoryList>
      {filter ? <p>Categoria:{filter}</p> : null}
    </>
  );
};
