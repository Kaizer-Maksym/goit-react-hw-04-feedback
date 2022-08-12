import styled from '@emotion/styled';

export const StatElem = styled.p`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 350px;
  font-size: 14px;

  font-weight: 700;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom: 2px solid #989595d5;
  }
`;

export const StatValue = styled.span`
  font-weight: 500;
  font-size: 20px;
`;
