---
id: processed_measurementMod
title: Processed Measurement Module
sidebar_label: Processed Measurement Module
---

The file shows the functions that register and request data related to the Processed Measurement table.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">processed_measurement.getProcessedData()</Highlight>

Lists all measurement of processed measurement table record the last N minutes.

>Parameters

* **name** (*string*) - qHAWAX name

* **interval_minutes** (*integer*) - the last N minutes we want

#### <Highlight color="#b2e4f7">processed_measurement.handleProcessedData()</Highlight>

Records processed measurement and valid processed measurement every five seconds

Json input of following Air Measurement fields:

>Parameters

* **timestamp** (*string*) - timestamp with time zone

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

#### <Highlight color="#b2e4f7">processed_measurement.getAverageProcessedMeasurementsTimePeriod()</Highlight>

Lists all average measurements of processed measurement table in a defined period of time

>Parameters

* **name** (*string*) - qHAWAX name

* **initial_timestamp** (*timestamp without timezone*) - timestamp day-month-year hour:minute:second (UTC OO)

* **final_timestamp** (*timestamp without timezone*) - timestamp day-month-year hour:minute:second (UTC OO)

#### <Highlight color="#b2e4f7">processed_measurement.getProcessedMeasurementsTimePeriod()</Highlight>

Lists all measurements of processed measurement table in a define period of time

>Parameters

* **name** (*string*) - qHAWAX name

* **initial_timestamp** (*timestamp without timezone*) - timestamp day-month-year hour:minute:second (UTC OO)

* **final_timestamp** (*timestamp without timezone*) - timestamp day-month-year hour:minute:second (UTC OO)
