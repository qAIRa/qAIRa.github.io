---
id: navBarClient
title: Navigation Bar Client
sidebar_label: Navigation Bar Client
---

`navBarClient.js`

This file shows the function to be used in the creation of the main navigation bar.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">navBarClient( element, display )</Highlight>

Generates the navigation bar.

>Parameters
>
>* **element** (*HTML object*)- HTML5 object for the navigation bar.
>* **display** (*string*)- HTML5 object for the navigation bar.





