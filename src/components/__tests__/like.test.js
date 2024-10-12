import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../like";

describe("Like component", () => {
    test('renders initial likes as "Likes: 0"', () => {
        render(<Like />);
        const paragraphElement = screen.getByText(/Likes: 0/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    test("increments likes when Like button is clicked", () => {
        render(<Like />);
        const incrementButton = screen.getByTestId('like-button');
        fireEvent.click(incrementButton);
        const paragraphElement = screen.getByText(/Likes: 1/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    test("decrements likes when Dislike button is clicked", () => {
        render(<Like />);
        const decrementButton = screen.getByTestId('dislike-button');
        fireEvent.click(decrementButton);
        const paragraphElement = screen.getByText(/Likes: -1/i);
        expect(paragraphElement).toBeInTheDocument();
    });
});
