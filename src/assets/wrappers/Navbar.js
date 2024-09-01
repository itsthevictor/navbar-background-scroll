import styled from "styled-components";

const Wrapper = styled.nav`
  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    height: 80px;
    padding: 0 20px;
    border-bottom: 1px solid lightgrey;
    transition: background 0.5s ease;
    position: fixed;
    top: 0;
    left: 0;

    .left,
    .right,
    .nav-links {
      display: flex;
      align-items: center;
      gap: 2em;
    }

    .nav-links {
      margin-left: 20px;
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
    &.white {
      background: white;
    }
  }
`;

export default Wrapper;
