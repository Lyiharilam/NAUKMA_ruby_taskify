import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss';
import App from './App';
import { Provider } from "react-redux";
import store from "./store/store";

//---All routes
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import TasksPage from "./routes/TasksPage";
import CabinetPage from "./routes/CabinetPage"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="cabinet" element={<CabinetPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

