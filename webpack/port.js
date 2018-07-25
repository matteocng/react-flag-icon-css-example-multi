// @flow

// Returns the port to run the Webpack server on.
export default (): number => parseInt(process.env.PORT || '8080', 10);
