---
id: companyMod
title: Company Module
sidebar_label: Company Module
---

This file shows all endpoints related to Company table

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">company.createCompany()</Highlight>

Adds a company.

Json input of following fields:

 >Parameters

* **company_name** (*string*) - company name to add to the database

* **email_group** (*string*) - unique email group

* **ruc** (*string*) - unique company ruc

* **address** (*string*) - company address

* **company_name** (*string*) - company phone

* **company_name** (*string*) - company contact_person
