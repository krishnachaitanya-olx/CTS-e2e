import {
    get,
    set,
    random,
} from 'lodash';
import React, {
 ReactNode, cloneElement, lazy,
} from 'react';
import { ListingGqlData } from './interfaces';
import Lazy from 'components/Lazy/Lazy.component';
import ListingSearch from 'components/ListingSearch/ListingSearch.component';
import ListingTable from 'components/ListingTable/ListingTable.component';

const getComponent = (
    childrenProps: ReactNode,
    data: ListingGqlData,
    selectedRow: Record<string, any>,
    changeSelectedRow: Function,
    openSidebar: boolean,
    changeSidebarState: Function,
    Sidebar: any,
): Array<ReactNode> => {
    let Table: ReactNode = null;
    let Search: ReactNode = null;
    const Sort: ReactNode = null;
    const Filter: ReactNode = null;
    const ListingSidebar = lazy(() => import('grids/ListingSidebar/ListingSidebar.component'));
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
                        onRow: (record: any): object => (
                            {
                              onClick: (): void => {
                                if (selectedRow.id === record.id) {
                                    changeSidebarState(false);
                                    changeSelectedRow({});
                                } else {
                                    changeSidebarState(true);
                                    changeSelectedRow(record);
                                }
                              }, // click row
                            }
                        ),
                        extra: (
                            <Lazy>
                                <ListingSidebar
                                  getContainer='#listing-table'
                                  visible={openSidebar}
                                  style={openSidebar ? { position: 'absolute', width: '40%' } : {}}
                                  width='100%'
                                  data={selectedRow}
                                >
                                    <Sidebar
                                      data={selectedRow}
                                      openSidebar={changeSidebarState}
                                    />
                                </ListingSidebar>
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

export default getComponent;
