import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { withThemeProvider } from 'utils';
import Button, { ButtonProps } from '.';

type Props = Partial<ButtonProps>;

const setup = ({
  label = '',
  disabled = false,
  onClick = jest.fn(),
}: Props = {}) =>
  render(
    withThemeProvider(
      <Button label={label} disabled={disabled} onClick={onClick} />,
    ),
  );

const nextButtonDataMock = {
  label: 'Go to next',
};

const prevButtonDataMock = {
  label: 'Go to prev',
  disabled: true,
};

describe('atoms/Button', () => {
  it('should render btn successfully', () => {
    const { getByText } = setup({ ...nextButtonDataMock });

    const btn = getByText(nextButtonDataMock.label);

    expect(btn).toBeInTheDocument();
  });

  it('should render disabled btn', () => {
    const onClickSpy = jest.fn();
    const { getByText } = setup({ ...prevButtonDataMock });

    const btn = getByText(prevButtonDataMock.label);

    expect(btn).toBeDisabled();
    expect(onClickSpy).not.toBeCalled();
  });

  it('should call onClick when btn is clicked', () => {
    const onClickSpy = jest.fn();
    const { getByText } = setup({ ...nextButtonDataMock, onClick: onClickSpy });

    const btn = getByText(nextButtonDataMock.label);
    fireEvent.click(btn);

    expect(onClickSpy).toBeCalledTimes(1);
  });
});
