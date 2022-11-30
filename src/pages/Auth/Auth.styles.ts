import styled from 'styled-components';

import { square } from 'styles/mixins';
import { textXXLBold } from 'styles/typography';

export const Centered = styled.div`
  ${square('100%')};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .ant-form {
    width: 280px;

    .ant-form-item:last-child {
      margin-top: 42px;
    }

    .ant-form-item-required::before {
      display: none !important;
    }

    .ant-col {
      padding: 0 !important;
      text-align: center !important;
    }

    .ant-btn {
      min-width: 128px;
    }
  }
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 16px;

  ${textXXLBold};
`;
