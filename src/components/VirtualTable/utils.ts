import { MergedColumnInterface } from './interfaces';

export const mergedColumns = ({
  columns,
  tableWidth,
  widthColumnCount,
}: MergedColumnInterface): any => columns.map(
  (column) => {
    if (column.width) {
      return column;
    }

    return {
      ...column,
      width: Math.floor(tableWidth / widthColumnCount),
    };
  },
);

export default {};
