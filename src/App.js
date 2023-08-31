import { Route, Routes } from "react-router-dom";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import SignIn from "./routes/sign-in/sign-in.component";

const  App=()=>{
  return (
    <Routes>
    <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path ="shop" element={<Shop />}/>
        <Route path ="auth" element={<SignIn />}/>
        <Route path="checkout" element={<Checkout />} />
    </Route>
    </Routes>
  );
}

export default App;
