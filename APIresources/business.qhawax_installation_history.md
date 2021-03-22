---
id: qhawax_installation_historyMod
title: qHAWAX Installation History Module
sidebar_label: qHAWAX Installation History Module
---

The file shows the functions that register and request data related to the qHAWAX Installation History table.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">qhawax_installation_history.newQhawaxInstallation()</Highlight>

Creates a qHAWAX in field.

Json input of following fields:

**Parameters:**

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

**Parameters:**

* **qhawax_id** (*integer*) - qHAWAX ID

* **end_date** (*timestamp*) - end date of qHAWAX installation

#### <Highlight color="#b2e4f7">qhawax_installation_history.getQhawaxInMap()</Highlight>

Gets list of qHAWAXs filtered by company

**Parameters:**

* **company_id** (*integer*) - company ID

#### <Highlight color="#b2e4f7">qhawax_installation_history.getInstallationDate()</Highlight>

Gets installation date of qHAWAX in field.

**Parameters:**

* **qhawax_id** (*integer*) - qHAWAX ID

#### <Highlight color="#b2e4f7">qhawax_installation_history.updateQhawaxInstallation()</Highlight>

Creates a qHAWAX in field.

Json input offollowing fields:

**Parameters:**

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
