---
id: gas_incaMod
title: Gas Inca Module
sidebar_label: Gas Inca Module
---

The file shows the functions that register and request data related to the Gas Inca table.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">gas_inca.handleGasInca()</Highlight>

POST: To record gas and dust measurement in gas Inca table.

Json input of Air Quality Measurement.

>Parameters

* **timestamp_zone** (*string*) - timestamp with time zone

* **CO** (*double*) - value of CO measurement in ppb

* **CO_ug_m3** (*double*) - value of CO measurement in ug/m3

* **H2S** (*double*) - value of H2S measurement in ppb

* **H2S_ug_m3** (*double*) - value of H2S measurement in ug/m3

* **SO2** (*double*) - value of SO2 measurement in ppb

* **SO2_ug_m3** (*double*) - value of SO2 measurement in ug/m3

* **NO2** (*double*) - value of NO2 measurement in ppb

* **NO2_ug_m3** (*double*) - value of NO2 measurement in ug/m3

* **O3** (*double*) - value of O3 measurement in ppb

* **O3_ug_m3** (*double*) - value of O3 measurement in ppb

* **PM25** (*double*) - value of PM25 measurement in ppb

* **PM1** (*double*) - value of PM1 measurement in ppb

* **PM10** (*double*) - value of PM10 measurement in ppb

* **UV** (*double*) - value of UV measurement

* **UVA** (*double*) - value of UVA measurement

* **UVB** (*double*) - value of UVB measurement

* **spl** (*double*) - value of noise measurement

* **humidity** (*double*) - value of humidity measurement

* **pressure** (*double*) - value of pressure measurement

* **temperature** (*double*) - value of temperature measurement in Celsius

#### <Highlight color="#b2e4f7">gas_inca.getLastGasIncaData()</Highlight>

Lists all measurements of the last hour from the gas Inca table.

>No parameters required
