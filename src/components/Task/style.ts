import styled from 'styled-components';
import colors from '../../styles/colors';

import * as enums from '../../utils/enums/Task';

type TagProps = {
  priority?: enums.Priority;
  status?: enums.Status;
  parameter: 'status' | 'prioridade';
};

function returnBackgroundColor(props: TagProps): string {
  if (props.parameter === 'prioridade') {
    if (props.priority === enums.Priority.URGENT) return colors.red;
    if (props.priority === enums.Priority.IMPORTANT) return colors.yellow2;
  } else {
    if (props.status === enums.Status.PENDING) return colors.yellow;
    if (props.status === enums.Status.CONCLUDED) return colors.green;
  }
  return '#ccc';
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  background-color: ${(props) => returnBackgroundColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  font-size: 10px;
  display: inline-block;
`;

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height 24px;
  font-family: Roboto Mono, monospace;
  display:block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`;

export const ActionsBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`;

export const Button = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`;

export const ButtonSave = styled(Button)`
  background-color: ${colors.green};
`;

export const ButtonCancelRemove = styled(Button)`
  background-color: ${colors.red};
`;

export const DescriptionPending = styled(Description)`
  background-color: ${colors.yellow};
`;
