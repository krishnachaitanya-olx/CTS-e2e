import { ColumnsType } from 'antd/lib/table';

export const mergedColumns = (
  columns: ColumnsType<object> | undefined,
  tableWidth: number,
): ColumnsType<object> => {
  if (columns && Array.isArray(columns) && columns.length > 0) {
    return columns.map(
      (column) => {
        if (column.width) {
          return column;
        }
        const widthColumnCount: number = columns ? columns.filter(({ width }) => !width).length : 1;
        return {
          ...column,
          width: Math.floor(tableWidth / widthColumnCount || 1),
        };
      },
    );
  }
  return [];
};

export default {};
