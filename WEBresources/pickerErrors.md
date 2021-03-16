---
id: pickerErrors
title: Picker Errors
sidebar_label: Picker Errors
---

`pickerErrors.js`

This file shows the functions that return UI selection errors.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">openModalDateAlert()</Highlight>

Returns an error message for an invalid date selected by the user.

#### <Highlight color="#b2e4f7">openModalEmptyAlert()</Highlight>

Returns an error message when user inputs are misssing.
