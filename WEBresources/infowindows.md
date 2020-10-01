---
id: infowindows
title: Information Windows
sidebar_label: Information Windows
---

*infowindows.js*

This file shows the functions used to generate the information windows.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">generateGif( inca )</Highlight>

Returns the corresponding qairito.gif for a given inca score value.

>Parameters
>
>* **inca** (*int*) - I.N.C.A. (Indice de Calidad del Aire) score value.

#### <Highlight color="#b2e4f7">infowindowComplete( qhawax, qhawaxSensorColor, qhawaxInca, marker, data )</Highlight>

Generates the information window to be displayed when all given data is complete.

>Parameters
>
>* **qhawax** - ID given to each qhawax.
>* **qhawaxSensorColor** - Color given to each qhawax sensor.
>* **qhawaxInca**  - I.N.C.A. (Indice de Calidad del Aire) score value of the qhawax.
>* **marker**  - Map leaf marker symbol.
>* **data**  - Data to plot to the information window.

#### <Highlight color="#b2e4f7">infowindowPartial ( qhawax, zoneColor, values, marker, colorUV )</Highlight>

Generates the information window to be displayed when the data given is incomplete.

>Parameters
>
>* **qhawax** - ID given to each qhawax.
>* **zoneColor** - Color given to each zone?
>* **values**  - I.N.C.A. (Indice de Calidad del Aire) score value of the qhawax?
>* **marker**  - Map leaf marker symbol.
>* **colorUV**  - Map color due to UV data.