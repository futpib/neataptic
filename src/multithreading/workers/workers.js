/*******************************************************************************
                                  WORKERS
*******************************************************************************/

var workers = {
  node: {
    TestWorker: (!process.browser) && require('./node/testworker')
  },
  browser: {
    TestWorker: process.browser && require('./browser/testworker')
  }
};

/** Export */
module.exports = workers;
