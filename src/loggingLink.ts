import {
  ApolloLink,
  Observable,
  Operation,
  NextLink,
  FetchResult,
} from 'apollo-link-core'

export default class LoggingLink extends ApolloLink {
  request(
    operation: Operation,
    forward: NextLink,
  ): Observable<FetchResult> {
    console.log(`Operation: ${operation}`);

    const observableResults = forward(operation);

    return observableResults.map((result) => {
      console.log(`New result: ${result} for ${operation.operationName}`);
      return result;
    });
  }
}