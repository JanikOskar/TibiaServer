import { FunctionComponent } from "react";
import { AppRouter } from "./global/AppRouter";
import { RWDProvider } from '@appsomesolutions/rwd-utils';
import { GlobalStyles } from "global/GlobalStyles";

const App: FunctionComponent = () => (
    <RWDProvider>
    <GlobalStyles />
    <AppRouter />
    </RWDProvider>
);

export default App;
