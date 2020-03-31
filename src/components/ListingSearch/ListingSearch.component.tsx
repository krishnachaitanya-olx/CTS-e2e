import { Input } from 'antd';
import React, { FC } from 'react';

const { Search } = Input;

const ListingSearch: FC<{}> = () => (
    <Search
      placeholder='input search text'
      onSearch={(value): void => console.log(value)}
      size='large'
    />
);

export default ListingSearch;
