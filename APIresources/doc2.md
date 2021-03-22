---
id: doc2
title: Data Module
sidebar_label: Data
---

### Air Daily Quality

This file shows all the daily data queries.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">air_daily_quality.storeAirDailyData()</Highlight>

Air Daily Measurement function to record daily average measurement

>Parameters

* **data_jason** (*json*) - json of daily average measurement

#### <Highlight color="#b2e4f7">air_daily_quality.getAirDailyMeasurementsTimePeriod()</Highlight>

Air Daily Measurement function to get daily average measurement based on week number and year

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

* **init_week** (*integer*) - initial week number

* **init_year** (*integer*) - initial year

* **end_week** (*integer*) - last week number

* **end_year** (*integer*) - end year

---
### Air Quality

This file shows all the ...

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

---
### Gas Inca

This file shows all the...

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

---
### Get Data Helper

This file shows all the..

#### <Highlight color="#b2e4f7">get_data_helper.getQhawaxMode(qhawax_id)</Highlight>

Helper Processed Measurement function to get the qHAWAX mode.

> Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">get_data_helper.getComercialName(qhawax_id)</Highlight>

Helper Processed Measurement function to get the qHAWAX commercial name.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">get_data_helper.queryDBAirQuality(qhawax_name, initial_timestamp, final_timestamp)</Highlight>

Helper function to get the measurement records from a specific qHAWAX in a defined period of time

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

* **initial_timestamp** (*timestamp with time zone*) - initial date with timezone

* **final_timestamp** (*timestamp with time zone*) - final date with time

#### <Highlight color="#b2e4f7">get_data_helper.getTimeQhawaxHistory(installation_id)</Highlight>

Helper function to get the last dates in which a qHAWAX has been turned on and turned off.

>Parameters

* **installation_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">get_data_helper.queryDBGasAverageMeasurement(qhawax_name, gas_name, values_list)</Highlight>

Helper function to get gas average measurement.

>Parameters

* **qhawax_name** (*string*) - qHAWAX gas name

* **gas_name** (*string*) - gas or dust gas name

* **values_list** (*array*) - array of last time on and last time registration.

#### <Highlight color="#b2e4f7">get_data_helper.queryDBValidAirQuality(qhawax_id, initial_timestamp, final_timestamp)</Highlight>

Helper function to get Air Quality measurement.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

* **initial_timestamp** (*timestamp with time zone*) - initial date with time

* **final_timestamp** (*timestamp with time zone*) - final date with time

#### <Highlight color="#b2e4f7">get_data_helper.queryDBGasInca(initial_timestamp, final_timestamp)</Highlight>

Helper function to get GAS INCA measurement.

>Parameters

* **initial_timestamp** (*timestamp with time zone*) - initial date with time

* **final_timestamp** (*timestamp with time zone*) - final date with time

#### <Highlight color="#b2e4f7">get_data_helper.queryDBProcessed(qhawax_name, initial_timestamp, final_timestamp,date_format)</Highlight>

Helper function to get Processed Measurement data based on qHAWAX name.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

* **initial_timestamp** (*timestamp with time zone*) - initial timestamp of search

* **final_timestamp** (*timestamp with time zone*) - final timestamp of search

* **date_format** (*string*) - timestamp format

#### <Highlight color="#b2e4f7">get_data_helper.getNoiseData(qhawax_name)</Highlight>

Helper Processed Measurement function to get Noise Area Description.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">get_data_helper.getHoursDifference(qhawax_id)</Highlight>

Helper Processed Measurement function to get difference between **last_registration_time** and **last_time_physically_turn_on**.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">get_data_helper.queryDBValidProcessedByQhawaxScript(qhawax_id, initial_timestamp, final_timestamp)</Highlight>

Helper function to get Valid Processed Measurement data based on qHAWAX ID.

> Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

* **initial_timestamp** (*timestamp with time zone*) - initial timestamp of search

* **final_timestamp** (*timestamp with time zone*) - final timestamp of search

#### <Highlight color="#b2e4f7">get_data_helper.getLatestTimestampValidProcessed(qhawax_name)</Highlight>

Helper function to get latest valid timestamp of Valid Processed Measurement table based on qHAWAX name.

> Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">get_data_helper.queryDBDailyValidProcessedByQhawaxScript(installation_id, initial_timestamp, final_timestamp)</Highlight>

Helper Valid Processed Measurement function to valid measurement filter by time.

* **installation_id** (*integer*) - qHAWAX ID

* **initial_timestamp** (*timestamp with time zone*) - start date

* **final_timestamp** (*timestamp with time zone*) - end date

---
### Post Data Helper

The file shows the functions that register and request data related to the Post Data Helper table.

#### <Highlight color="#b2e4f7">post_data_helper.storeAirQualityDataInDB(data)</Highlight>

Helper function to store new records in Air Quality Measurement table.

> Parameters

Json input of following Air Measurement fields:

* **ID** (*string*) - qHAWAX ID

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

#### <Highlight color="#b2e4f7">post_data_helper.storeGasIncaInDB(data)</Highlight>

Helper function to record GAS INCA measurement.

>Parameters

* **data** (*json*) - gas Inca measurement

#### <Highlight color="#b2e4f7">post_data_helper.storeProcessedDataInDB(data)</Highlight>

Helper Processed Measurement function to store Processed Data.

>Parameters

* **data** (*json*) - Processed measurement detail

#### <Highlight color="#b2e4f7">post_data_helper.storeValidProcessedDataInDB(data, qhawax_id)</Highlight>

Helper Processed Measurement function to insert Valid Processed Data.

>Parameters

* **data** (*json*) - Processed measurement valid detail

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">post_data_helper.storeAirDailyQualityDataInDB(data)</Highlight>

Helper Daily Air Measurement function to store air daily measurement.

>Parameters

* **data** (*json*) - json of average of daily measurement

---
### Processed Measurement

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

---
### Valid Processed Measurement

The file shows the ...

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
