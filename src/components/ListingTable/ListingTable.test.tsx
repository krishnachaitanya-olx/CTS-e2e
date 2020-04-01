import { render } from '@testing-library/react';
import React from 'react';
import ListingTable from './ListingTable.component';

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
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
        expect(headers.item(2)).toHaveTextContent('Address');
    });

    it('should render the data source', () => {
        const { container } = render(
            <ListingTable dataSource={dataSource} columns={columns} />,
        );

        const row = container.getElementsByTagName('tr').item(2);

        if (row) {
            const tds = row.getElementsByTagName('td');

            expect(tds.item(0)).toHaveTextContent('Mike');
            expect(tds.item(1)).toHaveTextContent('32');
            expect(tds.item(2)).toHaveTextContent('10 Downing Street');
        }
    });
});
