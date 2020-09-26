---
id: qhawaxMod
title: qHAWAX Module
sidebar_label: qHAWAX Module
---

The file shows the functions that register and request data related to the qHAWAX table.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">qhawax.getIncaQhawaxInca</Highlight>

Gets qHAWAX Inca value.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">qhawax.getActiveQhawaxModeCustomer()</Highlight>

Gets all active qHAWAXs that are in field in mode customer.

>No parameters required

#### <Highlight color="#b2e4f7">qhawax.updateIncaData()</Highlight>

Saves qHAWAX Inca value.

>Parameters

* **name** (*string*) - qHAWAX name

* **value_inca** (*integer*) - qHAWAX inca value

#### <Highlight color="#b2e4f7">qhawax.sendQhawaxStatusOff()</Highlight>

Endpoint to set qHAWAX OFF because script detect no new data within five minutes.

Json input of following fields:

>Parameters

* **name** (*string*) - qHAWAX name

* **qhawax_lost_timestamp** (*string*) - the last time qHAWAX send measurement with timezone

* **description** (*string*) - qHAWAX description

* **person_in_charge** (*string*) - person who did this action

#### <Highlight color="#b2e4f7">qhawax.sendQhawaxStatusOn()</Highlight>

Sets qHAWAX ON due to module reset (sensors reset).

Json input of following fields:

>Parameters

* **name** (*string*) - qHAWAX name

* **description** (*string*) - qHAWAX description

* **person_in_charge** (*string*) - person who did this action

#### <Highlight color="#b2e4f7">qhawax.getTimeAllActiveQhawax()</Highlight>

Gets time all active qHAWAX - Script

>Parameters

* **name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">qhawax.createQhawax()</Highlight>

Creates a qHAWAX

Json input of following fields:

>Parameters

* **name** (*string*) - qHAWAX name

* **qhawax_type** (*string*) - qHAWAX type (STATIC or AEREO)

* **description** (*string*) - qHAWAX description

* **person_in_charge** (*string*) - person who did this action

#### <Highlight color="#b2e4f7">qhawax.qhawaxChangeToCalibration()</Highlight>

qHAWAX update to Calibration mode, set main inca -2 value.

Json input of following fields:

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

* **description** (*string*) - qHAWAX description

* **person_in_charge** (*string*) - username who change mode

#### <Highlight color="#b2e4f7">qhawax.qhawaxEndCalibration()</Highlight>

qHAWAX update end calibration mode, set main inca original, depends of mode (custome or stand by).

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

* **person_in_charge** (*string*) - username who change mode

#### <Highlight color="#b2e4f7">qhawax.getQhawaxProcessedLatestTimestamp()</Highlight>

Gets qHAWAX Processed Measurement latest timestamp.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">qhawax.getQhawaxValidProcessedLatestTimestamp()</Highlight>

To get qHAWAX Valid Processed Measurement latest timestamp.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">qhawax.getQhawaxStatus()</Highlight>

Gets qHAWAX status

>Parameters

* **qhawax_name** (*string*) - qHAWAX name
