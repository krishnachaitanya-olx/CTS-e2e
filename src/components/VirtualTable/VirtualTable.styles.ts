import styled from 'styled-components';

export interface VirtualTableCellProps {
    isFirstCell: boolean;
    isLastRowCell: boolean;
}

const VirtualTableCell = styled.div<VirtualTableCellProps>`
    box-sizing: border-box;
    padding: 16px;
    border-left: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    ${({ isFirstCell }): string => (isFirstCell ? 'border-left: 0' : '')};
    ${({ isLastRowCell }): string => (isLastRowCell ? 'border-bottom: 0' : '')};
    border-bottom: 1px solid #e8e8e8;
    background: #FFF;
`;

export default VirtualTableCell;
