import {
    memoize,
    get,
    map,
    set,
    random,
} from 'lodash';
import { ReactNode, cloneElement } from 'react';
import { ListingGqlData } from './interfaces';
import ListingSearch from 'components/ListingSearch/ListingSearch.component';
import ListingTable from 'components/ListingTable/ListingTable.component';

const getComponent = (
    childrenProps: ReactNode,
    data: ListingGqlData,
): Array<ReactNode> => {
    let Table: ReactNode = null;
    let Search: ReactNode = null;
    const Sort: ReactNode = null;
    const Filter: ReactNode = null;
    let children = [];
    const edges = map(data.nodes.edges, (obj) => {
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
