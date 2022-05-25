import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;

  table {
    background-color: #fff;
    border-spacing: 0;
    border: 1px solid #ebecf0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    thead th {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      /* identical to box height */

      color: #59616f;

      span {
        display: flex;
        align-items: center;

        svg {
          margin-left: 6px;
        }
      }
    }
    tbody td {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;

      color: #1e2d3e;
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #ebecf0;
      border-right: 1px solid #ebecf0;

      :last-child {
        border-right: 0;
      }
    }
    .resizer {
      display: inline-block;
      background: #dcdde0;
      width: 2px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(50%);
      z-index: 1;
      border-radius: 4px;
      touch-action: none;

      &.isResizing {
        background: red;
      }
    }
  }
`;
