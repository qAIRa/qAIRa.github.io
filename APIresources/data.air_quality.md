---
id: air_qualityMod
title: Air Quality Module
sidebar_label: Air Quality Module
---

The file shows the functions that register and request data related to the Air Quality table.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">air_quality.storeAirQualityData()</Highlight>

GET: lists all measurements in ppb of air quality measurement table.
This is an hourly average measurement.

POST: records processed measurement and valid processed measurement every five seconds

Json input of Air Quality Measurement

>Parameters

* **name** (*string*) - qHAWAX name

* **interval_hours** (*integer*) - the last N hours we want it

#### <Highlight color="#b2e4f7">air_quality.getAirQualityMeasurementsTimePeriod()</Highlight>

Lists all measurements in ppb of air quality measurement table in a defined period of time. This is an hourly average measurement.

>Parameters

* **name** (*string*) - qHAWAX name

* **initial_timestamp** (*timestamp without timezone*) - timestamp day-month-year hour:minute:second (UTC OO)

* **final_timestamp** (*timestamp without timezone*) - timestamp day-month-year hour:minute:second (UTC OO)

#### <Highlight color="#b2e4f7">air_quality.getGasAverageMeasurementsEvery24()</Highlight>

Lists all values by a defined gas or dust in ug/m3 of air quality measurement table of the last 24 hours.

>Parameters

* **qhawax** (*string*) - qHAWAX name

* **gas** (*string*) - gas or dust name (CO,H2S,O3,NO2,SO2,PM25,PM10)

#### <Highlight color="#b2e4f7">air_quality.getAverageValidProcessedMeasurementsTimePeriod()</Highlight>

Lists all average measurements of valid processed measurement table in a defined period of time and company.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

* **initial_timestamp** (*timestamp without timezone*) - timestamp day-month-year hour:minute:second (UTC OO)

* **final_timestamp** (*timestamp without timezone*) - timestamp day-month-year hour:minute:second (UTC OO)
