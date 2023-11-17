import { render, fireEvent, screen } from '@testing-library/react';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('renders without crashing', () => {
    const onClickAction = jest.fn();

    render(
      <Accordion
        id="1"
        onClickAction={onClickAction}
        title="Test Accordion"
        urlImage="test-url"
      >
        Test Children
      </Accordion>
    );

    expect(screen.getByText('Test Accordion')).toBeInTheDocument();
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });

  it('calls onClickAction when clicked', () => {
    const onClickAction = jest.fn();

    render(
      <Accordion
        id="1"
        onClickAction={onClickAction}
        title="Test Accordion"
        urlImage="test-url"
      >
        Test Children
      </Accordion>
    );

    fireEvent.click(screen.getByText('Test Accordion'));
  });
});