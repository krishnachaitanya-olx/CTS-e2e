/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import Interface from './interfaces';
import settings from 'settings';

const { host } = settings;

const CustomLink: FC<LinkProps & Interface> = ({
 isExternal = false, disabled = false, to, children, ...rest
}: LinkProps & Interface) => {
    if (disabled) {
        return (
            <>{ children }</>
        );
    }
    if (isExternal) {
        return (
            <a href={`${host}${to}`}>
                {children}
            </a>
        );
    }
    return (
        <Link to={to} {...rest}>
            {children}
        </Link>
    );
};

export default CustomLink;
