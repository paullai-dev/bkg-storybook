import React from "react";
import Banner from "./Banner";
export default { title: "Example/Banner", component: Banner };
export const Info = () => (
    <Banner variant="info">
        {" "}
        {" "}
        <p>
            {" "}
            This is an example of an info banner to display booking
            information. {" "}
        </p>{" "}
        {" "}
    </Banner>
);
export const Danger = () => (
    <Banner variant="danger">
        {" "}
        <p>This is an example of a danger banner to display low availability warnings.</p>   {" "}
    </Banner>
);
export const Congrats = () => (
    <Banner variant="congrats">
        {" "}
        <p>This is an example a congratulatory banner to celebrate a successful reservation.</p>    {" "}
    </Banner>
);
export const Documentation = () => (
    <Banner variant="documentation">
        {" "}
        {" "}
        <p>
            {" "}
            This is an example a documentation banner to highlight relevant itineraries
            and travel documentation.{" "}
        </p>{" "}
        {" "}
    </Banner>
);