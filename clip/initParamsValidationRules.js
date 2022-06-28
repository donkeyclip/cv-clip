export default {
  stylesheet: {
    label: "Style Sheet",
    type: "object",
    props: {
      backgroundColor: { type: "color" },
      textColor: { type: "color" },
      slideBackgroundColor: { type: "color" },
      secondaryColor: { type: "color" },
      secondarytextColor: { type: "color" },
    },
  },
  intro: {
    label: "Intro Slide",
    type: "object",
    props:{
      salutation : { type: "string"},
      name : { type: "string"},
      photo : { type: "string"},
      about : { type: "string"},
      workExperience : { type: "string"},
      languages : { type: "string"},
      agelity : { type: "string"},
      nationality : { type: "string"},
    }
  },
  contact: {
    label: "Contact Slide",
    type: "array",
    items: {
      type: "object",
      props: {
        logo: { type: "string" },
        name: { type: "string" },
        value: { type: "string" },
      },
    },
  },
  // softwareSkills: {
  //   label: "Software Skills",
  //   type: "array",
  //   items: {
  //     type: "object",
  //     props: {
  //       name: { type: "string" },
  //       value: { type: "number" },
  //     },
  //   },
  // },
      // softwareSkills: {
  //   label: "Software Skills",
  //   type: "object",
  //   props: {
  //       name1: { type: "string" },
  //       name2: { type: "string" },
  //       value1: { type: "string" },
  //       value2: { type: "string" },
  //   },
  // },
  education: {
    label: "Education",
    type: "array",
    items: {
      type: "object",
      props: {
        title: { type: "string" },
        subtitle: { type: "string" },
        year: { type: "string" },
      },
    },
  },
  experience: {
    label: "Experience",
    type: "array",
    items: {
      type: "object",
      props: {
        title: { type: "string" },
        subtitle: { type: "string" },
        description: { type: "string" },
        year: { type: "string" },
      },
    },
  },
  portfolio: {
    label: "Portfolio",
    type: "array",
    items: {
      type: "object",
      props: {
        title: { type: "string" },
        imageBig: { type: "string" },
        imageMedium: { type: "string" },
        imageSmall: { type: "string" },
        description: { type: "string" },
      },
    },
  },
};
