---
id: fromJsonToCsv
title: From Json To CSV
sidebar_label: From Json To CSV
---

`fromJsonToCsv.js`

This file shows the functions to turn a .json file to a .csv file and downloads it.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">json2csv( jsonData, jsonFields )</Highlight>

Transforms a .json file to a .csv file.

>Parameters
>
>* **jsonData** (*Json*) - Json file to convert to csv
>
>* **jsonFields** (*string*) - Fields to convert to csv

#### <Highlight color="#b2e4f7">download( content , fileName, mimeType )</Highlight>

Downloads the .csv file created.

>Parameters
>
>* **content** (*Json*) - Json file to convert to csv
>
>* **fileName** (*string*) - The name given to the file to download.
>
>* **mimeType** - mimetype to download.
