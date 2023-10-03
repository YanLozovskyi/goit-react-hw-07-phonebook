import PropTypes from 'prop-types';
import { StyledNotification } from './Notifications.styled';

export const Notifications = ({ message }) => (
  <StyledNotification>{message}</StyledNotification>
);

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};
