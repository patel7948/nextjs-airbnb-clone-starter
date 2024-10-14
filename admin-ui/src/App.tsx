import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AirbndServerList } from "./airbndServer/AirbndServerList";
import { AirbndServerCreate } from "./airbndServer/AirbndServerCreate";
import { AirbndServerEdit } from "./airbndServer/AirbndServerEdit";
import { AirbndServerShow } from "./airbndServer/AirbndServerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"airbnb_server-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AirbndServer"
          list={AirbndServerList}
          edit={AirbndServerEdit}
          create={AirbndServerCreate}
          show={AirbndServerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
