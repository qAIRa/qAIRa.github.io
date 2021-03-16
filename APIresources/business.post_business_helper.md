---
id: post_business_helperMod
title: Post Business Helper Module
sidebar_label: Post Business Helper Module
---

The file shows the functions that register and request data related to the Post Business Helper table.

```javascript
export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );
```

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
