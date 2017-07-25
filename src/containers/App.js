import App from '../components/App';
import * as actions from '../actions/actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  deskTopHeader: state.deskTopHeader,
  mobileHeader: state.mobileHeader
})

const mapDispatchToProps = (dispatch) => ({
  selectAboutDesktop: () => {dispatch(actions.selectAboutDesktop())},
  selectPortDesktop: () => {dispatch(actions.selectPortDesktop())},
  selectHamMobile: () => {dispatch(actions.selectHamMobile())},
  selectAboutMobile: () => {dispatch(actions.selectAboutMobile())},
  selectPortMobile: () => {dispatch(actions.selectPortMobile())},
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
