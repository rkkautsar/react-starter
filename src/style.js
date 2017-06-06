import { injectGlobal } from 'styled-components';
import theme from '@/common/theme';

injectGlobal`
  body {
    font-size: 16px;
    background: ${theme.white};
    color: ${theme.black};
  }
`;
