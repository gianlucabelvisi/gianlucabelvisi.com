import {GiPadlock} from "react-icons/gi";
import React from "react";
import {FaCcPaypal, FaGithub, FaInstagramSquare, FaTwitter} from "react-icons/fa";
import {ImFacebook2} from "react-icons/im";

export const socialData = [
    {
        icon: (<FaGithub />),
        bgColor: "#868895FF",
        title: "Github",
        desc: "You can find this website there, plus some other projects that I'm not ashamed to keep as private.",
        link: "https://github.com/gianlucabelvisi"
    },
    {
        icon: (<ImFacebook2/>),
        bgColor: "#4267B2",
        title: "Facebook",
        desc: "The main place where I post stuff, but I'm phasing it out and will be using this blog instead.",
        link: "https://facebook.com/gianlucabelvisi"
    },
    {
        icon: (<FaInstagramSquare/>),
        bgColor: "#833AB4",
        title: "Instagram",
        desc: "I don't post much here, but I do look at your pictures. Some are cute. The stories are mostly cringe.",
        link: "https://www.instagram.com/gianlucabelvisi/"
    },
    {
        icon: (<FaCcPaypal/>),
        bgColor: "#4267B2",
        title: "Paypal",
        desc: "You don't have to send me money, but if you do, I promise they will be used for propagating stupidity.",
        link: "https://paypal.me/gianlucabelvisi"
    },
    {
        icon: (<FaTwitter/>),
        bgColor: "#1DA1F2",
        title: "Twitter",
        desc: "I never tweet because I heard that they cancel you. So I use it to get news, memes, naked women.",
        link: "https://twitter.com/gbelvs"
    },
    {
        icon: (<GiPadlock/>),
        bgColor: "#58c8f5",
        title: "OnlyFans",
        desc: "Of course I don't have an OnlyFans, but thank you for believing it. It really means a lot!",
        link: "https://onlyfans.com/gianlucabelvisi"
    }
]