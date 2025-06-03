import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../NotFound';
import { MemoryRouter } from 'react-router-dom'; // Needed because NotFound contains <Link>

describe('NotFound Component', () => {
  test('renders the 404 title and subtitle message', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    // Ant Design's <Result title="404"> will render this text.
    // It's often within a <div> with class ant-result-title.
    // We'll use a text matcher that is flexible enough.
    // Using a function to get more specific elements if simple text match is too broad
    const titleElement = screen.getByText((content, element) => {
      return element.classList.contains('ant-result-title') && content.trim() === "404";
    });
    expect(titleElement).toBeInTheDocument();

    // The subTitle prop
    const subTitleElement = screen.getByText("Sorry, the page you visited does not exist.");
    expect(subTitleElement).toBeInTheDocument();

    // Check for the "Back Home" button text
    const backHomeButton = screen.getByRole('button', { name: /back home/i });
    expect(backHomeButton).toBeInTheDocument();
  });
});
