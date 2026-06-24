import { COLORS } from "@/constants/ui";
import { Modal, TouchableWithoutFeedback, View } from "react-native";
import {StyleSheet} from "react-native";
import {Todo} from "@/types/todo";
import StyledModal from "@/components/StyledModal";
import StyledText from "@/components/StyledText";
import StyledTextInput from "@/components/StyledTextInput";
import { useState } from "react";
import StyledButton from "@/components/StyledButton";
import React, { useEffect } from "react";

type DeleteTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  id: Todo['id'];
  title: Todo['title'];
  onDeleteTodo: (id: number) => void;
}

const DeleteTodoModal: React.FC<DeleteTodoModalProps> = ({isOpen, onClose, id, title, onDeleteTodo}) => {

const handleDelete = () => {
  onDeleteTodo(id);
  onClose();
};

return (
  <StyledModal isOpen={isOpen} onClose={onClose}>
    <View style={styles.contentContainer}>
      <StyledText variant="heading">Delete Todo "{title}" ?</StyledText>
    <View style={styles.inputContainer}>
      <View style={styles.buttonsContainer}>
        <StyledButton label="Delete" onPress={handleDelete}/>
        <StyledButton label="Cancel" onPress={onClose}/>
      </View>
    </View>

    </View>
  </StyledModal>
)
};


const styles = StyleSheet.create({
    contentContainer: {
        gap: 20,
      },
      inputContainer: {
        minHeight: 60,
      },
      buttonsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'flex-end',
      },
  });

 export default DeleteTodoModal;