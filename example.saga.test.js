function* callApi(url) {
  const someValue = yield select(somethingFromState);
  try {
    const result = yield call(myApi, url, someValue);
    yield put(success(result.json()));
    return result.status;
  } catch (e) {
    yield put(error(e));
    return -1;
  }
}
