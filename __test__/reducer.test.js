import reducer from '../src/reducers/'
import * as types from '../src/actions/actionTypes'

describe('header reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        deskTopHeader: {
          showAbout: false,
          showPort: false
        },
        mobileHeader : {
          showHam: false,
          showAbout: false,
          showPort: false
        }
      }
    )
  })

  it('should handle SELECT_ABOUT_DESKTOP', () => {
    expect(
      reducer({}, {
        type: types.SELECT_ABOUT_DESKTOP
      })).toEqual(
      {
        deskTopHeader: {
          showAbout: true,
          showPort: false
        },
        mobileHeader : {
          showHam: false,
          showAbout: false,
          showPort: false
        }
      }
    )
  })

  it('should handle SELECT_PORT_DESKTOP', () => {
    expect(
      reducer({}, {
        type: types.SELECT_PORT_DESKTOP
      })).toEqual(
      {
        deskTopHeader: {
          showAbout: false,
          showPort: true
        },
        mobileHeader : {
          showHam: false,
          showAbout: false,
          showPort: false
        }
      }
    )
  })

  it('should handle SELECT_HAM_MOBILE', () => {
    expect(
      reducer({}, {
        type: types.SELECT_HAM_MOBILE
      })).toEqual(
      {
        deskTopHeader: {
          showAbout: false,
          showPort: false
        },
        mobileHeader : {
          showHam: true,
          showAbout: false,
          showPort: false
        }
      }
    )
  })

  it('should handle SELECT_ABOUT_MOBILE', () => {
    expect(
      reducer({}, {
        type: types.SELECT_ABOUT_MOBILE
      })).toEqual(
      {
        deskTopHeader: {
          showAbout: false,
          showPort: false
        },
        mobileHeader : {
          showHam: false,
          showAbout: true,
          showPort: false
        }
      }
    )
  })

  it('should handle SELECT_PORT_MOBILE', () => {
    expect(
      reducer({}, {
        type: types.SELECT_PORT_MOBILE
      })).toEqual(
      {
        deskTopHeader: {
          showAbout: false,
          showPort: false
        },
        mobileHeader : {
          showHam: false,
          showAbout: false,
          showPort: true
        }
      }
    )
  })
  
})
