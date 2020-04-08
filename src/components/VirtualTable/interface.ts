import { TableProps } from 'antd/lib/table';

export interface VirtualTableProps<T> extends TableProps<T> {
    rowHeight?: number;
}
