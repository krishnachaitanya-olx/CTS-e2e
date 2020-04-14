/* eslint-disable react/jsx-props-no-spreading */
import {
 Drawer,
} from 'antd';
import { DrawerProps } from 'antd/lib/drawer/index';
import React, { FC, memo } from 'react';
import ListingSidebarInterface from './interfaces';


const ListingSidebar: FC<DrawerProps & ListingSidebarInterface> = ({
    visible = false,
    getContainer,
    data,
    children,
    ...rest
}: DrawerProps & ListingSidebarInterface) => (
    <Drawer
      keyboard
      destroyOnClose
      visible={visible}
      getContainer={getContainer}
      mask={false}
      closable={false}
      {...rest}
    >
      {children}
    </Drawer>
);

export default memo(ListingSidebar);
