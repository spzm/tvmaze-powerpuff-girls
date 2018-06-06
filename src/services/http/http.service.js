function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }

  return Promise.reject(new Error(response.statusText));
}

function json(response) {
  return response.json();
}

/**
 * Provides basic REST calls.
 *
 * In perspective, this Service Adapter can be done around
 * axios lib that provides powerful setup of api calls.
 */
class HttpService {
  constructor() {
    // Basically content-type should be 'application/json'.
    // For some unknown reason tvmaze doesn't return proper CORS header for
    // OPTION request (automatic preflight). Therefore, to success with GET request
    // only simple headers should be included. 'application/json' will require preflight....
    //
    // TODO: setup backend proxy
    const headers = {
      'Content-Type': 'text/plain',
    };

    this.defaultConfig = {
      headers,
    };
  }

  /**
   * Note: This function can be made as async/await but unfortunatelly
   * babel generates regenerator overhead for each async function use.
   * This can make significant bundle grow.
   *
   * @method _request
   * @param {String} url to request
   * @param {Object} config parameters for api call
   *
   */
  request(url, config) {
    return fetch(
      url,
      { ...this.defaultConfig, ...config },
    )
      .then(status)
      .then(json);
  }

  get(url) {
    const config = {
      method: 'GET',
    };

    return this.request(url, config);
  }

  post() {
    // Not relevant to current task
    throw Error('Not implemented');
  }

  put() {
    // Not relevant to current task
    throw Error('Not implemented');
  }

  delete() {
    // Not relevant to current task
    throw Error('Not implemented');
  }
}

export default new HttpService();
