import ProductPage from "@/pages/product";
import { render, screen } from "@testing-library/react";
import { on } from "events";

jest.mock("next/router", () => {
    return {
        useRouter() {
            return {
                route: "/product",
                pathname: "",
                query: "",
                asPath: "",
                push: jest.fn(),
                events: {
                    on: jest.fn(),
                    off: jest.fn(),
                },
                beforePopState: jest.fn(() => null),
                prefetch: jest.fn(() => null),
                isReady: true,
            };
        },
    };
});

describe("Product Page", () => {
    it("renders the product page", () => {
        const page = render(<ProductPage />);
        expect(page).toMatchSnapshot();
    });
});
