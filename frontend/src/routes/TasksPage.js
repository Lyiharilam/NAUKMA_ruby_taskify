import "../scss/TasksPage.scss";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect, useCallback } from "react";
import BasicLayout from '../layouts/BasicLayout'

const TasksPage = () => {

    const { user: currentUser } = useSelector((state) => state.auth);

    return (
        <BasicLayout>
            <div></div>
        </BasicLayout>
    );
};

export default TasksPage;
