---
id: doc1
title: Business
sidebar_label: Business
---

### Company Module

This file shows all endpoints related to Company table

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">company.createCompany()</Highlight>

adds a company

Json input of following fields:

 >Parameters

* **company_name** (*string*) - company name to add to the database

* **email_group** (*string*) - unique email group

* **ruc** (*string*) - unique company ruc

* **address** (*string*) - company address

* **company_name** (*string*) - company phone

* **company_name** (*string*) - company contact_person

---
### Eca Noise Module

This file shows all the...

#### <Highlight color="#b2e4f7">eca_noise.getEcaNoiseLimitById()</Highlight>

To get the minimum and the maximum eca noises.

>Parameters

* **ID** (*string*) - Eca Noise ID

#### <Highlight color="#b2e4f7">eca_noise.getAllAreas()</Highlight>

To list all areas in combo box.

>No parameters required

---
### Gas Sensor Module

This file shows all the...

#### <Highlight color="#b2e4f7">gas_sensor.requestOffsets()</Highlight>

Endpoint to list offsets variable filter by qHAWAX ID.

>Parameters

* **ID** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">gas_sensor.requestControlledOffsets()</Highlight>

Endpoint to list controlled offsets variable filter by qHAWAX ID.

>Parameters

* **ID** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">gas_sensor.requestNonControlledOffsets()</Highlight>

Endpoint to list non-controlled offsets variable filter by qHAWAX ID.

>Parameters

* **ID** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">gas_sensor.saveOffsets()</Highlight>

Endpoint to save offset variables.

>Parameters

* **ID** (*string*) - qHAWAX name

* **offsets** (*Json*) - Json of offset variable of qHAWAX

* **description** (*string*) - description of change

* **person_in_charge** (*string*) - person in charge

#### <Highlight color="#b2e4f7">gas_sensor.saveControlledOffsets()</Highlight>

Endpoint to save controlled offset variables.

>Parameters

* **product_id** (*integer*) - qHAWAX name

* **controlled_offsets** (*Json*) - Json of controlled offset variable of qHAWAX


#### <Highlight color="#b2e4f7">gas_sensor.saveNonControlledOffsets()</Highlight>

Endpoint to save non-controlled offset variables.

>Parameters

* **product_id** (*integer*) - qHAWAX name

* **controlled_offsets** (*Json*) - Json of controlled offset variable of qHAWAX

---
### Get Business Helper Module

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

---
### Post Business Helper Module

#### <Highlight color="#b2e4f7">post_business_helper.updateOffsetsFromProductID(qhawax_name, offsets)</Highlight>

Helper Gas Sensor function to save offsets from qHAWAX ID

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

* **offsets** (*Json*) - Json of offset variable of qHAWAX

#### <Highlight color="#b2e4f7">post_business_helper.updateControlledOffsetsFromProductID(qhawax_name, controlled_offsets)</Highlight>

Helper Gas Sensor function to save controlled offsets from qHAWAX ID

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

* **offsets** (*Json*) - Json of offset variable of qHAWAX

#### <Highlight color="#b2e4f7">post_business_helper.updateNonControlledOffsetsFromProductID(qhawax_name, non_controlled_offsets)</Highlight>

Helper Gas Sensor function to save non controlled offsets from qHAWAX ID.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

* **offsets** (*Json*) - Json of offset variable of qHAWAX

#### <Highlight color="#b2e4f7">post_business_helper.updateMainIncaQhawaxTable(new_main_inca, qhawax_name)</Highlight>

Helper qHAWAX function to save main inca value in qHAWAX table

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

* **new_main_inca** (*integer*) - qHAWAX main inca

#### <Highlight color="#b2e4f7">post_business_helper.updateMainIncaQhawaxInstallationTable(new_main_inca, qhawax_name)</Highlight>

Helper qHAWAX function to save main inca value in qHAWAX Installation table

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

* **new_main_inca** (*integer*) - qHAWAX main inca


#### <Highlight color="#b2e4f7">post_business_helper.saveStatusOffQhawaxTable(qhawax_name)</Highlight>

Sets qHAWAX OFF in qHAWAX table.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">post_business_helper.saveStatusOffQhawaxInstallationTable(qhawax_name,qhawax_lost_timestamp)</Highlight>

Sets qHAWAX OFF in qHAWAX Installation table.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

* **qhawax_lost_timestamp** (*timestamp*) - qHAWAX last time off


#### <Highlight color="#b2e4f7">post_business_helper.saveStatusOnTable(qhawax_name)</Highlight>

Sets qHAWAX ON in qHAWAX table.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">post_business_helper.saveTurnOnLastTime(qhawax_name)</Highlight>

Sets qHAWAX ON in qHAWAX Installation table.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">post_business_helper.turnOnAfterCalibration(qhawax_name)</Highlight>

Sets qHAWAX ON in qHAWAX Installation table.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">post_business_helper.setOccupiedQhawax(qhawax_id)</Highlight>

