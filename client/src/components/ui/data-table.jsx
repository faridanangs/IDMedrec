'use client'
import React, { useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Spinner } from "@nextui-org/react";

export function DataTable({ data }) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 21;

  const pages = useMemo(() => {
    return data.length ? Math.ceil(data.length / rowsPerPage) : 0;
  }, [data.length, rowsPerPage]);

  const loadingState = data.length === 0 ? "loading" : "idle";

  return (
    <Table
      aria-label="Example table with client async pagination"
      bottomContent={
        pages > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        ) : null
      }
    >
      <TableHeader>
        <TableColumn key="field">Field</TableColumn>
        <TableColumn key="information">Information</TableColumn>
      </TableHeader>
      <TableBody
        items={data.slice((page - 1) * rowsPerPage, page * rowsPerPage)}
        loadingContent={<Spinner />}
        loadingState={loadingState}
      >
        {(item, index) => (
          <TableRow key={`${item.field}-${index}`}>
            <TableCell>{item.field}</TableCell>
            <TableCell>{item.information}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
