import {
    memoize,
    get,
    set,
    random,
} from 'lodash';
import React, { ReactNode, cloneElement, lazy } from 'react';
import { ListingGqlData } from './interfaces';
import Lazy from 'components/Lazy/Lazy.component';
import ListingSearch from 'components/ListingSearch/ListingSearch.component';
import ListingTable from 'components/ListingTable/ListingTable.component';

const ListingSidebar = lazy(() => import('grids/ListingSidebar/ListingSidebar.component'));
const tableOnRow = {
    onChange: (selectedRowKeys: any, selectedRows: any): void => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};

const getComponent = (
    childrenProps: ReactNode,
    data: ListingGqlData,
): Array<ReactNode> => {
    let Table: ReactNode = null;
    let Search: ReactNode = null;
    const Sort: ReactNode = null;
    const Filter: ReactNode = null;
    let children = [];
    const edges = data.nodes.edges.map((obj) => {
        set(obj, 'key', get(obj, 'id', random(0, 5).toString()));
        return obj;
    });
    if (Array.isArray(childrenProps)) {
        children = childrenProps;
    } else {
        children = [childrenProps];
    }
    if (children && Array.isArray(children) && children.length > 0) {
        children.forEach((child: any): void => {
            const componentType = get(child, 'type', false);
            if (componentType) {
                if (componentType === ListingTable && !Table) {
                    Table = cloneElement(child, {
                        ...child.props,
                        dataSource: edges,
                        id: 'listing-table',
                        rowSelection: tableOnRow,
                        extra: (
                            <Lazy>
                                <ListingSidebar
                                  getContainer='#listing-table'
                                  visible
                                />
                            </Lazy>
                        ),
                    });
                }
                if (componentType === ListingSearch && !Search) {
                    Search = cloneElement(child, {
                        ...child.props,
                    });
                }
            }
        });
    }
    return [Table, Search, Sort, Filter];
};

export default memoize(getComponent);
