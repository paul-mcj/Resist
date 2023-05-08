// next
import { NextPageContext } from "next";
import ErrorPage from "next/error";

interface ErrorProps {
     statusCode: number;
}

const CustomErrorPage = ({ statusCode }: ErrorProps) => {
     return <ErrorPage statusCode={statusCode} />;
};

CustomErrorPage.getInitialProps = ({
     res,
     err,
}: NextPageContext): ErrorProps => {
     const statusCode = res ? res.statusCode! : err ? err.statusCode! : 404;
     return { statusCode };
};

export default CustomErrorPage;
