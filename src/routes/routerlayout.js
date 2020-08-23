import React from "react";
import Group from "../components/Group/group.js";
import Method from "../components/Method/method.js";
import LinkCard from "../components/ListCard/listCard.js";
import Rules from "../components/Rules/Rules.js";
import AntButton from "../components/AntDesign/Button/button.js";
import AntForm from "../components/AntDesign/Form/form.js";
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
  }

];

export default routes;