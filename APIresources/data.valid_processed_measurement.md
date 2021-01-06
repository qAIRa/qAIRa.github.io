---
id: valid_processed_measurementMod
title: Valid Processed Measurement Module
sidebar_label: Valid Processed Measurement Module
---

The file shows the functions that register and request data related to the Valid Processed Measurement table.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">valid_processed_measurement.getValidProcessedMeasurementsTimePeriod()</Highlight>

Lists all measurements of valid processed measurement table in a define period of time and company

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

* **initial_timestamp** (*timestamp without timezone*) - timestamp day-month-year hour:minute:second (UTC OO)

* **final_timestamp** (*timestamp without timezone*) - timestamp day-month-year hour:minute:second (UTC OO)


#### <Highlight color="#b2e4f7">valid_processed_measurement.getValidProcessedData()</Highlight>

Lists all measurements of valid processed measurement table record the last N minutes

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

* **interval_minutes** (*integer*) - the last N minutes we want it

#### <Highlight color="#b2e4f7">valid_processed_measurement.getTimeOfValidProcessed()</Highlight>

Gets the time of the last record in valid processed measurement table

If this qHAWAX does not exist, returns []

>Parameters

* **name** (*string*) - qHAWAX name
