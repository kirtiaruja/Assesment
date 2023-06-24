import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionProvider, useSession } from "next-auth/react"
import './App.css';
import Index from './pages/index';
import Dashboard from './pages/dashboard';
import MenuItems from './components/menudataitems';

function App() {
  const [session, setSession] = useState();
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index user={session} setUser={setSession}/>} />
          <Route path='/dashboard' element={<Dashboard user={session}/>} />
        </Routes>
      </BrowserRouter>
  );
}


export default App;


// import { SessionProvider } from "next-auth/react"

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }