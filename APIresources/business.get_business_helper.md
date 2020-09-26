---
id: get_business_helperMod
title: Get Business Helper Module
sidebar_label: Get Business Helper Module
---

The file shows the functions that register and request data related to the Get Business Helper table.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">get_business_helper.getTimeQhawaxHistory(name)</Highlight>

To get time qHAWAX history.

>Parameters

* **installation_id** (*integer*) - Installation ID

#### <Highlight color="#b2e4f7">get_business_helper.queryQhawaxModeCustomer()</Highlight>

To get qHAWAX list in mode Customer and state ON.

>No parameters required

#### <Highlight color="#b2e4f7">get_business_helper.queryGetAreas()</Highlight>

Helper Eca Noise function to list all zones.

>No parameters required

#### <Highlight color="#b2e4f7">get_business_helper.queryGetEcaNoise(eca_noise_id)</Highlight>

Helper Eca Noise function to get zone description.

>Parameters

* **eca_noise_id** (*string*) - Eca Noise ID

#### <Highlight color="#b2e4f7">get_business_helper.getOffsetsFromProductID(qhawax_name)</Highlight>

Helper Gas Sensor function to get offsets from qHAWAX name.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">get_business_helper.getControlledOffsetsFromProductID(qhawax_name)</Highlight>

Helper Gas Sensor function to get controlled offsets from qHAWAX ID.

>Parameters

* **qhawax_id** (*string*) - qHAWAX ID

#### <Highlight color="#b2e4f7">get_business_helper.getNonControlledOffsetsFromProductID(qhawax_name)</Highlight>

Helper Gas Sensor function to get non-controlled offsets from qHAWAX name.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">get_business_helper.queryIncaQhawax(name)</Highlight>

Helper qHAWAX function to get main Inca value.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">get_business_helper.getInstallationDate(qhawax_id)</Highlight>

Helper qHAWAX function to get Installation Date.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">get_business_helper.getFirstTimestampValidProcessed(qhawax_id)</Highlight>

Helper qHAWAX Installation function to get first timestamp of Valid Processed.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">get_business_helper.queryGetLastQhawax()</Highlight>

Helper qHAWAX function to get last qHAWAX ID.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">get_business_helper.queryGetLastGasSensor()</Highlight>

Helper Gas Sensor function to get last Gas Sensor ID.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">get_business_helper.isItFieldQhawax(qhawax_name)</Highlight>

To check qHAWAX in field.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">get_business_helper.getLatestTimeInProcessedMeasurement(qhawax_name)</Highlight>

Helper qHAWAX function to get latest timestamp in UTC 00 from Processed Measurement.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">get_business_helper.getLatestTimeInValidProcessed(qhawax_name)</Highlight>

Helper qHAWAX function to get latest timestamp in UTC 00 from Valid Processed Measurement

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">get_business_helper.queryQhawaxInFieldInPublicMode()</Highlight>

To get list of qHAWAXs in field in public mode

>No parameters required

#### <Highlight color="#b2e4f7">get_business_helper.getQhawaxMode(qhawax_name)</Highlight>

To get qHAWAX mode based on name

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">get_business_helper.getQhawaxStatus(qhawax_name)</Highlight>

To get qHAWAX status based on name

>Parameters

* **qhawax_name** (*string*) - qHAWAX name
