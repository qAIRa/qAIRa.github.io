---
id: get_data_helperMod
title: Get Data Helper Module
sidebar_label: Get Data Helper Module
---

The file shows the functions that register and request data related to the Get Data Helper table.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

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
