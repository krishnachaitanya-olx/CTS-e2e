/* eslint-disable react/jsx-props-no-spreading */
import { Button, Col } from 'antd';
import { ButtonProps } from 'antd/lib/button/index';
import React, { FC, memo } from 'react';
import CustomButtonProps from './interfaces';

const CustomButton: FC<ButtonProps & CustomButtonProps> = ({ col, ...rest }) => (
    <Col {...col}>
        <Button
          {...rest}
        />
    </Col>
);

export default memo(CustomButton);
