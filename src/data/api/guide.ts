// The API always returns JSON.

// Status Codes
/*
Four different status codes may be returned:
  200: The request was successful.
  400: An error occurred in your request.
  403: The request was forbidden - usually because you hit a rate limit.
  404: The resource could not be found.
*/
const status = [200, 400, 403, 404];

// Rate Limits
/*
The following rate limits apply:

  You can register your app and use the provided API key by passing it in as the query 
  parameter api_key. This will allow you to make up to 3600 requests per hour.
  If you don't register your app and provide an api_key query parameter, you're limited 
  to 500 requests per hour.

To know where you are relative to the limit, these HTTP headers will be returned with every 
response:
  X-RateLimit-Remaining: How many requests you can still make at this time
  X-RateLimit-Limit: The total number of requests you're allowed to make
  X-RateLimit-Reset: Seconds remaining before the rate limit resets
*/

// Error Responses
// If an error occurs, you'll get a response body like this:
const error: {
  "code": 400,
  "error": "An error message",
};
// code contains the HTTP status code. error contains an error message.

// Paginated Listings
// Some endpoints return paginated lists in a standard format, like so:
const reponse: {
  "page_count": 5,
  "page": 0,
  "results": [...]
}
/* 
These endpoints require a page query parameter, which should be an integer. In the response
body, page specifies this value. page_count specifies how many pages there are total.
results is an array that contains the items in the page. A full page will contain 20 results.
The last page may return less than 20 results. Requests with an out of range page value will
return 0 results.
*/