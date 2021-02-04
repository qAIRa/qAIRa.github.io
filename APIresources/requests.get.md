---
id: gets
title: GET Requests
sidebar_label: GET Requests
---

The file shows the GET endpoints that everyone should have access to. Every request can be made with the URL and any application such as Postman that can make a request to the API.

Currently, all CO2 (carbon dioxide) and NO (nitric oxide) measurements are null values.

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#000000',
      padding: '0.2rem',
    }}>{children}</span> );

### <Highlight color="#b2e4f7">Get Average Valid Processed Measurements Time Period</Highlight>

Returns a list of json data about every qHAWAX without an end date, which means that the qHAWAX is still positioned and sending data.

**URL:** /api/average_valid_processed_period/?**qhawax_id**=1&**initial_timestamp**=02-02-2021 09:00:00&**final_timestamp**=02-02-2021 10:00:00

**Method:** GET

**URL Parameters:**

**Required:**

* **qhawax_id** = [*string*]
* **initial_timestamp** = [*datetime*]
* **final_timestamp** = [*datetime*]


**Success Response:**

Code: 200

Content:

```python
[
  {
        "CO_ug_m3": 677.481,
        "H2S_ug_m3": 28.084,
        "NO2_ug_m3": 50.377,
        "PM10": 40.549,
        "PM25": 13.204,
        "SO2_ug_m3": 14.209,
        "UV": 0.0,
        "SPL": 91.071,
        "humidity": 93.06,
        "pressure": 1003.371,
        "O3_ug_m3": 102.342,
        "temperature": 20.336,
        "lat": -12.072736,
        "lon": -77.0826870000001,
        "timestamp_zone": "Tue, 02 Feb 2021 08:00:00 GMT"
    },
    {
        "CO_ug_m3": 672.91,
        "H2S_ug_m3": 28.011,
        "NO2_ug_m3": 52.535,
        "PM10": 44.317,
        "PM25": 12.659,
        "SO2_ug_m3": 14.204,
        "UV": 0.0,
        "SPL": 92.626,
        "humidity": 95.625,
        "pressure": 1003.262,
        "O3_ug_m3": 106.235,
        "temperature": 20.082,
        "lat": -12.072736,
        "lon": -77.0826870000001,
        "timestamp_zone": "Tue, 02 Feb 2021 09:00:00 GMT"
    }

]
```
**Error Response:**

Code: 400

```python
Content: {"Warning": "Measurements not found"}
```

OR

Code: 400

```python
Content: {"error": "TypeError"}
```

### <Highlight color="#b2e4f7">Get Gas Measurements Every 24 hours</Highlight>

Returns a list of json data about the hourly average measurement of the target gas from the last 24 hours of the target qHAWAX.

**URL:** /api/gas_average_measurement/?**qhawax**=qH001&**gas**=SO2

**Method:** GET

**URL Parameters:**

**Required:**

* **qhawax** = [*string*]
* **gas** = [*string*]

**Success Response:**

Code: 200

Content:

