import App from '../components/App';
import * as actions from '../actions/actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  condition : state.condition
})

const mapDispatchToProps = (dispatch) => ({
  selectSub: () => {dispatch(actions.selectSub())}
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;