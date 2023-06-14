import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { StyledMobileCategoryList } from "./style";
import { StyledContainer } from "../../../styles/grid";

export const MobileCategoryList = ({ categoriesList, setFilter }) => {
  [isOpen, setIsOpen] = useState(false);

  return (
    <StyledMobileCategoryList>
      <div className="MenuBar">
        <StyledContainer>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdMenu size={21} /> : <MdClose size={21} />}
          </button>
        </StyledContainer>
      </div>
      {isOpen ? (
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
      ) : null}
    </StyledMobileCategoryList>
  );
};
