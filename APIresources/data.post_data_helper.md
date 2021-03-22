---
id: post_data_helperMod
title: Post Data Helper Module
sidebar_label: Post Data Helper Module
---

The file shows the functions that register and request data related to the Post Data Helper table.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">post_data_helper.storeAirQualityDataInDB(data)</Highlight>

Helper function to store new records in Air Quality Measurement table.

**Parameters:**

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

**Parameters:**

* **data** (*json*) - gas Inca measurement

#### <Highlight color="#b2e4f7">post_data_helper.storeProcessedDataInDB(data)</Highlight>

Helper Processed Measurement function to store Processed Data.

**Parameters:**

* **data** (*json*) - Processed measurement detail

#### <Highlight color="#b2e4f7">post_data_helper.storeValidProcessedDataInDB(data, qhawax_id)</Highlight>

Helper Processed Measurement function to insert Valid Processed Data.

**Parameters:**

* **data** (*json*) - Processed measurement valid detail

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">post_data_helper.storeAirDailyQualityDataInDB(data)</Highlight>

Helper Daily Air Measurement function to store air daily measurement.

**Parameters:**

* **data** (*json*) - json of average of daily measurement
