import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  color: black;
  text-transform: uppercase;
  font-weight: 700;
  border: 2px solid var(--lines);
  cursor: pointer;
  margin-top: 15px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
