import styled from "styled-components";
import HowRow from "./HowRow";

const howToSteps = [
  {
    number: "01",
    img: "/how_to_1.svg",
    alt: "How To step 1 - Person hiking trough the woods.",
    title: "Embark on a Hike to Your Special Place",
    text: "Lace up those hiking boots and venture into the great outdoors. Choose a spot that holds a special meaning for you – whether it's a secluded forest glade, a mountain summit, or a hidden beach. As you hike, our app tracks your journey in real-time, connecting the physical path you tread with the digital world.",
  },
  {
    number: "02",
    img: "/how_to_2.svg",
    alt: "How To step 2 - Person besides phone dropping a note to her current location.",
    title: "Drop Your Personal Note at the Spot",
    text: "Arrive at your chosen destination, and the adventure doesn't end there. With a few taps, leave a virtual note right at the heart of the place you've discovered. Share your thoughts, tips, or a snippet of your experience. It's your digital message in a bottle, waiting to be discovered by fellow explorers.",
    inverted: true,
  },
  {
    number: "03",
    img: "/how_to_3.svg",
    alt: "How To step 3 - Two people hiking, one person sitting in a tent.",
    title: "Share Your Adventure with Others",
    text: "The beauty of your exploration doesn't have to be experienced alone. Share your note with the community, and here's the magic – it becomes visible to others when they venture to the same location. Imagine the joy of fellow adventurers stumbling upon your note, creating a network of shared stories and hidden gems. Your journey doesn't just stay with you; it becomes part of a collective outdoor narrative.",
  },
];

const P = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-brand-600);
`;

const H2 = styled.h2`
  font-size: 5rem;
  margin-bottom: 9.6rem;
`;

const HowSection = styled.section`
  background-color: var(--color-brand-50);
  margin-bottom: 9.6rem;
  padding: 9.6rem 4.8rem;
`;

const HowToSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  column-gap: 6.4rem;
  row-gap: 9.6rem;
  align-items: center;
`;

function How() {
  return (
    <HowSection>
      <P>How it works</P>
      <H2>Leave a digital footprint in 3 simple steps</H2>
      <HowToSteps>
        {howToSteps.map((h) => (
          <HowRow row={h} />
        ))}
      </HowToSteps>
    </HowSection>
  );
}

export default How;
