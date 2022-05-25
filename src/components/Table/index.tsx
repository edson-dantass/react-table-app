import React from "react";
import {
  Column,
  useTable,
  useSortBy,
  useBlockLayout,
  useResizeColumns,
} from "react-table";
import { Container } from "./styles";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";

interface ITableOptions {
  columns: Column[];
  data: {}[];
  sort?: boolean;
  resize?: boolean;
}

const Table: React.FC<ITableOptions> = (props) => {
  const { columns, data, sort, resize } = props || {};

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
      useBlockLayout,
      useResizeColumns
    );

  return (
    <Container>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...(sort
                    ? {
                        ...column.getHeaderProps(
                          column.getSortByToggleProps({
                            style: {
                              width: column.width,
                              minWidth: column.minWidth,
                            },
                          })
                        ),
                      }
                    : { ...column.getHeaderProps() })}
                >
                  <span>
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <IoCaretDownOutline />
                      ) : (
                        <IoCaretUpOutline />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                  {resize && (
                    <div
                      {...column.getResizerProps()}
                      className={`resizer ${
                        column.isResizing ? "isResizing" : ""
                      }`}
                    />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
