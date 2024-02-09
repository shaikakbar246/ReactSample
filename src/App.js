import React from 'react'
import "./App.css"
import PropDestruct from './Props/PropDestruct';
import TodoBind from './Todo/TodoBind';
import EffectHook from './EffectHook/EffectHook';
import EffectApi from './EffectApi/EffectApi';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import User from './QueryParam/User';
import RefHook from './RefHook/RefHook';
import { RefMultiEleHook } from './RefHook/RefMultiEleHook';
import CustomHook from './CustomHooks/CustomHook';
import PropDrill from './PropDilling/PropDrill';
import UseMemo from './Memo/UseMemo';
import UseMemoProducts from './Memo/UseMemoProducts';
import ChildToParent from './ChildToParent/ChildToParent';
import Higher_Order from './HigherOrder/Higher_Order';
import EffectCounter1 from './UseEffect/EffectCounter1';
import EffectCounter2 from './UseEffect/EffectCounter2';
import EffectMouseCounter3 from './UseEffect/EffectMouseCounter3';
import MouseContainer from './UseEffect/MouseContainer';
import EffectCounter5 from './UseEffect/EffectCounter5';
import RefExample1 from './RefHook/RefExample1';
import RefExample2 from './RefHook/RefExample2';
import RefExample3 from './RefHook/RefExample3';
import RefExample4 from './RefHook/RefExample4';
import Home from './React_Route/Home';
import { About } from './React_Route/About';
import Navbar from './React_Route/navbar';
import Order from './React_Route/Order';
import Nomatch from './React_Route/Nomatch';
import ProductRoute from './React_Route/ProductRoute';
import { AddProduct } from './React_Route/AddProduct';
import { Feature } from './React_Route/Feature';
import Example1 from './Props/Example1';
import EffectCounter7 from './UseEffect/EffectCounter7';
import PasswordGenerator from './PasswordGenerator/PasswordGenerator';
import CurencyProject from './CurrencyConvertor/CurencyProject';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PropDestruct />} />
          <Route path="/TodoBind" element={<TodoBind />} />

          <Route path="/EffectHookBind" element={<EffectHook />} />
          <Route path="/EffectApi" element={<EffectApi />} />
          <Route path="/Example1" element={<Example1 />} />
          {/* <Route path="/User/:id?posts=10" element={<User/>}/> */}
          <Route path="/RefHook" element={<RefHook />} />
          <Route path="/RefMultiEleHook" element={<RefMultiEleHook />} />
          <Route path="/CustomHook" element={<CustomHook />} />
          <Route path="/PropDrill" element={<PropDrill />} />
          <Route path="/UseMemo" element={<UseMemo />} />
          <Route path="/UseMemoProducts" element={<UseMemoProducts />} />
          <Route path="/ChildToParent" element={<ChildToParent />} />
          <Route path="/User/:id/:name" element={<User />} />
          <Route path="/Higher_Order" element={<Higher_Order />} />
          <Route path="/EffectCounter1" element={<EffectCounter1 />} />
          <Route path="/EffectCounter2" element={<EffectCounter2 />} />
          <Route path="/EffectCounter7" element={<EffectCounter7 />} />
          
          <Route path="/EffectMouseCounter3" element={<EffectMouseCounter3 />} />
          <Route path="/MouseContainer" element={<MouseContainer />} />
          <Route path="/FetchDataApi" element={<EffectCounter5 />} />
          <Route path="/RefExample1" element={<RefExample1 />} />
          <Route path="/RefExample2" element={<RefExample2 />} />
          <Route path="/RefExample3" element={<RefExample3 />} />
          <Route path="/RefExample4" element={<RefExample4 />} />
          <Route path="/RefExample4" element={<RefExample4 />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/order-summary" element={<Order />} />
          <Route path="/ProductRoute" element={<ProductRoute />}>
            <Route index element={<Feature />} />
            <Route path='featured' element={<Feature />} />
            <Route path='new' element={<AddProduct />} />
          </Route>
          <Route path="*" element={<Nomatch />} />
          <Route path="/PasswordGenerator" element={<PasswordGenerator />} />
          <Route path="/CurencyProject" element={<CurencyProject />} />
        </Routes>
      </BrowserRouter>
    </>



    // <PropDestruct/>
    // <TodoBind/>
    // <EffectHook/>
    // <EffectApi/>
  );
}

export default App;
