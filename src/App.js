import './App.css';
import PricingCard from './Components/PricingCard';
import ReactPricingCard from './Components/ReactPricingCard';
function App() {
  return (
    <div  className="pricing py-5">
      {/* <PricingCard /> */}
      <ReactPricingCard />

    </div>
  );
}

export default App;
