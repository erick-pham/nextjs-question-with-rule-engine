import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import MainLayout from "@/components/MainLayout";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Erick Pham - Questionnaires",
  description: "Generated by create next app",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>
        <ConfigProvider
        // theme={{
        //   token: {
        //     colorPrimary: "rgb(23, 162, 184)",
        //   },
        // }}
        >
          <MainLayout>{children}</MainLayout>
        </ConfigProvider>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