```python
[
    {
        "sensor": 6.439,
        "timestamp_zone": "Mon, 01 Feb 2021 23:00:00 GMT"
    },
    {
        "sensor": 6.372,
        "timestamp_zone": "Tue, 02 Feb 2021 00:00:00 GMT"
    },
    {
        "sensor": 6.346,
        "timestamp_zone": "Tue, 02 Feb 2021 01:00:00 GMT"
    },
    {
        "sensor": 6.329,
        "timestamp_zone": "Tue, 02 Feb 2021 02:00:00 GMT"
    },
    {
        "sensor": 6.326,
        "timestamp_zone": "Tue, 02 Feb 2021 03:00:00 GMT"
    },
    {
        "sensor": 6.322,
        "timestamp_zone": "Tue, 02 Feb 2021 04:00:00 GMT"
    },
    {
        "sensor": 6.298,
        "timestamp_zone": "Tue, 02 Feb 2021 05:00:00 GMT"
    },
    {
        "sensor": 6.301,
        "timestamp_zone": "Tue, 02 Feb 2021 06:00:00 GMT"
    },
    {
        "sensor": 6.292,
        "timestamp_zone": "Tue, 02 Feb 2021 07:00:00 GMT"
    },
    {
        "sensor": 6.305,
        "timestamp_zone": "Tue, 02 Feb 2021 08:00:00 GMT"
    },
    {
        "sensor": 6.314,
        "timestamp_zone": "Tue, 02 Feb 2021 09:00:00 GMT"
    },
    {
        "sensor": 6.294,
        "timestamp_zone": "Tue, 02 Feb 2021 10:00:00 GMT"
    },
    {
        "sensor": 6.305,
        "timestamp_zone": "Tue, 02 Feb 2021 11:00:00 GMT"
    },
    {
        "sensor": 6.345,
        "timestamp_zone": "Tue, 02 Feb 2021 12:00:00 GMT"
    },
    {
        "sensor": 6.442,
        "timestamp_zone": "Tue, 02 Feb 2021 13:00:00 GMT"
    },
    {
        "sensor": 6.679,
        "timestamp_zone": "Tue, 02 Feb 2021 14:00:00 GMT"
    },
    {
        "sensor": 6.636,
        "timestamp_zone": "Tue, 02 Feb 2021 15:00:00 GMT"
    },
    {
        "sensor": 6.555,
        "timestamp_zone": "Tue, 02 Feb 2021 16:00:00 GMT"
    },
    {
        "sensor": 6.553,
        "timestamp_zone": "Tue, 02 Feb 2021 17:00:00 GMT"
    },
    {
        "sensor": 6.557,
        "timestamp_zone": "Tue, 02 Feb 2021 18:00:00 GMT"
    },
    {
        "sensor": 6.545,
        "timestamp_zone": "Tue, 02 Feb 2021 19:00:00 GMT"
    },
    {
        "sensor": 6.621,
        "timestamp_zone": "Tue, 02 Feb 2021 20:00:00 GMT"
    },
    {
        "sensor": 6.628,
        "timestamp_zone": "Tue, 02 Feb 2021 21:00:00 GMT"
    },
    {
        "sensor": 6.567,
        "timestamp_zone": "Tue, 02 Feb 2021 22:00:00 GMT"
    }
]

```
**Error Response:**

Code: 400

```python
Content: {"Warning": "Measurements not found"}
```

OR

Code: 400

```python
Content: {"error": "TypeError"}
```

OR

Code: 400

```python
Content: {"error": "ValueError"}
```

### <Highlight color="#b2e4f7">Get Drone Flight During Period of Time</Highlight>

Returns a list of json data about all the finished flights. Each json contains the name of the drone, the flight details, the latitude and longitude of the arrival.

**URL:** /api/get_drone_flights_period_time/?**initial_timestamp**=02-02-2021 08:00:00&**final_timestamp**=02-02-2021 15:30:00

**Method:** GET

**URL Parameters:**

**Required:**

* **initial_timestamp** = [*datetime*]
* **final_timestamp** = [*datetime*]


**Success Response:**

Code: 200

Content:

```python
[
    {
        "flight_detail": "Terrible flight",
        "flight_end": "02-02-2021 14:32:55",
        "flight_start": "02-02-2021 08:44:59",
        "last_latitude_position": -12.264081,
        "last_longitude_position": -76.9144391,
        "qhawax_name": "qH006"
    }
]

```
**Error Response:**

Code: 400

```python
Content: {"error": "TypeError"}
```

### <Highlight color="#b2e4f7">Get Telemetry Data From Andean Drone</Highlight>

Returns a list of json data containing technical information about the flight the target drone during the initial and final timestamps.

**URL:** /api/telemetry_andean_drone/?**qhawax_name**=qH006&**initial_timestamp**=02-02-2021 14:30:00&**final_timestamp**=02-02-2021 14:31:00

**Method:** GET

**URL Parameters:**

**Required:**

* **qhawax_name** = [*string*]
* **initial_timestamp** = [*datetime*]
* **final_timestamp** = [*datetime*]


**Success Response:**

Code: 200

Content:

```python
[
    {
        "airspeed": 0.0,
        "alt": 10.006,
        "battery_perc": -47.0,
        "dist_home": 0.04,
        "flight_mode": "GUIDED",
        "lat": -12.2641,
        "lon": -76.9144,
        "num_gps": 10,
        "timestamp": "Tue, 02 Feb 2021 14:30:16 GMT",
        "velocity_variance": 0.00925685,
        "voltage": 24.63
    },
    {
        "airspeed": 0.01,
        "alt": 10.002,
        "battery_perc": -50.0,
        "dist_home": 0.07,
        "flight_mode": "GUIDED",
        "lat": -12.2641,
        "lon": -76.9144,
        "num_gps": 10,
        "timestamp": "Tue, 02 Feb 2021 14:30:36 GMT",
        "velocity_variance": 0.0161265,
        "voltage": 24.63
    },
    {
        "airspeed": 0.01,
        "alt": 10.01,
        "battery_perc": -54.0,
        "dist_home": 0.08,
        "flight_mode": "GUIDED",
        "lat": -12.2641,
        "lon": -76.9144,
        "num_gps": 10,
        "timestamp": "Tue, 02 Feb 2021 14:30:57 GMT",
        "velocity_variance": 0.0208436,
        "voltage": 24.63
    }
]

```
**Error Response:**

