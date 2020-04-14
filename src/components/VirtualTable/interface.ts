import { TableProps } from 'antd/lib/table';
import { ReactNode } from 'react';

export interface VirtualTableProps<T> extends TableProps<T> {
    rowHeight?: number;
    extra: ReactNode;
}
