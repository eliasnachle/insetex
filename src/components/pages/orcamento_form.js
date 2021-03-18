import React, {useState}        from 'react';
import './form.css';

export default function OrcamentoForm() {
    
    const [form, setForm] = useState({
        name: "",
        tel: "",
        email: "",
        date: "",
        adress: "",
    })
    const [count, setCount] = useState(1)

    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <>
        <div className="container-form">
        <form
        className="orcamento-form" 
        onSubmit={() =>
          alert(
            `Enviado Nome: ${form.name} Telefone: ${form.tel} Email: ${form.email} Data: ${form.date} Endereço: ${form.adress}`
          )
        }
      >          
            <div className="form-steps">
                <div className="content-steps">
                    <div className="step-item">
                        <span className="item-steps">1</span>
                        <span className="text-steps">Dados</span>
                    </div>
                    <div className="step-item">
                        <span className="item-steps">2</span>
                        <span className="text-steps">Características</span>
                    </div>
                    <div className="step-item">
                        <span className="item-steps">3</span>
                        <span className="text-steps">Conclusão</span>
                    </div>
                </div>
            </div>
            <div className="form-content">
            {count === 1 ? (                
            <div className="container-step1">
                        <div className="form-top">
                        <div className="form-group">
                            <label>Nome</label>
                            <input 
                                type="name" 
                                className="orcamento-input"
                                name="name" 
                                onChange={updateForm} 
                                value={form.name} 
                            />    
                        </div>
                        <div className="form-group">                        
                            <label>Telefone</label>
                            <input 
                                type="tel" 
                                className="orcamento-input"
                                name="tel" 
                                onChange={updateForm} 
                                value={form.tel} 
                            />
                        </div>
                    </div>
                    <div className="form-bot">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input 
                                type="email" 
                                className="orcamento-input"
                                name="email" 
                                onChange={updateForm} 
                                value={form.email} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Data</label>
                            <input 
                                type="date" 
                                className="orcamento-input"
                                name="date"
                                onChange={updateForm} 
                                value={form.date} 
                            />
                        </div>
                    </div>
                    <div className="form-bottom">
                            <label>Endereço</label>
                            <input 
                                type="text" 
                                className="orcamento-input" 
                                name="adress" 
                                onChange={updateForm} 
                                value={form.adress} 
                            />
                    </div>
            </div>
            ): null}
            {count === 2 ? ( 
                <div className="container-problems">
                    <div className="form-check">
                        <h2>Qual o problema?</h2>
                        <div className="container-check">
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span> Baratas</span>
                                </label>
                            </div>
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span> Formigas</span>
                                </label>
                            </div>
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span> Ratos</span>
                                </label>
                            </div>
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span> Cupim</span>
                                </label>
                            </div>
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span> Escorpião</span>
                                </label>
                            </div>
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span> Pombos</span>
                                </label>
                            </div>
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span> Pernilongos</span>
                                </label>
                            </div>
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span> Covid</span>
                                </label>
                            </div>
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span> Limpeza de Caixas D' Água</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-check">
                        <h2>Observações</h2>
                        <div className="container-check">
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="form-span"> Alergicos</span>
                                </label>
                            </div>
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="form-span"> Animais</span>
                                </label>
                            </div>
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="form-span"> Crianças</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-check">
                        <h2>Tipo de Local</h2>
                        <div className="container-check">
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="checkbox-residencial"/>
                                    <span className="form-span-local">Residencial</span>
                                </label>
                            </div>
                            <div className="content-check">
                                <label className="form-label">
                                    <input type="checkbox" className="checkbox-comercial"/>
                                    <span className="form-span-local">Residencial</span>
                                </label>
                            </div>
                        </div>
                    </div>
            </div>
            ): null}
            {count === 3 ? (
                <div className="container-step3">
                    <div className="form-top">
                        <div className="form-group">
                            <label>Assunto</label>
                            <input 
                                type="name" 
                                className="orcamento-input"
                                name="subject" 
                                onChange={updateForm} 
                                value={form.subject} 
                            />    
                        </div>
                        <div className="form-group">
                            <label>Área m² <i>valor aproximado</i></label>
                            <input 
                                type="name" 
                                className="orcamento-input"
                                name="area" 
                                onChange={updateForm} 
                                value={form.area}
                            />    
                        </div>
                    </div>
                    <div className="form-bottom">
                            <div className="form-bottom textarea">
                                <label>Mensagem</label>
                                <textarea 
                                    name="message" 
                                    className="orcamento-textarea" 
                                    value={form.textarea}
                                    onChange={updateForm}
                                    cols="30" 
                                    rows="10"
                                />
                            </div>
                        </div>
                        <button type="submit">Enviar</button>
                </div>
            ): null}
            </div>
            </form>
            <div className="form-btns">
            {count === 2 ? ( 
                <button 
                    className="orcamento-prev" 
                    type="submit" 
                    onClick={() => setCount(count - 1)}
                    disabled={count < 2}
                    >
                Voltar</button>
            ): null}
                <button                 
                    className="orcamento-next" 
                    type="submit"
                    onClick={() => setCount(count + 1)}
                    disabled={count > 2}
                    >
                Avançar</button>
            </div>
        </div>
        </>
    );
}