Code: 400

```python
Content: {"Warning": "Telemetry not found"}
```

OR

Code: 400

```python
Content: {"error": "TypeError"}
```

### <Highlight color="#b2e4f7">Get Eca Noise Limit By ID</Highlight>

Returns a list of values containing the ID, area name, the maximum limits during the day and night, respectively.

**URL:** /api/get_eca_noise_limit/?**ID**=4

**Method:** GET

**URL Parameters:**

**Required:**

* **ID** = [*integer*]

**Success Response:**

Code: 200

Content:

```python
[
    4,
    "Industry Zone",
    80,
    70
]
```
**Error Response:**

Code: 400

```python
Content: {"Warning": "Eca Noise ID has not been found"}
```

OR

Code: 400

```python
Content: {"error": "Exception"}
```

### <Highlight color="#b2e4f7">Get All Areas</Highlight>

Returns a list of json data containing all the Eca Noise IDs and their correspondent area names available in the “EcaNoise” table.

**URL:** /api/get_all_areas/

**Method:** GET

**URL Parameters:** *None*


**Success Response:**

Code: 200

Content:

```python
[
    {
        "area_name": "Industry Zone",
        "id": 4
    },
    {
        "area_name": "Comercial Zone",
        "id": 3
    },
    {
        "area_name": "Residential Zone",
        "id": 2
    },
    {
        "area_name": "Special Protection Zone",
        "id": 1
    }
]

```
**Error Response:**

Code: 400

```python
Content: {"Warning": "There are no areas recorded in database"}
```

OR

Code: 400

```python
Content: {"database error": "Exception"}
```

### <Highlight color="#b2e4f7">Get Last Inca Data</Highlight>

Returns a list of json data containing values from the “GasInca” table. The table contains data regarding the gas sensors, their correspondent qHAWAX and the timestamp which is based on the last hour since the request happened.

**URL:** /api/last_gas_inca_data/

**Method:** GET

**URL Parameters:** *None*

**Success Response:**

Code: 200

Content:

```python
[
    {
        "CO": 3.0,
        "H2S": 13.0,
        "NO2": 7.0,
        "O3": 87.0,
        "PM10": 20.0,
        "PM25": 48.0,
        "SO2": 28.0,
        "main_inca": 100.0,
        "qhawax_id": 26,
        "qhawax_name": "qH006",
        "timestamp_zone": "Wed, 03 Feb 2021 15:00:00 GMT"
    },
    {
        "CO": 8.0,
        "H2S": 12.0,
        "NO2": 49.0,
        "O3": 94.0,
        "PM10": 71.0,
        "PM25": 109.0,
        "SO2": 36.0,
        "main_inca": 500.0,
        "qhawax_id": 29,
        "qhawax_name": "qH058",
        "timestamp_zone": "Wed, 03 Feb 2021 15:00:00 GMT"
    }
]
```
**Error Response:**

Code: 400

```python
Content: {"Warning": "We could not find any gas Inca measurement"}
```

OR

Code: 400

```python
Content: {"error": "Exception"}
```

### <Highlight color="#b2e4f7">Get Processed Data</Highlight>

Returns a list of json data containing values from the “ProcessedMeasurement” table from the last “interval_minutes” minutes. The json contains data regarding the gas measurements in ppb and ug/m3, PM1, PM10, PM25, meteorological data such as solar radiation, air temperature and humidity, from the target qHAWAX. It also contains latitude, longitude and the correspondent timestamp that indicates the time the measurement happened.

**URL:** /api/processed_measurements/?**name**=qH006&**interval_minutes**=1

**Method:** GET

**URL Parameters:**

**Required:**

* **name** = [*string*]
* **interval_minutes** = [*datetime*]

**Success Response:**

Code: 200

Content:

