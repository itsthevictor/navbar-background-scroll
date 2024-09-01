import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    width: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 7.5em;
    gap: 1.5em;
    text-align: center;
    height: 100vh;

    h1 {
      font-size: 3.5em;
    }

    .pricing {
      font-size: 0.95em;
      color: Gray;
    }

    .feature {
      font-size: 0.75em;
    }
    &.hero {
      margin-top: 8em;
    }
    &.grey {
      background: var(--light-dark);
    }
    &.black {
      background: var(--text);
      color: white;
    }
    &.purple {
      background: var(--purple);
    }
    &.green {
      background: var(--mint);
    }
    &.orange {
      background: var(--orange);
    }
  }

  .grey {
    background: #faf9f9;
  }
  .green {
    background: #93e45c;
  }
  .black {
    background: #40cd7c;
  }
  .purple {
    background: #8c75b4;
  }
`;

export default Wrapper;
