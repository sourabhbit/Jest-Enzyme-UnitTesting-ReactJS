import { expectSaga, testSaga } from 'redux-saga-test-plan';

test('exact order with redux-saga-test-plan', () => {
  return testSaga(callApi, 'url')
    .next()
    .select(selectFromState)
    .next()
    .call(myApi, 'url', valueFromSelect);

    ...
});

test('recorded effects with redux-saga-test-plan', () => {
  /*
  * With expectSaga, you can assert that any yield from
  * your saga occurs as expected, *regardless of order*.
  * You must call .run() at the end.
  */
  return expectSaga(callApi, 'url')
    .put(success(value)) // last effect from our saga, first one tested

    .call(myApi, 'url', value)
    .run();
    /* notice no assertion for the select call */
});

test('test only final effect with .provide()', () => {
  /*
  * With the .provide() method from expectSaga
  * you can by pass in all expected values
  * and test only your saga's final effect.
  */
  return expectSaga(callApi, 'url')
    .provide([
      [select(selectFromState), selectedValue],
      [call(myApi, 'url', selectedValue), response]
    ])
    .put(success(response))
    .run();
});

test('integration test with withReducer', () => {
  /*
  * Using `withReducer` allows you to test
  * the state shape upon completion of your reducer -
  * a true integration test for your Redux store management.
  */

  return expectSaga(callApi, 'url')
    .withReducer(myReducer)
    .provide([
      [call(myApi, 'url', value), response]
    ])
    .hasFinalState({
      data: response
    })
    .run();
});
