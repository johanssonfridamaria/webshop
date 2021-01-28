const actiontypes = () => {
  return {
    products: {
      fetchInit: 'FETCH_INIT',
      fetchSuccess: 'FETCH_SUCESS',
      fetchFail: 'FETCH_FAIL',
      fetchOneSuccess: 'FETCH_ONE_SUCESS',
    },
  }
}

export default actiontypes;