import { FunctionComponent } from "react";
import { AppRouter } from "./global/AppRouter";
import { RWDProvider } from "@appsomesolutions/rwd-utils";
import { GlobalStyles } from "global/GlobalStyles";
import React from 'react';

const App: FunctionComponent = () => (
  <React.StrictMode>
    <RWDProvider>
      <GlobalStyles />
      <AppRouter />
    </RWDProvider>
  </React.StrictMode>
);

export default App;
