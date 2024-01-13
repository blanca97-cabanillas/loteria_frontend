import './assets/css/notification.css'
// import { LockClosedIcon } from '@heroicons/react/20/solid'
import './App.css';
import { IndexLayout } from './layout/Index';
import Loader from './components/loader/loader';
import { Provider as BusProvider, } from 'react-bus'
import LoaderWithMessage from './components/loader/loaderWithMessage';
function App() {
  return (
    <div className="App">
      <BusProvider>
        <Loader></Loader>
        <LoaderWithMessage></LoaderWithMessage>
        <IndexLayout></IndexLayout>
      </BusProvider>
    </div>
  );
}

export default App;
