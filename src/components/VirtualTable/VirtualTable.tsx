// import { Table } from 'antd';
// import ResizeObserver from 'rc-resize-observer';
// import React, { memo, useState, FC } from 'react';
// import { mergedColumns } from './utils';

// const VirtalTable: FC<{ className: string }> = ({ className }) => {
//   const [tableWidth, setTableWidth] = useState(0);
//   return (
//       <ResizeObserver
//         onResize={({ width }): void => {
//           setTableWidth(width);
//         }}
//       >
//           <Table
//             className={`virtual-table ${className || ''}`}
//             columns={mergedColumns()}
//             pagination={false}
//             components={{
//               body: renderVirtualList,
//             }}
//           />
//       </ResizeObserver>
//   );
// };

// export default memo(VirtalTable);
