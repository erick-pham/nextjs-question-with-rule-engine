import { format } from "date-fns";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import type { SxProps } from "@mui/material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Scrollbar } from "@/components/SimpleBar";
import type { ReactElement } from "react";

export type Order = {
  amount: number;
  createdAt: number;
  customer: {
    name: string;
  };
  id: string;
  ref: string;
  status: string;
};

export const OverviewLatestOrders = ({
  orders = [],
  sx,
}: {
  orders: Order[];
  sx: SxProps;
}): ReactElement => {
  return (
    <Card sx={sx}>
      <CardHeader title="Latest Orders" />
      <Scrollbar
        sx={{
          flexGrow: 1,
          "& .simplebar-scrollbar:before": {
            background: "neutral.400",
          },
        }}
      >
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell sortDirection="desc">Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order: Order) => {
                const createdAt = format(order.createdAt, "dd/MM/yyyy");

                return (
                  <TableRow hover key={order.id}>
                    <TableCell>{order.ref}</TableCell>
                    <TableCell>{order.customer.name}</TableCell>
                    <TableCell>{createdAt}</TableCell>
                    <TableCell>
                      {/* <SeverityPill color={statusMap[order.status]}>
                        {order.status}
                      </SeverityPill> */}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};
