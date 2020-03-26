import React, {
 lazy, memo, ReactElement,
} from 'react';
import LazyLoad from 'components/Lazy/Lazy.component';

interface Options {
    template: 'listing';
}

const withPageConfig = (options: Options) => (
    (Component: any): ReactElement => {
        if (options.template === 'listing') {
            const ListingGrid: any = lazy(() => import('grids/Listings/Listings.component'));
            const Child = memo(Component);
            /* eslint-disable react/jsx-props-no-spreading */
            return (
                <LazyLoad>
                    <ListingGrid {...options}>
                        {Child}
                    </ListingGrid>
                </LazyLoad>
            );
        }
        return Component;
    }
);

export default withPageConfig;
