import styled from '@emotion/styled';
import { Image } from '@components/base';
import search from '@assets/image/search.png';
import close from '@assets/image/close.png';
import PropTypes from 'prop-types';

const Toggle = ({ name, id, on, disabled, onClick, ...props }) => {
  const handleChange = (e) => {
    onClick && onClick(e);
  };

  return (
    <ToggleContainer>
      <ToggleInput
        type="checkbox"
        name={name}
        checked={on}
        disabled={disabled}
        onChange={handleChange}
      />
      <ToggleSwitch {...props} style={{ ...props.style }}>
        {on ? (
          <Image alt="close" src={close} width={32} height={32} />
        ) : (
          <Image alt="open" data-id={id} src={search} width={32} height={32} />
        )}
      </ToggleSwitch>
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  on: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: () => {},
};

Toggle.defaultProps = {
  id: null,
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
