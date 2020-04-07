export const getColsWidthFromPercentage = (
    columns: Record<string, any>[],
    tableWidth: number,
): Record<string, any>[] => columns.map((column) => ({
        ...column,
        width: Math.floor((tableWidth * parseInt(column.width, 10)) / 100),
    }));

export default {};
