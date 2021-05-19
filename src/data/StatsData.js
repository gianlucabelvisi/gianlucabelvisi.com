import {FaMoneyCheck } from "react-icons/fa";
import {GiEarthAmerica} from "react-icons/gi";
import {MdAirplanemodeActive, MdTimer} from "react-icons/md";
import React from "react";


export const statsData = [
    {
        icon: (<GiEarthAmerica css={`color: #047bf1`}/>),
        title: "Over 100 destinations",
        desc: "Travel over 100 unique places"
    },
    {
        icon: (<MdAirplanemodeActive css={`color: #f3a82e`}/>),
        title: "1 Million trips made",
        desc: "Over one million trips completed last year"
    },
    {
        icon: (<MdTimer css={`color: #f34f2e`}/>),
        title: "Fastest support",
        desc: "Access our support team 24/7"
    },
    {
        icon: (<FaMoneyCheck css={`color: #3af576`}/>),
        title: "Best Deals",
        desc: "We offer the best prices"
    }
]