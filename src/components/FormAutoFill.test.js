import { fireEvent, render, screen } from '@testing-library/react';
import FormAutoFill from './FormAutoFill';


describe(FormAutoFill, () => {

    // проверяем чтобы все поля в форме компонента FormAutoFill автозаполнялись при нажатии на кнопку автозаполнения 
    it("FormAutoFill component correct displays info when AutoFilling button is pressed", () => {
        const { getByTestId } = render(<FormAutoFill />); // рендерим наш компонент                                                                                         
        const Surname = getByTestId("surname").value;   // получаем наши данные
        const Email = getByTestId("email").value;                        
        const Number = getByTestId("number").value; 

        // сначала проверяем чтобы все поля были пустыми
        expect(Surname).toEqual("");                                     
        expect(Email).toEqual("");
        expect(Number).toEqual("");

        const autofill_button = document.getElementsByClassName("autofilling-button")[0];

        fireEvent.click(autofill_button);  // нажимаем на кнопку автозаполнения

        const Surname2 = getByTestId("surname").value;  // получаем набор новых данных
        const Email2 = getByTestId("email").value;                        
        const Number2 = getByTestId("number").value; 

        expect(Surname2).toEqual("Повшок");      // проверяем чтобы все поля заполнялись правильно                               
        expect(Email2).toEqual("sashapovshok@mail.com");
        expect(Number2).toEqual("+375 (29) 123-45-67");

    })


    // проверяем чтобы все поля в форме компонента FormAutoFill очищалсиь при нажатии на кнопку Очистить 
    it("FormAutoFill component displays correct info when ClearFields button is pressed", () => {
        const { getByTestId } = render(<FormAutoFill />);                                                                                          
        const Surname = getByTestId("surname").value;    
        const Email = getByTestId("email").value;                        
        const Number = getByTestId("number").value; 

        // сначала проверяем чтобы все поля были пустыми
        expect(Surname).toEqual("");                                     
        expect(Email).toEqual("");
        expect(Number).toEqual("");

        const autofill_button = document.getElementsByClassName("autofilling-button")[0];

        fireEvent.click(autofill_button); // опять нажимаем на кнопку автозаполнения

        const Surname2 = getByTestId("surname").value; 
        const Email2 = getByTestId("email").value;                        
        const Number2 = getByTestId("number").value; 

        expect(Surname2).toEqual("Повшок");                                     
        expect(Email2).toEqual("sashapovshok@mail.com");
        expect(Number2).toEqual("+375 (29) 123-45-67");


        const clear_button = document.getElementsByClassName("autofilling-button")[1];

        fireEvent.click(clear_button);  // теперь нажимаем на кнопку очистки

        const Surname3 = getByTestId("surname").value; 
        const Email3 = getByTestId("email").value;                        
        const Number3 = getByTestId("number").value; 

        expect(Surname3).toEqual("");                                     
        expect(Email3).toEqual("");
        expect(Number3).toEqual("");
    })


})
