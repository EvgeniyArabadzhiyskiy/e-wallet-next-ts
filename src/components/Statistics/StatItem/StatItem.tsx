import { Box } from "../../Box/Box";
import { ColorSpan, TableItem } from "./StatItem.styled";

interface IProps {
  categoryColor: string;
  totalSum: number;
  id: string | number;
}

function StatItem({ categoryColor, totalSum, id }: IProps) {
  return (
    <TableItem>
      <Box display="flex">
        <ColorSpan category={categoryColor} />
        <span>{id}</span>
      </Box>
      <p>{totalSum}</p>
    </TableItem>
  );
}

export default StatItem;

//======================================================
// import stl from "./StatItem.module.scss"

// interface IProps {
//   categoryColor: string;
//   totalSum: number;
//   id: string | number;
// }

// function StatItem({ categoryColor, totalSum, id }: IProps) {
//   console.log("Client Item");
  
//   return (
//     <li className={stl.table__item}>
//       <div className={stl.wrapper}>
//         <span style={{backgroundColor: categoryColor}} className={stl.color__text}  />
//         <span>{id}</span>
//       </div>
//       <p>{totalSum}</p>
//     </li>
//   );
// }

// export default StatItem;
