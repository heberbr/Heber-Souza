import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;

  button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
const Imagem = styled.img`
  width: 200px;
`;
const rosto = styled.img`
  width: 35px;
`;

function Cabeca() {
  const [mudaTela, setmudaTela] = useState(false);

  return (
    <div>
      <div>
        <Imagem src="/public/img/astromatch.jpeg" />
      </div>

      {mudaTela ? (
        setmudaTela(
          <Container>
            <div>
              <rosto src="/public/img/astromatch.jpeg" />
            </div>
          </Container>
        )
      ) : (
        <div>
          <rosto src="/img/rosto.jpeg" />
        </div>
      )}
    </div>
  );
}

export default Cabeca;