import Container from "../../Layout/Shared/Container/Container";
import CategoreyBox from "./CategoreyBox";
import { categories } from "./categoriesData";

const Categories = () => {
  return (
    <>
      <Container>
        <div className="flex flex-row justify-between items-center gap-2 overflow-x-auto">
          {categories.map((item) => (
            <CategoreyBox
              key={item}
              lable={item.label}
              icon={item.icon}
            ></CategoreyBox>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Categories;
