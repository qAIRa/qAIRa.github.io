---
id: FAQs
title: FAQs
sidebar_label: FAQs
---

## Current version

**Important**: The default version of the API may change in the future. If you're building an application and care about the stability of the API, be sure to fork the master branch.

## Media types

The Media Type is specified in header of request. The most basic media types the API supports are:

*application/json*

Method fetch:

```json
  body: JSON.stringify(data),
  		headers: {
  			'Content-Type': 'application/json',
  		},
```

Neither of these specify a version, so you will always get the current default JSON representation of resources.

## Troubleshooting

If you're encountering some oddities in the API, here's a list of resolutions to some of the problems you may be experiencing.

* Why am I getting a 404?

The request could not be understood by the server due to malformed syntax. The client should not repeat the request without modifications

* Why am I getting a 405?

**Not Allowed** - It occurs when the web server is configured in a way that does not allow you to perform an action for a particular URL. Maybe when you run an endpoint with GET instead of POST.

* Why am I not seeing all my results?

Most API calls accessing a list of resources (e.g., users, issues, etc.). If you're making requests and receiving an incomplete set of results, a response is specified in an unsupported content type.

* Why am I getting a 500?

**Server Mistake** - Indicates that something went wrong on the server that prevent the server from fulfilling the request.
