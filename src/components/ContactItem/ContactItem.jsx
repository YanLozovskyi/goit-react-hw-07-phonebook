import { StyledContactItem, DeleteButton } from './ContactItem.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/contactsOperations';
import { selectIsDeleting } from 'redux/selectors';

export const ContactItem = ({ name, id, phone }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);
  const [deleteButtonLabel, setDeleteButtonLabel] = useState('Delete');

  const handleDeleteButtonClick = id => {
    setDeleteButtonLabel('Deleting...');
    toast.info(`${name} was deleted from your contact list.`);
    dispatch(deleteContact(id)).then(() => {
      setDeleteButtonLabel('Delete');
    });
  };

  return (
    <>
      <StyledContactItem>
        {name}: {phone}
        <DeleteButton
          type="button"
          onClick={() => handleDeleteButtonClick(id)}
          disabled={isDeleting}
        >
          {deleteButtonLabel}
        </DeleteButton>
      </StyledContactItem>
    </>
  );
};
