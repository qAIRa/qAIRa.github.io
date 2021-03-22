---
id: air_daily_qualityMod
title: Air Daily Quality Module
sidebar_label: Air Daily Quality Module
---

The file shows the functions that register and request data related to the Air Daily Quality table.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

#### <Highlight color="#b2e4f7">air_daily_quality.storeAirDailyData()</Highlight>

Air Daily Measurement function to record daily average measurement.

**Parameters:**

* **data_jason** (*json*) - json of daily average measurement

#### <Highlight color="#b2e4f7">air_daily_quality.getAirDailyMeasurementsTimePeriod()</Highlight>

Air Daily Measurement function to get daily average measurement based on week number and year.

**Parameters:**

* **qhawax_id** (*integer*) - qHAWAX ID

* **init_week** (*integer*) - initial week number

* **init_year** (*integer*) - initial year

* **end_week** (*integer*) - last week number

* **end_year** (*integer*) - end year