```python
[
    {
        "CO": 1674.622,
        "CO2": null,
        "CO_ug_m3": 1925.815,
        "H2S": 58.478,
        "H2S_ug_m3": 81.284,
        "I_temperature": 32.1,
        "NO": null,
        "NO2": -70.311,
        "NO2_ug_m3": -132.185,
        "O3": -3.05,
        "O3_ug_m3": -5.978,
        "PM1": 5.464,
        "PM10": 23.479,
        "PM25": 10.855,
        "SO2": 5.584,
        "SO2_ug_m3": 14.63,
        "UV": 1.8,
        "UVA": 0.0,
        "UVB": null,
        "VOC": null,
        "alt": null,
        "humidity": 67.4,
        "lat": -12.151288,
        "lon": -76.826446,
        "pressure": 984.298,
        "spl": 116.2,
        "temperature": 26.6,
        "timestamp_zone": "Wed, 03 Feb 2021 16:28:50 GMT"
    },
    {
        "CO": 1200.16,
        "CO2": null,
        "CO_ug_m3": 1380.184,
        "H2S": 60.72,
        "H2S_ug_m3": 84.401,
        "I_temperature": 32.1,
        "NO": null,
        "NO2": -85.223,
        "NO2_ug_m3": -160.219,
        "O3": -7.677,
        "O3_ug_m3": -15.047,
        "PM1": 5.439,
        "PM10": 20.242,
        "PM25": 11.095,
        "SO2": 5.476,
        "SO2_ug_m3": 14.347,
        "UV": 1.9,
        "UVA": 0.0,
        "UVB": null,
        "VOC": null,
        "alt": null,
        "humidity": 67.1,
        "lat": -12.151288,
        "lon": -76.826446,
        "pressure": 984.297,
        "spl": 110.1,
        "temperature": 26.5,
        "timestamp_zone": "Wed, 03 Feb 2021 16:29:10 GMT"
    },
    {
        "CO": 790.813,
        "CO2": null,
        "CO_ug_m3": 909.435,
        "H2S": 62.203,
        "H2S_ug_m3": 86.462,
        "I_temperature": 32.1,
        "NO": null,
        "NO2": -97.205,
        "NO2_ug_m3": -182.745,
        "O3": -9.57,
        "O3_ug_m3": -18.757,
        "PM1": 5.517,
        "PM10": 21.315,
        "PM25": 11.229,
        "SO2": 5.336,
        "SO2_ug_m3": 13.98,
        "UV": 1.9,
        "UVA": 0.0,
        "UVB": null,
        "VOC": null,
        "alt": null,
        "humidity": 67.8,
        "lat": -12.151288,
        "lon": -76.826446,
        "pressure": 984.346,
        "spl": 95.3,
        "temperature": 26.5,
        "timestamp_zone": "Wed, 03 Feb 2021 16:29:32 GMT"
    }
]
```
**Error Response:**

Code: 400

```python
Content: {"Warning": "Measurements not found"}
```

OR

Code: 400

```python
Content: {"error": "TypeError"}
```

### <Highlight color="#b2e4f7">Get Processed Data From Andean Drone</Highlight>

Returns a list of json data containing values from the “ProcessedMeasurement” table from the last “interval_minutes” minutes. The json contains data regarding the gas measurements in ppb and ug/m3, PM1, PM10, PM25, meteorological data such as solar radiation, air temperature and humidity, from the target Andean Drone. It also contains latitude, longitude and the correspondent timestamps that indicate the time the measurement happened. These timestamp values depend on the initial and final timestamp parameters.

**URL:** /api/processed_measurements_andean_drone/?**qhawax_name**=1&**initial_timestamp**=03-02-2021 16:30:00&**final_timestamp**=03-02-2021 16:31:00

**Method:** GET

**URL Parameters:**

**Required:**

* **qhawax_name** = [*string*]
* **initial_timestamp** = [*datetime*]
* **final_timestamp** = [*datetime*]

**Success Response:**

Code: 200

Content:

