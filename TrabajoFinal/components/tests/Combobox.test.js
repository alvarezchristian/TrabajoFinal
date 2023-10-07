// ComboBox.test.js
import {React} from 'react';
import { render, fireEvent } from "jest";
import {ComboBox} from "../ComboBox";

// Mock de las propiedades necesarias para el ComboBox
const items = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];
const selectedValue = 'option2';
const onValueChange = jest.fn();

test('ComboBox renderiza correctamente', () => {
  const { getByTestId, getByLabelText } = render(
    <ComboBox items={items} selectedValue={selectedValue} onValueChange={onValueChange} />
  );

  // Verifica que el componente ComboBox esté presente
  const comboBox = getByTestId('comboBox');
  expect(comboBox).toBeTruthy();

  // Verifica que los elementos de la lista desplegable estén presentes
  const option1 = getByLabelText('Option 1');
  const option2 = getByLabelText('Option 2');
  const option3 = getByLabelText('Option 3');
  expect(option1).toBeTruthy();
  expect(option2).toBeTruthy();
  expect(option3).toBeTruthy();
});

test('ComboBox llama a la función onValueChange al cambiar el valor', () => {
  const { getByTestId } = render(
    <ComboBox items={items} selectedValue={selectedValue} onValueChange={onValueChange} />
  );

  const comboBox = getByTestId('comboBox');

  // Simula el cambio de valor en la lista desplegable
  fireEvent.changeText(comboBox, 'option3');

  // Verifica que la función onValueChange haya sido llamada con el nuevo valor
  expect(onValueChange).toHaveBeenCalledWith('option3');
});
