import { memoize, get } from 'lodash';
import { ReactNode, cloneElement } from 'react';
import ListingTable from 'components/ListingTable/ListingTable.component';

const getComponent = (children: ReactNode): Array<ReactNode> => {
    let Table: ReactNode = null;
    const Filter: ReactNode = null;
    const Search: ReactNode = null;
    if (children && Array.isArray(children) && children.length > 0) {
        children.forEach((child: any): void => {
          const componentType = get(child, 'type', false);
          if (componentType) {
            if (componentType === ListingTable && !Table) {
                Table = cloneElement(child, { ...child.props });
            }
          }
        });
    }
    return [Table, Filter, Search];
};

export default memoize(getComponent);