Updates qHAWAX Availability to Occupied.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">post_business_helper.setModeCustomer(qhawax_id)</Highlight>

Updates qHAWAX mode to Customer.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">post_business_helper.saveEndWorkFieldDate(qhawax_id,end_date)</Highlight>

Saves End Work in Field.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

* **end_date** (*timestamp*) - qHAWAX installation end date


#### <Highlight color="#b2e4f7">post_business_helper.setAvailableQhawax(qhawax_id)</Highlight>

Updates qHAWAX installation state in qHAWAX table.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">post_business_helper.changeMode(qhawax_name, mode)</Highlight>

Changes to other mode.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">post_business_helper.updateQhawaxInstallation(data)</Highlight>

Updates qHAWAX in field.

>Parameters

* **data** (*Json*) - qHAWAX installation detail

#### <Highlight color="#b2e4f7">post_business_helper.createQhawax(qhawax_id, qhawax_name,qhawax_type</Highlight>

Creates a qHAWAX module.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

* **qhawax_name** (*string*) - qHAWAX name

* **qhawax_type** (*string*) - qHAWAX type

#### <Highlight color="#b2e4f7">post_business_helper.insertDefaultOffsets(last_gas_sensor_id, qhawax_name)</Highlight>

Inserts a default offset.

>Parameters

* **last_gas_sensor_id** (*integer*) - last gas sensor ID

* **qhawax_name** (*string*) - qHAWAX name

#### <Highlight color="#b2e4f7">post_business_helper.createCompany(json_company)</Highlight>

Inserts a new company.

>Parameters

* **json_company** (*Json*) - json company

#### <Highlight color="#b2e4f7">post_business_helper.storeNewQhawaxInstallation(data)</Highlight>

Inserts new qHAWAX in Field.

>Parameters

* **data** (*Json*) - qHAWAX Installation detail

#### <Highlight color="#b2e4f7">post_business_helper.writeBinnacle(qhawax_name,description,person_in_charge)</Highlight>

Writes Binnacle.

>Parameters

* **qhawax_name** (*string*) - qHAWAX name

* **observation_type** (*string*) - observation type

* **description** (*string*) - bitacora description

* **person_in_charge** (*string*) - person in charge

---
### qHAWAX Module

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

---

### qHAWAX Installation History Module

This file shows the ...

#### <Highlight color="#b2e4f7">qhawax_installation_history.newQhawaxInstallation()</Highlight>

Creates a qHAWAX in field.

Json input of following fields:

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

* **lat** (*double*) - latitude of qHAWAX location

* **lon** (*double*) - longitude of qHAWAX location

* **instalation_date** (*timestamp*) - qHAWAX Installation Date

* **link_report** (*string*) - link of installation report

* **observations** (*string*) - installation detail

* **district** (*string*) - district where qHAWAX is located

* **comercial_name** (*string*) - qHAWAX commercial name

* **address** (*string*) - address where qHAWAX is located

* **company_id** (*integer*) - company ID to which qHAWAX belongs

* **eca_noise_id** (*integer*) - ID of type of qHAWAX zone

* **qhawax_id** (*integer*) - qHAWAX ID

* **connection_type** (*string*) - type of qHAWAX connection

* **measuring_height** (*integer*) - Height of qHAWAX in field

* **season** (*string*) - season of the year when the module was deployed

#### <Highlight color="#b2e4f7">qhawax_installation_history.saveEndWorkField()</Highlight>

Saves the last date of a qHAWAX in field.

Json input of following fields:

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

* **end_date** (*timestamp*) - end date of qHAWAX installation

#### <Highlight color="#b2e4f7">qhawax_installation_history.getQhawaxInMap()</Highlight>

Gets list of qHAWAXs filtered by company

>Parameters

* **company_id** (*integer*) - company ID

#### <Highlight color="#b2e4f7">qhawax_installation_history.getInstallationDate()</Highlight>

Gets installation date of qHAWAX in field.

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">qhawax_installation_history.updateQhawaxInstallation()</Highlight>

Creates a qHAWAX in field.

Json input offollowing fields:

>Parameters

* **qhawax_id** (*integer*) - qHAWAX ID

* **lat** (*double*) - latitude of qHAWAX location

* **lon** (*double*) - longitude of qHAWAX location

* **instalation_date** (*timestamp*) - qHAWAX Installation Date

* **link_report** (*string*) - link of installation report

* **observations** (*string*) - installation detail

* **district** (*string*) - district where qHAWAX is located

* **comercial_name** (*string*) - qHAWAX commercial name

* **address** (*string*) - address where qHAWAX is located

* **company_id** (*integer*) - company ID to which qHAWAX belongs

* **eca_noise_id** (*integer*) - ID of type of qHAWAX zone

* **qhawax_id** (*integer*) - qHAWAX ID

* **connection_type** (*string*) - type of qHAWAX connection

* **measuring_height** (*integer*) - Height of qHAWAX in field

* **season** (*string*) - season of the year when the module was deployed
