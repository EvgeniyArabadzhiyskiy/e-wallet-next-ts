"use client"


import {  ModalState, useGlobalState } from "../../GlobalProvider/GlobalProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

export const ButtonExit = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;

  color: ${p => p.theme.colors.secondaryText};
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m};

  padding-right: 0;

  @media ${p => p.theme.media.small} {
    padding-left: 8px;
  }

  @media ${p => p.theme.media.medium} {
    padding-left: 12px;
    margin-left: 12px;
    border-left: 1px solid #bdbdbd;
  }

  &:hover {
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.15);
  }
  &:focus {
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.15);
  }
`;

export const Text = styled.span`
  @media ${p => p.theme.media.small} {
    display: none;
  }
  margin-left: 8px;
`;

export default function LogoutBtn({
  modalName,
  type,
}: {
  modalName: string;
  type: string;
}) {
  const { isModalOpen, setIsModalOpen } = useGlobalState();

  const onToggleModal = () => {
    setIsModalOpen((prev: ModalState) => {
      return {
        ...prev,
        [modalName]: !prev[modalName],
      };
    });
  };

//   console.log("re-render");

  if (type === "cancel") {
    return (
      <button type="button" onClick={onToggleModal}>
        Cancel
      </button>
    );
  }

  if (type === "exit") {
    return (
      <ButtonExit type="button" onClick={onToggleModal}>
        <FontAwesomeIcon icon={faDoorOpen} width={30} height={30} />
        <Text>Exit</Text>
      </ButtonExit>
    );
  }
}