```python
[
    {
        "CO": 1674.622,
        "CO2": null,
        "CO_ug_m3": 1925.815,
        "H2S": 58.478,
        "H2S_ug_m3": 81.284,
        "I_temperature": 32.1,
        "NO": null,
        "NO2": -70.311,
        "NO2_ug_m3": -132.185,
        "O3": -3.05,
        "O3_ug_m3": -5.978,
        "PM1": 5.464,
        "PM10": 23.479,
        "PM25": 10.855,
        "SO2": 5.584,
        "SO2_ug_m3": 14.63,
        "UV": 1.8,
        "UVA": 0.0,
        "UVB": null,
        "VOC": null,
        "alt": null,
        "humidity": 67.4,
        "lat": -12.151288,
        "lon": -76.826446,
        "pressure": 984.298,
        "spl": 116.2,
        "temperature": 26.6,
        "timestamp_zone": "Wed, 03 Feb 2021 16:30:00 GMT"
    },
    {
        "CO": 1200.16,
        "CO2": null,
        "CO_ug_m3": 1380.184,
        "H2S": 60.72,
        "H2S_ug_m3": 84.401,
        "I_temperature": 32.1,
        "NO": null,
        "NO2": -85.223,
        "NO2_ug_m3": -160.219,
        "O3": -7.677,
        "O3_ug_m3": -15.047,
        "PM1": 5.439,
        "PM10": 20.242,
        "PM25": 11.095,
        "SO2": 5.476,
        "SO2_ug_m3": 14.347,
        "UV": 1.9,
        "UVA": 0.0,
        "UVB": null,
        "VOC": null,
        "alt": null,
        "humidity": 67.1,
        "lat": -12.151288,
        "lon": -76.826446,
        "pressure": 984.297,
        "spl": 110.1,
        "temperature": 26.5,
        "timestamp_zone": "Wed, 03 Feb 2021 16:30:20 GMT"
    },
    {
        "CO": 790.813,
        "CO2": null,
        "CO_ug_m3": 909.435,
        "H2S": 62.203,
        "H2S_ug_m3": 86.462,
        "I_temperature": 32.1,
        "NO": null,
        "NO2": -97.205,
        "NO2_ug_m3": -182.745,
        "O3": -9.57,
        "O3_ug_m3": -18.757,
        "PM1": 5.517,
        "PM10": 21.315,
        "PM25": 11.229,
        "SO2": 5.336,
        "SO2_ug_m3": 13.98,
        "UV": 1.9,
        "UVA": 0.0,
        "UVB": null,
        "VOC": null,
        "alt": null,
        "humidity": 67.8,
        "lat": -12.151288,
        "lon": -76.826446,
        "pressure": 984.346,
        "spl": 95.3,
        "temperature": 26.5,
        "timestamp_zone": "Wed, 03 Feb 2021 16:30:42 GMT"
    }
]
```
**Error Response:**

Code: 400

```python
Content: {"Warning": "Measurements not found"}
```

OR

Code: 400

```python
Content: {"error": "TypeError"}
```

### <Highlight color="#b2e4f7">Get qHAWAX In Map</Highlight>

Returns a list of json data containing information about every qHAWAX without an end date, which means that the qHAWAX is currently positioned and sending data.

**URL:** /api/AllQhawaxInMap/

**Method:** GET

**URL Parameters:** *None*

**Success Response:**

Code: 200

Content:

```python
[
    {
        "area_name": "Residential Zone",
        "comercial_name": "FaberCastell",
        "eca_noise_id": 2,
        "id": 4,
        "lat": -11.557571,
        "lon": -70.777524,
        "main_inca": 1.0,
        "mode": "Customer",
        "name": "qH004",
        "qhawax_id": 1,
        "qhawax_type": "STATIC",
        "state": "ON"
    }
]
```

**Error Response:**

Code: 400

```python
Content: {"Warning": "qHAWAXs in field not found"}
```

OR

Code: 400

```python
Content: {"error": "TypeError"}
```

### <Highlight color="#b2e4f7">Get Drones In Map</Highlight>

Returns a list of json data containing information about every Andean Drone without an end date, which means that the drone is currently flying and sending data.

**URL:** /api/average_valid_processed_period/?**qhawax_id**=1&**initial_timestamp**=02-02-2021 09:00:00&**final_timestamp**=02-02-2021 10:00:00

**Method:** GET

**URL Parameters:**

**Required:**

* **qhawax_id** = [*string*]
* **initial_timestamp** = [*datetime*]
* **final_timestamp** = [*datetime*]

**Success Response:**

Code: 200

Content:

```python
[
    {
        "area_name": "Residential Zone",
        "comercial_name": "FaberCastell",
        "eca_noise_id": 2,
        "id": 5,
        "lat": -11.557571,
        "lon": -70.777524,
        "main_inca": 1.0,
        "mode": "Customer",
        "name": "qH004",
        "qhawax_id": 1,
        "qhawax_type": "AEREAL",
        "state": "ON"
    }
]
```

