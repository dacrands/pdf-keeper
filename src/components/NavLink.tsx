import React from 'react';
import { Link } from "react-router-dom";
import { FunctionComponent } from 'react';

interface NavLinkProps {
    to: string;
    name: string;
}

const NavLink: FunctionComponent<NavLinkProps> = props => {
    return <Link to={props.to} className={"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>
        {props.name}
    </Link>
}

export default NavLink;