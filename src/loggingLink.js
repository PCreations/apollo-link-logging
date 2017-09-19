import { ApolloLink } from 'apollo-link'

class LoggingLink extends ApolloLink {

  request(operation, forward) {
    console.log(`Operation: ${operation}`);

    const observableResults = forward(operation);

    return observableResults.map((result) => {
      console.log(`New result: ${result} for ${operation.operationName}`);
      return result;
    });
  }
}

export default LoggingLink;