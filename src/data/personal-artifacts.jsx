export const artifacts = {
  headshot: {
    img: {
      src: "/about/headshot.png",
      alt: "",
      height: "210",
      width: "200",
    },
    caption: null,
    explainer: (
      <p>
        Hey, it's me! Click on something, and I'll
        tell you more about it.
      </p>
    ),
  },
  cake: {
    img: {
      src: "/about/cake.png",
      alt: "",
      height: "90",
      width: "145",
    },
    caption: <p>Is it cake?</p>,
    explainer: (
      <>
        <p>
          <a href="https://share.google/e8iDkdX2rgz8q1EK6">
            <b>Is it cake?</b>
          </a>{" "}
          Yes! I baked a chiffon roll cake shaped
          like frogs on a log.
        </p>
        <p>
          I love getting{" "}
          <a href="https://www.instagram.com/bydenalia/?hl=en">
            creative
          </a>{" "}
          in the kitchen. They say baking is a
          science. I say, 'A science{" "}
          <em>experiment</em>.'
        </p>
      </>
    ),
  },
  hiking: {
    img: {
      src: "/about/hiking.png",
      alt: "",
      height: "90",
      width: "75",
    },
    caption: (
      <p>How do you get a cow off the trail?</p>
    ),
    explainer: (
      <>
        <p>
          <b>
            How do you get a cow off the trail?
          </b>{" "}
          Ask it to moo-ve.
        </p>
        <p>
          When I'm not online, I'm likely
          outdoors. In August, I went on a 4-day
          hike along the Alta Via 1.
        </p>
      </>
    ),
  },
  snorkeling: {
    img: {
      src: "/about/snorkeling.png",
      alt: "",
      height: "90",
      width: "75",
    },
    caption: (
      <p>
        What happens if you snorkel with
        strangers?
      </p>
    ),
    explainer: (
      <>
        <p>
          <b>
            What happens if you snorkel with
            strangers?
          </b>{" "}
          There's a 100% chance you end up with
          something in common!
        </p>
        <p>
          I shared this cool experience
          (pun-intended) with hostel-mates in
          Iceland.
        </p>
      </>
    ),
  },
};
