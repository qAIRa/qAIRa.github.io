---
id: gas_sensorMod
title: Gas Sensor Module
sidebar_label: Gas Sensor Module
---

The file shows the functions that register and request data related to the Gas Sensor table.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">gas_sensor.requestOffsets()</Highlight>

Endpoint to list offsets variable filter by qHAWAX ID.

**Parameters:**

* **ID** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">gas_sensor.requestControlledOffsets()</Highlight>

Endpoint to list controlled offsets variable filter by qHAWAX ID.

**Parameters:**

* **ID** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">gas_sensor.requestNonControlledOffsets()</Highlight>

Endpoint to list non-controlled offsets variable filter by qHAWAX ID.

**Parameters:**

* **ID** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">gas_sensor.saveOffsets()</Highlight>

Endpoint to save offset variables.

**Parameters:**

* **ID** (*string*) - qHAWAX name

* **offsets** (*Json*) - Json of offset variable of qHAWAX

* **description** (*string*) - description of change

* **person_in_charge** (*string*) - person in charge

#### <Highlight color="#b2e4f7">gas_sensor.saveControlledOffsets()</Highlight>

Endpoint to save controlled offset variables.

**Parameters:**

* **product_id** (*integer*) - qHAWAX name

* **controlled_offsets** (*Json*) - Json of controlled offset variable of qHAWAX

#### <Highlight color="#b2e4f7">gas_sensor.saveNonControlledOffsets()</Highlight>

Endpoint to save non-controlled offset variables.

**Parameters:**

* **product_id** (*integer*) - qHAWAX name

* **controlled_offsets** (*Json*) - Json of controlled offset variable of qHAWAX
