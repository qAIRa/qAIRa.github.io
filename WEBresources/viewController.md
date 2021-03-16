---
id: viewController
title: View Controller
sidebar_label: View Controller
---

`viewController.js`

This file shows the functions to turn a .json file to a .csv file and downloads it.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">changeView( router )</Highlight>

Changes the current view for a given router value.

>Parameters
>
>* **router** (*string*) - Selector variable.

#### <Highlight color="#b2e4f7">goTo( location )</Highlight>

Router for the URLs.

>Parameters
>
>* **location** (*string*) - Selector variable
