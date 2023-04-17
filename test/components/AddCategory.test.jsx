import { AddCategory } from "../../src/components/AddCategory"
import { fireEvent, render, screen } from "@testing-library/react";

describe('Pruebas en <AddCategory />', () => {
  test('Debe cambiar el valor de la cada de texto', () => {

    render( <AddCategory onNewCategory={ () => {} } /> );
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: 'Saitama'} });

    expect( input.value ).toBe('Saitama');
    screen.debug();
  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory } />);

      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      //Evaluando si existe un valor
      fireEvent.input( input, { target: { value: inputValue } });

      //Evaluando si se ejecuta la funcion onSubmit
      fireEvent.submit( form );
      //screen.debug();
      expect( input.value ).toBe('');

      expect( onNewCategory ).toHaveBeenCalled();
      expect( onNewCategory ).toHaveBeenCalledTimes(1);
      expect(onNewCategory).toHaveBeenCalledWith( inputValue );
  });

  test("No debe llamar el onNewCategory si el input está vació", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit( form );

    expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
    expect( onNewCategory ).not.toHaveBeenCalled();
  });


})