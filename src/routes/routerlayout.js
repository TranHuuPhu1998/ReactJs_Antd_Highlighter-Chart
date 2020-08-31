import React from "react";
import Group from "../components/Group/group.js";
import Method from "../components/Method/method.js";
import LinkCard from "../components/ListCard/listCard.js";
import Rules from "../components/Rules/Rules.js";
import AntButton from "../components/AntDesign/Button/ButtonAnt.js";
import AntForm from "../components/AntDesign/Form/form.js";
import HighLigh from "../components/AntDesign/HighLigh/HighLigh.js";
import Calendar from "../components/AntDesign/Calendar/Calendar.js";
import Chart from "../components/AntDesign/Chart/Chart.js";
import ReactChartJS from "../components/ReactChartJs/Chart.js";
import Validation from "../components/ReactValidation/Validation.js";
import FormikYup from "../components/ReactValidation/FormikYup.js";
import CustomSelect from "../components/CustomSelect/CustomSelect.js";
export const routes = [
    {
        path: "/",
        exact: true,
        main: () => (
            <LinkCard />
        )
    },
    {
        path: "/group",
        exact: false,
        main: ({ match, history }) => (
            <Group match={match} history={history} />
        )
    },
    {
        path: "/method",
        exact: false,
        main: () => (
            <Method />
        )
    },
    {
        path: "/ant/button",
        exact: false,
        main: () => (
            <AntButton />
        )
    },
    {
        path: "/ant/form",
        exact: false,
        main: () => (
            <AntForm />
        )
    },
    {
      path: "/rules",
      exact: false,
      main: () => (
          <Rules />
      )
     },
     {
        path: "/highligh",
        exact: false,
        main: () => (
            <HighLigh />
        )
    },
    {
        path: "/ant/calendar",
        exact: false,
        main: () => (
            <Calendar />
        )
    },
    {
        path: "/ant/chart",
        exact: false,
        main: () => (
            <Chart />
        )
    },
    {
        path: "/react/chart",
        exact: false,
        main: () => (
            <ReactChartJS />
        )
    },
    {
        path: "/react/validation",
        exact: false,
        main: () => (
            <Validation />
        )
    },
    {
        path: "/react/formik-yup",
        exact: false,
        main: () => (
            <FormikYup />
        )
    },
    {
        path: "/react/custom-select",
        exact: false,
        main: () => (
            <CustomSelect />
        )
    }

    
    
];

export default routes;