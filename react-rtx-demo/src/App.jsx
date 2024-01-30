import UserView from './features/user/UserView';
import CakeView from './features/cake/CakeView';
import IcecreamView from './features/icecream/IcecreamView';

function App() {
  return (
    <div className="container">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
