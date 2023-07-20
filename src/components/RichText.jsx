/* eslint-disable react/prop-types */
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// const Bold = ({ children }) => <span className="bold">{children}</span>;

// const Text = ({ children }) => <p className="align-center">{children}</p>;


const options = {
// renderMark: {
//     [MARKS.BOLD]: text => <Bold>{text}</Bold>,
// },
renderNode: {
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-bold my-5">{children}</h3>,
    [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-lg font-bold my-3">{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="text-lg font-bold my-3">{children}</ul>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="text-lg font-bold my-3">{children}</li>
},
renderText: text => text.replace('!', '?'),
};
import React from "react";

const RichText = ({ document }) => {
    return documentToReactComponents(document, options);
};

export default RichText;
