import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
 return (
  <html lang="en" {...props.htmlAttributes}>
   <head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
     name="viewport"
     content="width=device-width, initial-scale=1.0, user-scalable=no"
    />
    {props.headComponents}
    <link
     rel="stylesheet"
     type="text/css"
     charSet="UTF-8"
     href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
     rel="stylesheet"
     type="text/css"
     href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
   </head>
   <body {...props.bodyAttributes}>
    {props.preBodyComponents}
    <div
     key={`body`}
     id="___gatsby"
     dangerouslySetInnerHTML={{ __html: props.body }}
    />
    {props.postBodyComponents}
   </body>
  </html>
 );
}

HTML.propTypes = {
 htmlAttributes: PropTypes.object,
 headComponents: PropTypes.array,
 bodyAttributes: PropTypes.object,
 preBodyComponents: PropTypes.array,
 body: PropTypes.string,
 postBodyComponents: PropTypes.array,
};
