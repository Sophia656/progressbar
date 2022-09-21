const defaultState = {
    elems: [
      {name: 'Sold', color: '#BD1FBE', value: 677},
      {name: 'Got free', color: '#FC64FF', value: 23},
      {name: 'Burned', color: '#4DDE00', value: 202},
      {name: 'Free float', color: '#747474', value: 323}
    ],
    width: 15,
    height: 50
}

export const ProgressBarReducer = (state = defaultState, action) => {
    switch (action.type) {

        default:
        return state
    }
}