import moment from "moment";
import TableItemDesktop from "../TableItemDesktop/TableItemDesktop";
import { getSymbolType } from "@/src/helpers/getSymbolType";
import { ITransaction } from "@/src/types/transactions";
import { Media } from "@/src/lib/media";
import TableItemMobile from "../TableItemMobile/TableItemMobile";

interface IProps {
  transaction: ITransaction;
  itemBalance: number;
}

const HomeTableItem = ({ transaction, itemBalance }: IProps) => {
  const { _id, date, typeOperation, category, comment, amount } = transaction;

  const operationDate = moment(new Date(date)).format("DD.MM.YYYY");

  return (
    <>
      <Media at="sm">
        <TableItemMobile
          amount={amount}
          comment={comment}
          category={category}
          itemBalance={itemBalance}
          operationDate={operationDate}
          typeOperation={getSymbolType(typeOperation)}
        />
      </Media>

      <Media greaterThan="sm">
        <TableItemDesktop
          amount={amount}
          comment={comment}
          category={category}
          itemBalance={itemBalance}
          operationDate={operationDate}
          typeOperation={getSymbolType(typeOperation)}

          //   ref={lastElement}
          //   isLongAmount={isLongAmount}
          //   isLongBalance={isLongBalance}

          //   isDelete={isDelete}
          //   isOpenMenu={isOpenMenu}
          //   onContextMenu={onContextMenu}
          //   onEdit={() => onEdit(_id)}
          //   onClearId={() => onClearId(_id)}
          //   onDelete={() => onDelete(_id)}
        />
      </Media>
    </>
  );
};

export default HomeTableItem;
