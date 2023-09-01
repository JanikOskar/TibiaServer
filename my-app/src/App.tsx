import { FunctionComponent } from "react";
import { AppRouter } from "./global/AppRouter";
import { RWDProvider } from '@appsomesolutions/rwd-utils';

const App: FunctionComponent = () => (
    <RWDProvider>
    <AppRouter />
    </RWDProvider>
);

export default App;