**Error Response:**

Code: 400

```python
Content: {"Warning": "qHAWAXs in field not found"}
```

OR

Code: 400

```python
Content: {"error": "TypeError"}
```

### <Highlight color="#b2e4f7">Get Installation Date</Highlight>

Returns the date on which the target qHAWAX was installed as *String*.

**URL:** /api/GetInstallationDate/?**qhawax_id**=4

**Method:** GET

**URL Parameters:**

**Required:**

* **qhawax_id** = [*string*]

**Success Response:**

Code: 200

Content:

```python
2020-12-29 03:03:08+00:00
```

**Error Response:**

Code: 400

```python
Content: {"Warning": "Measurements not found"}
```

OR

Code: 400

```python
Content: {"error": "TypeError"}
```

### <Highlight color="#b2e4f7">Get All Qhawax</Highlight>

Returns a list of json data containing information about every qHAWAX.

**URL:** /api/average_valid_processed_period/?**qhawax_id**=1&**initial_timestamp**=02-02-2021 09:00:00&**final_timestamp**=02-02-2021 10:00:00

**Method:** GET

**URL Parameters:** *None*

**Success Response:**

Code: 200

Content:

```python
[
    {
        "id": 1,
        "main_inca": -1.0,
        "mode": "Customer",
        "name": "qH004",
        "qhawax_type": "STATIC",
        "state": "OFF"
    },
    {
      "id": 2,
      "main_inca": 1.0,
      "mode": "Stand By",
      "name": "qH057",
      "qhawax_type": "STATIC",
      "state": "OFF"
    }
]
```

**Error Response:**

Code: 400

```python
Content: {"Warning": "qHAWAXs not found"}
```

OR

Code: 400

```python
Content: {"error": "TypeError"}
```

### <Highlight color="#b2e4f7">Get Active qHAWAX Mode Customer</Highlight>

Returns a list of json data of all the currently active qHAWAXs, which they all should have *state* equal to “ON” and *mode* equal to “Customer”.

**URL:** /api/get_qhawaxs_active_mode_customer/

**Method:** GET

**URL Parameters:** *None*

**Success Response:**

Code: 200

Content:

```python
[
    {
        "area_name": "Residential Zone",
        "comercial_name": "FaberCastell",
        "eca_noise_id": 2,
        "id": 4,
        "lat": -11.557571,
        "lon": -70.777524,
        "main_inca": 1.0,
        "mode": "Customer",
        "name": "qH004",
        "qhawax_id": 1,
        "qhawax_type": "STATIC",
        "state": "ON"
    }
]
```

**Error Response:**

Code: 400

```python
Content: {"Warning": "Measurements not found"}
```

OR

Code: 400

```python
Content: {"error": "TypeError"}
```

### <Highlight color="#b2e4f7">Get Time All Active qHAWAX</Highlight>

Returns json data containing the last time the target qHAWAX was ON and the last time it was registered.

**URL:** /api/get_time_all_active_qhawax/?**name**=qH006

**Method:** GET

**URL Parameters:**

**Required:**

* **name** = [*string*]

**Success Response:**

Code: 200

Content:

```python
{
    "last_time_on": "Wed, 20 Jan 2021 13:56:55 GMT",
    "last_time_registration": "Fri, 22 Jan 2021 23:04:00 GMT"
}
```

**Error Response:**

Code: 400

```python
Content: {"Warning": "qHAWAX name is not in field"}
```

OR

Code: 400

```python
Content: {"error": "TypeError"}
```

### <Highlight color="#b2e4f7">Verify If qHAWAX Exists</Highlight>

Returns *True* if the target qHAWAX exists in the “Qhawax” table.

**URL:** /api/qhawax_exist/?**name**=qH004

**Method:** GET

**URL Parameters:**

**Required:**

* **name** = [*string*]

**Success Response:**

Code: 200

Content:

```python
True
```

**Error Response:**

Code: 400

```python
Content: {"error": "Exception"}
```

otro

### <Highlight color="#b2e4f7">Get qHAWAX Status</Highlight>

Returns the current status of the target qHAWAX as *String*.

**URL:** /api/qhawax_status/?**name**=qH004

**Method:** GET

**URL Parameters:**

**Required:**

* **name** = [*string*]

**Success Response:**

Code: 200

Content:

```python
ON
```

**Error Response:**

Code: 400

```python
Content: {"error": "Exception"}
```
