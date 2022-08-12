import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
`;

export const ButtonListItem = styled.li`
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const StatisticBtn = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;

  background-color: #8c8c60c4;
  box-shadow: 3px 2px 1px rgba(0, 0, 0, 0.5);

  text-align: center;
  font-weight: 600;
  font-size: 14px;
`;
