import styled from '@emotion/styled';
import useToggle from '@hooks/useToggle';
import { Image } from '@components/base';
import search from '@assets/image/search.png';
import close from '@assets/image/close.png';
import PropTypes from 'prop-types';

const Toggle = ({ name, on, disabled, onChange, ...props }) => {
  const [checked, toggle] = useToggle(on);

  const handleChange = (e) => {
    toggle();
    onChange && onChange(e);
  };

  return (
    <ToggleContainer {...props}>
      <ToggleInput
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <ToggleSwitch {...props} style={{ ...props.style }}>
        {checked ? (
          <Image alt="close" src={close} width={32} height={32} />
        ) : (
          <Image alt="search" src={search} width={32} height={32} />
        )}
      </ToggleSwitch>
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
  on: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Toggle.defaultProps = {
  on: false,
  disabled: false,
  onChange: () => {},
};

const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`;

const ToggleSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 2px;
  border-radius: 15px;
  box-sizing: border-box;
  opacity: 0.8;
`;

const ToggleInput = styled.input`
  display: none;
`;

export default Toggle;
