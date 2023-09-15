import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 20vh;

  padding: 0 4rem;

  background-color: var(--purple-900);

  > img {
    height: 7rem;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
  }
`;
