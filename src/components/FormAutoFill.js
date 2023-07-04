import React, {useState} from "react";
import PerfumesShortData from './PerfumesShortData'


function FillingExample(props) {


    // хуки для нажатия на кнопки
    const [pressed, setPressed] = useState(false);
    const [pressed2, setPressed2] = useState(true);

    const [pressed3, setPressed3] = useState(false);
    const [pressed4, setPressed4] = useState(true);

    const [pressed5, setPressed5] = useState(false);
    const [pressed6, setPressed6] = useState(true);

    const [optionValue, setOptionValue] = useState(15);
    
    // переменные для нажатия на кнопки 
    const setPressedState = current => {
        setPressed(current => !current);
        setPressed2(current => !current);
      };

      const setPressedState2 = current => {
        setPressed3(current => !current);
        setPressed4(current => !current);
      };

      const setPressedState3 = current => {
        setPressed5(current => !current);
        setPressed6(current => !current);
      };

      // блок ф-ий для добавления 15р при выборе доставки курьером
      let clickNum = 0;
      const [deliveryCost, setDeliveryCost] = useState(15);
      const addFullCost = current => {
        console.log(clickNum)
        if (optionValue >= 0)
        setOptionValue(current => pressed ? current+15 : current-15);
      }
      const setFullState3 = current => {
        addFullCost();
        setPressedState();
      }
      const setFullState4 = current => {
        addFullCost();
        setPressedState();
      }




  // react-рефы для связи с элементами DOM
  const SurnameField = React.useRef(null);
  const EmailField = React.useRef(null);
  const NumberField = React.useRef(null);
  const OptionField = React.useRef(null);
      

  // автозаполнение полей
  const FieldAutoFilling = () => {
    const form_option = document.getElementsByClassName("form-option")[0];
    // current указывает на текущий элемент ДОМ (в нашем случае - input)
    SurnameField.current.value = "Повшок"
    EmailField.current.value = "sashapovshok@mail.com"
    NumberField.current.value = "+375 (29) 123-45-67"
    form_option.textContent = "VERSACE bright crystal"
  };

  const FieldClear = () => {
    const form_option = document.getElementsByClassName("form-option")[0];
    // current указывает на текущий элемент ДОМ (в нашем случае - input)
    SurnameField.current.value = ""
    EmailField.current.value = ""
    NumberField.current.value = ""
    form_option.textContent = "Выбрать парфюм"
  };

      return (
        <>
                    <form id="contatcs-form" className="contacts-form">
                    <div className="form-personal">
                        <div className="form-personal-single">
                            <label className="form-personal-label" for="input_name">Фамилия*</label>
                            <input data-testid="surname" ref={SurnameField} className="form-personal-input" type="text" id="input_name" placeholder='Повшок' required/>
                        </div>
                        <div className="form-personal-single">
                            <label className="form-personal-label" for="input_mail">Email*</label>
                            <input data-testid="email" ref={EmailField} className="form-personal-input" type="text" id="input_mail" placeholder='example@mail.ru' required/>
                        </div>
                        <div className="form-personal-single">
                            <label className="form-personal-label" for="input_phone">Телефон*</label>
                            <input data-testid="number" ref={NumberField} className="form-personal-input" type="text" id="input_phone" placeholder="+375 (29) 123-45-67" required/>
                        </div>
                    </div>
                    <div className="form-select-container">
                        <label className="form-personal-label" for="form_select">Выбор парфюмерии*</label>
                        <select className="form-select" id="form-select" 
                        onChange={(event) => setOptionValue(current => Number(event.target.value) + current)} >
                            <option className="form-option">Выбрать парфюм</option>
                            {PerfumesShortData.map((par) => (
                                <option ref={OptionField} value={par.cost} className="form-option">{par.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="autofilling-container">
                        <input 
                        type="button"
                        value="Автозаполнение"
                        onClick={FieldAutoFilling}
                        className="autofilling-button"
                        />
                        <input 
                        type="button"
                        value="Очистить" 
                        onClick={FieldClear}
                        className="autofilling-button"
                        />
                    </div>
                    
                </form>

                <div className="delivery-method-container">
                    <h3 className="delivery-h3">Способ доставки *</h3>
                    <div className="delivery-buttons-container">
                        <div className="delivery-buttons-container">
                            <button onClick={setFullState3} style={{backgroundColor: pressed ? '#9B5A81' : '#772958'}} className="delivery-button">
                                <h3 className="delivery-button-h3">Доставка курьером</h3>
                                <p className="delivery-button-p">Стоимость 15р</p>
                            </button>
                            <button onClick={setFullState4} style={{backgroundColor: pressed2 ? '#9B5A81' : '#772958'}}  className="delivery-button">
                                <h3 className="delivery-button-h3">Самовывоз</h3>
                                <p className="delivery-button-p">Завтра и позже, бесплатно</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="delivery-method-container">
                    <h3 className="delivery-h3">Оплата *</h3>
                    <div className="delivery-buttons-container">
                        <div className="delivery-buttons-container">
                            <button onClick={setPressedState2} style={{backgroundColor: pressed3 ? '#9B5A81' : '#772958'}} className="delivery-button">
                                <h3 className="delivery-button-h3">При получении</h3>
                                <p className="delivery-button-p">Наличными, банковской картой</p>
                            </button>
                            <button onClick={setPressedState2} style={{backgroundColor: pressed4 ? '#9B5A81' : '#772958'}}  className="delivery-button">
                                <h3 className="delivery-button-h3">Онлайн на сайте</h3>
                                <p className="delivery-button-p">Банковской картой, картой рассрочки</p>
                            </button>
                        </div>
                    </div>

                    <div className="delivery-buttons-container delivery-buttons-container2">
                        <div className="delivery-buttons-container">
                            <button onClick={setPressedState3} style={{backgroundColor: pressed5 ? '#9B5A81' : '#772958'}} className="delivery-button">
                                <h3 className="delivery-button-h3">Рассрочка от банка</h3>
                                <p className="delivery-button-p">Рассчитайте условия и оформите рассрочку от банка</p>
                            </button>
                            <button onClick={setPressedState3} style={{backgroundColor: pressed6 ? '#9B5A81' : '#772958'}}  className="delivery-button">
                                <h3 className="delivery-button-h3">Кредит от банка</h3>
                                <p className="delivery-button-p">Рассчитайте условия и оформите кредит от банка</p>
                            </button>
                        </div>
                    </div>
                    <div className="delivery-approval">
                        <input type="checkbox" className="delivery-approval-input"/>
                        <p className="delivery-approval-text">
                            Я принимаю договор оферты, политику конфиденциальности 
                            и правила обработки персональных данных
                        </p>
                    </div>

                    
                    <div className="delivery-cost-container">
                        <h4 className="delivery-cost-h4">К оплате</h4>
                        <h3 className="delivery-cost-h3">{optionValue.toFixed(1)}р</h3>
                        <input form="contatcs-form" className="delivery-cost-button" type="submit" value="Оформить заказ" />
                    </div>

                </div>
        </>
      );
      }

  export default FillingExample