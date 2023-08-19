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
