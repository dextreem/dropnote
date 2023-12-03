const pricing = [
  {
    name: "Basic",
    price: "Free",
    subtitle: "Discover notes around your current location",
    features: [
      {
        included: true,
        feature: "Read Notes",
      },
      {
        included: false,
        feature: "Dropping Notes",
      },
      {
        included: false,
        feature: "Achievements and Badges",
      },
    ],
    buttonText: "Start Adventure",
    highlight: false,
    active: true,
  },
  {
    name: "Signed Up",
    price: "Free",
    subtitle: "Leave a note wherever you are",
    features: [
      {
        included: true,
        feature: "Read Notes",
      },
      {
        included: true,
        feature: "3 Notes per Day",
      },
      {
        included: false,
        feature: "Achievements and Badges",
      },
    ],
    buttonText: "Start Adventure",
    highlight: false,
    active: true,
  },
  {
    name: "Starter",
    price: "5€",
    subtitle: "Unlimited notes, unlimited fun",
    features: [
      {
        included: true,
        feature: "Read Notes",
      },
      {
        included: true,
        feature: "Dropping unlimited Notes",
      },
      {
        included: true,
        feature: "Achievements and Badges",
      },
    ],
    buttonText: "Start Adventure",
    highlight: true,
    active: false,
  },
];

export default pricing;
