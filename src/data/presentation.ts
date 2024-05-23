type Social = {
  label: string;
  link: string;
  icon: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "cem.yld.pro@gmail.com",
  title: "Hi, I’m Cem 👋",
  profile: "/killua-double-kalash.jpg",
  description:
    "Bonjour, I'm a *26 years old french full-stack developer* with over *3 years* of web experience. I am mainly working with *Laravel and Vue*. If I'm not coding, I'm probably playing video games. Feel free to contact me for any project or just to say hi !",
  socials: [
    {
      label: "Github",
      link: "https://github.com/cemoche",
      icon: "simple-icons:github",
    },
  ],
};

export default presentation;
