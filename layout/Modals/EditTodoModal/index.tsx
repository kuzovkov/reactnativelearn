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

type EditTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (id: Todo['id'], title: string) => void;
  title: Todo['title'];
  id: Todo['id'];
}

const EditTodoModal: React.FC<EditTodoModalProps> = ({isOpen, onClose, onUpdate, title, id}) => {
const [updatedTitle, setUpdatedTitle] = useState(title);
const [inputError, setInputError] = useState(false);

const handleUpdate = () => {
  if (!updatedTitle.trim()) {
    setInputError(true);
    return;
  }
  console.log('handleUpdate', updatedTitle);
  onUpdate(id, updatedTitle);
  onClose();
  setInputError(false);
  
};

useEffect(() => {
  if (inputError && updatedTitle.trim()) {
    setInputError(false);
  }
}, [updatedTitle]);

useEffect(() => {
  if (isOpen) {
    setUpdatedTitle(title);
    setInputError(false);
    }
}, [isOpen]);


return (
  <StyledModal isOpen={isOpen} onClose={onClose}>
    <View style={styles.contentContainer}>
      <StyledText variant="heading">Edit Todo</StyledText>
    <View style={styles.inputContainer}>
      <StyledTextInput value={updatedTitle} onChangeText={setUpdatedTitle} placeholder="Enter todo title" isError={inputError}>
      </StyledTextInput>
      <View style={styles.buttonsContainer}>
        <StyledButton label="Update" onPress={handleUpdate}/>
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

 export default EditTodoModal;