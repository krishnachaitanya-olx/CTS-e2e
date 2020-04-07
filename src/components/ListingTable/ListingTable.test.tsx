import { render } from '@testing-library/react';
import React from 'react';
import ListingTable from './ListingTable.component';

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 200,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 200,
    },
];

describe('ListingTable', () => {
    it('should display the table headers', () => {
        const { container } = render(
            <ListingTable dataSource={dataSource} columns={columns} />,
        );

        const headers = container.getElementsByTagName('th');

        expect(headers.item(0)).toHaveTextContent('Name');
        expect(headers.item(1)).toHaveTextContent('Age');
    });

    it('should render the data source', () => {
        const { getByText } = render(
            <ListingTable dataSource={dataSource} columns={columns} />,
        );

        expect(getByText('Mike')).toBeTruthy();
        expect(getByText('32')).toBeTruthy();
    });
});
