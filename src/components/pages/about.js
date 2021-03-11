import React        from 'react';
import { Link }     from 'react-router-dom';
import {ClientsImg} from './ClientsImg';
import CountUp from 'react-countup';


export default function About() {
    return(
        <>
        <div className="container-about">
            <div className="content-about">
                <h1>História</h1>
                <p>{` Singularizados, remodelamos o sistema atual no `}<strong>controle de pragas urbanas</strong>{`, visto que trazemos três décadas de experiência, possuímos as mais novas tecnologias
                    para detecção das pragas e aplicação dos produtos, aplicamos metodologia de controle e extermínio adquiridos com pesquisas em laboratório próprio e utilizamos os 
                    melhores produtos disponíveis e licenciados do mercado brasileiro visando o `}<strong>combate eficaz das pragas e vetores urbanos</strong>{`.

                    Filiados e licenciados aos órgãos e instituições competentes, prestamos serviços em conformidade com as diretrizes estabelecidas a nós pela 
                    `}<strong>O.M.S. (Organização Mundial da Saúde)</strong> {`,`}<strong>ANVISA (Agencia Nacional de Vigilância Sanitária)</strong>{` e `}<strong>ABNT (Associação Brasileira de Normas Técnicas)</strong>{`. 

                    Nossas equipes administrativa, laboratorial e operacional são altamente treinadas e, assim, apresentamos sempre uma excelente experiência no cumprimento dos nossos 
                    contratos. Orgulhamo-nos de proporcionarmos um dos mais eficientes programas de assistência gestora para o plano de saúde ambiental, com alto custo beneficio e 
                    metodologia que requer reduzidas mudanças em seu ambiente. Buscamos a satisfação plena e íntegra dos nossos clientes em todos os quesitos, com transparência e 
                    sempre seguindo o nosso lema: “Serviços com `}<strong>Eficiência</strong>{`, `}<strong>Eficácia</strong>{` e`} <strong> Efetividade</strong>{`”, oferecemos o que realmente é necessário em cada caso específico, estudando-o para 
                    reduzir significativamente os gastos com produtos e serviços desnecessários, garantindo a solução no controle e `}<strong>eliminação das pragas e vetores</strong>{`.`}</p>
            </div>
            <div className="content-mvv">
                <div className="mvv-child">
                    <div className="mvv-svg">
                        <svg id="mission-svg" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="6em"><title>target</title>
                            <path d="M445.66,123.82a18.11,18.11,0,0,0,12.83-5.32l50.27-50.26a11.06,11.06,0,0,0-7.12-18.84l-26.75-1.68,17.45-17.46a7.5,7.5,0,0,0-10.6-10.6L464.28,37.11,462.6,10.36a11.06,11.06,0,0,0-18.84-7.12L393.49,53.51a18.13,18.13,0,0,0-5.27,14L389.94,95a236,236,0,0,0-153.3-56.29C105.85,38.72,0,144.56,0,275.36a236,236,0,0,0,61.56,159.2,7.5,7.5,0,1,0,11.09-10.1A221.06,221.06,0,0,1,15,275.36C15,153.15,114.43,53.72,236.64,53.72a222,222,0,0,1,151.48,59.56L353.89,147.5a173,173,0,0,0-117.25-45.8C140.89,101.7,63,179.61,63,275.36a173.81,173.81,0,0,0,19.23,79.38h0A173.83,173.83,0,0,0,236.64,449c82,0,153.37-57.94,170.05-138.34A7.5,7.5,0,1,0,392,307.62C376.81,380.86,311.48,434,236.64,434A158.27,158.27,0,0,1,95.55,347.86h0A156.58,156.58,0,0,1,78,275.36c0-87.48,71.17-158.66,158.65-158.66a158.06,158.06,0,0,1,106.65,41.4L309.37,192A110.81,110.81,0,1,0,320,202.63l33.92-33.92a157.93,157.93,0,0,1,41.39,105.72,7.51,7.51,0,0,0,7.5,7.46h0a7.49,7.49,0,0,0,7.45-7.54A172.88,172.88,0,0,0,364.51,158.1l34.22-34.23a221.17,221.17,0,0,1,59.55,151.49C458.28,397.57,358.85,497,236.64,497a222.11,222.11,0,0,1-139.4-49.32,7.5,7.5,0,1,0-9.44,11.66A237.19,237.19,0,0,0,236.64,512c130.79,0,236.64-105.84,236.64-236.64a234.68,234.68,0,0,0-46.54-141Q422,128,416.91,122.05c29.41,1.85,27.82,1.77,28.75,1.77ZM332.31,275.36a95.79,95.79,0,1,1-33.57-72.71l-34.13,34.13a47.75,47.75,0,1,0,10.61,10.61l34.13-34.13A95.27,95.27,0,0,1,332.31,275.36Zm-101,5.3a7.49,7.49,0,0,0,10.6,0l22.49-22.48a32.7,32.7,0,1,1-10.61-10.61l-22.48,22.49a7.49,7.49,0,0,0,0,10.6ZM403.19,66.54a3.11,3.11,0,0,1,.91-2.42L448.18,20l2,31.21L405.06,96.34Zm12.47,40.4,45.09-45.08,31.21,2L447.88,107.9a3.11,3.11,0,0,1-2.42.91Z" transform="translate(0 0)"/>
                        </svg>
                    </div>
                    <div className="mvv-text">
                        <h2>Missão</h2>
                        <p>
                        {`Contribuir para o conforto, higiene, 
                        saúde e a melhoria da qualidade
                        patrimonial dos nossos consumidores.
                        Nós buscamos ser referência
                        em nosso mercado, proporcionando
                        ambientes limpos e sustentáveis,
                        e praticando preços competitivos.
                        Valores reconhecidos por clientes, 
                        colaboradores e parceiros.`}
                        </p>
                    </div>
                </div>
                <div className="mvv-child">
                    <div className="mvv-svg">
                        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 360" width="6em" ><title>eye</title>
                            <path d="M203.07,258.93a10,10,0,1,0,0,14.14A10,10,0,0,0,203.07,258.93Z" transform="translate(0 -76)"/><path d="M256,276a30,30,0,1,0,30,30A30,30,0,0,0,256,276Zm0,40a10,10,0,1,1,10-10A10,10,0,0,1,256,316Z" transform="translate(0 -76)"/><path d="M256,226a79.38,79.38,0,0,0-32.12,6.71,10,10,0,0,0,8,18.31A60,60,0,1,1,196,306c0-.34,0-.68,0-1a10,10,0,0,0-20-.46c0,.5,0,1,0,1.48a80,80,0,1,0,80-80Z" transform="translate(0 -76)"/><path d="M256,76a10,10,0,0,0-10,10v60a10,10,0,0,0,20,0V86A10,10,0,0,0,256,76Z" transform="translate(0 -76)"/><path d="M144.28,150.14l-42.42-42.42a10,10,0,1,0-14.14,14.14l42.42,42.42a10,10,0,0,0,14.14-14.14Z" transform="translate(0 -76)"/><path d="M424.28,107.72a10,10,0,0,0-14.14,0l-42.42,42.42a10,10,0,0,0,14.14,14.14l42.42-42.42A10,10,0,0,0,424.28,107.72Z" transform="translate(0 -76)"/><path d="M509.49,307.71C446,235.79,351.65,176,256,176S66,235.81,2.51,307.71A10,10,0,1,0,17.5,321q3.2-3.61,6.52-7.21C73.43,388.41,163,436,256,436s182.57-47.59,232-122.26q3.31,3.58,6.52,7.21a10,10,0,1,0,15-13.24ZM256,416c-87.92,0-172.47-45.68-217.69-117,35.63-34.91,118-103,217.69-103s182.06,68.11,217.69,103C428.47,370.32,343.92,416,256,416Z" transform="translate(0 -76)"/>
                        </svg>
                    </div>
                    <div className="mvv-text">
                        <h2>Visão</h2>
                        <p>
                        {`Contribuir para o conforto, higiene, 
                        saúde e a melhoria da qualidade
                        patrimonial dos nossos consumidores.
                        Nós buscamos ser referência
                        em nosso mercado, proporcionando
                        ambientes limpos e sustentáveis,
                        e praticando preços competitivos.
                        Valores reconhecidos por clientes, 
                        colaboradores e parceiros.`}
                        </p>
                    </div>
                </div>
                <div className="mvv-child">
                    <div className="mvv-svg">
                        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 511.94" width="6em" ><title>diamond</title>
                        <path d="M510.36,215.57l-82-125A10,10,0,0,0,420,86H92.38A10,10,0,0,0,84,90.53L1.91,215.18a9.95,9.95,0,0,0,.57,12.46L44.1,275.17a10,10,0,0,0,15-13.18l-27.1-30.94h134.5L234.14,461.8l-76.38-87.21a10,10,0,0,0-15,13.18L248.51,508.56a10,10,0,0,0,15,0L376.18,379.93a10,10,0,1,0-15-13.18l-83.21,95,67.58-230.74H480l-62.19,71a10,10,0,1,0,15.05,13.17l76.7-87.6A10,10,0,0,0,510.36,215.57ZM28.57,211.05l63.79-96.82,63.49,96.82Zm82.32-105H237.51L174.2,202.57ZM256,114.26l63.48,96.79h-127Zm0,351.14L187.39,231.05H324.67Zm82-262.58L274.54,106h127Zm18.52,8.23L420,114.26l63.48,96.79Z" transform="translate(0 -0.03)"/><path d="M157.19,327a46.84,46.84,0,0,1-46.78-46.78,10,10,0,0,0-20,0A46.83,46.83,0,0,1,43.63,327a10,10,0,0,0,0,20,46.82,46.82,0,0,1,46.78,46.77,10,10,0,0,0,20,0A46.83,46.83,0,0,1,157.19,347a10,10,0,0,0,0-20Zm-56.78,31.66A67.2,67.2,0,0,0,78.75,337a67.23,67.23,0,0,0,21.66-21.67A67.33,67.33,0,0,0,122.07,337,67.2,67.2,0,0,0,100.41,358.68Z" transform="translate(0 -0.03)"/><path d="M502,40a30,30,0,0,1-30-30,10,10,0,1,0-20,0,30,30,0,0,1-30,30,10,10,0,0,0,0,20,30,30,0,0,1,30,30,10,10,0,1,0,20,0,30,30,0,0,1,30-30,10,10,0,0,0,0-20Zm-40,20a51,51,0,0,0-10-10,50.7,50.7,0,0,0,10-10,50.17,50.17,0,0,0,10,10A50.17,50.17,0,0,0,462,60.05Z" transform="translate(0 -0.03)"/><path d="M402.78,335.37a10,10,0,1,0,2.93,7.07A10,10,0,0,0,402.78,335.37Z" transform="translate(0 -0.03)"/>
                        </svg>
                    </div>
                    <div className="mvv-text">
                        <h2>Valores</h2>
                        <p>
                        {`Contribuir para o conforto, higiene, 
                        saúde e a melhoria da qualidade
                        patrimonial dos nossos consumidores.
                        Nós buscamos ser referência
                        em nosso mercado, proporcionando
                        ambientes limpos e sustentáveis,
                        e praticando preços competitivos.
                        Valores reconhecidos por clientes, 
                        colaboradores e parceiros.`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-info">
            <div className="content-info">
                <div className="info-item">
                    <div className="info-svg">
                        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="4.5em">
                            <title>group</title>
                            <path d="M262.81,494.93a10,10,0,1,0,2.93,7.07A10.08,10.08,0,0,0,262.81,494.93Z"/><path d="M458.56,327.07l-33.36-8V305.87a66,66,0,0,0,30.85-55.82V212.79a66,66,0,0,0-115.38-43.73,88.17,88.17,0,0,0-84.57-63.62h0a88.15,88.15,0,0,0-84.61,63.8A66,66,0,0,0,56,212.79v37.26A66,66,0,0,0,86.8,305.87V319.1l-33.36,8A69.4,69.4,0,0,0,0,394.78V462a10,10,0,0,0,10,10H90v30a10,10,0,0,0,10,10H209.67a10,10,0,0,0,0-20H165V448a10,10,0,0,0-20,0v44H110V446.88a72.81,72.81,0,0,1,56-71l49.18-11.79,31.65,72a10,10,0,0,0,9.15,6h0a10,10,0,0,0,9.15-6l31.62-71.89,49,11.71a72.8,72.8,0,0,1,56.06,71v11.16a10.07,10.07,0,0,0,0,7.82V492H367V448a10,10,0,0,0-20,0v44H298a10,10,0,0,0,0,20H411.83a10,10,0,0,0,10-10V472H502a10,10,0,0,0,10-10V394.78A69.4,69.4,0,0,0,458.56,327.07ZM390.05,166.79a46.05,46.05,0,0,1,46,46v3.48h-28.6a123.59,123.59,0,0,1-61.55-16.43A46.07,46.07,0,0,1,390.05,166.79Zm-46,81.63c0-1,.06-26.89.06-26.89a143.5,143.5,0,0,0,63.34,14.74h28.6v13.78a46,46,0,0,1-92,0v-1.63Zm-156-55a68,68,0,1,1,136,0v1.3L287,172.94a10,10,0,0,0-12.73,2.2,75.54,75.54,0,0,1-58,27.07H188.1ZM76,215.26v-2.48a46,46,0,0,1,90.15-12.94,123.59,123.59,0,0,1-61.55,16.43H76Zm0,34.79V236.27h28.6A143.56,143.56,0,0,0,168,221.5v28.55a46,46,0,0,1-92,0ZM90,446.88V452H60V407.57a10,10,0,0,0-20,0V452H20V394.78a49.45,49.45,0,0,1,38.09-48.26L89.79,339l20.68,49.56A92.8,92.8,0,0,0,90,446.88Zm32-82.79-15.19-36.38q0-.34,0-.72V314.28a65.65,65.65,0,0,0,30.24,0v12.07c0,.19,0,.38,0,.57s0,.62.06.94Zm39.36-7.68a95,95,0,0,0-16.91,5.81l9.74-23.32,31.7,7.6a50.5,50.5,0,0,1,7.18,2.31ZM211,335.57a69.06,69.06,0,0,0-20.44-8.52L157,319V305.91a66.41,66.41,0,0,0,20.67-20.6A88.61,88.61,0,0,0,211,320.85Zm70,14.84L256,407.2l-25-56.9V329.68a88,88,0,0,0,50,.09v20.64ZM256.1,313.35a68.08,68.08,0,0,1-68-68V222.21h28.14a95.44,95.44,0,0,0,67.59-27.94l40.22,23.63v29.79A68.09,68.09,0,0,1,256.1,313.35ZM300.93,321h0a88.59,88.59,0,0,0,33.48-35.56A66.44,66.44,0,0,0,355,305.91V319l-33.47,8a69.38,69.38,0,0,0-20.56,8.59V321Zm49.48,35.4-31.62-7.55a49,49,0,0,1,7.36-2.39l31.62-7.58,9.78,23.43A93.94,93.94,0,0,0,350.41,356.44ZM374.89,328a10.15,10.15,0,0,0,.07-1.1V314.29a65.65,65.65,0,0,0,30.24,0V327c0,.19,0,.36,0,.54L390,364.09ZM492,452H472V407.57a10,10,0,1,0-20,0V452H421.83v-5.07a92.8,92.8,0,0,0-20.44-58.3l20.75-49.7,31.77,7.59A49.45,49.45,0,0,1,492,394.78Z"/><path d="M229.53,234.18a10,10,0,1,0,2.93,7.07A10.08,10.08,0,0,0,229.53,234.18Z"/><path d="M296.4,234.18a10,10,0,1,0,2.93,7.07A10.08,10.08,0,0,0,296.4,234.18Z"/><path d="M275.25,267.84a10,10,0,0,0-14.15,0,7.58,7.58,0,0,1-10.72,0A10,10,0,1,0,236.24,282a27.63,27.63,0,0,0,39,0A10,10,0,0,0,275.25,267.84Z"/><path d="M413.48,54h-6.86a10,10,0,0,0,0,20h6.86a10,10,0,0,0,0-20Z"/><path d="M462,54h-6.86a10,10,0,0,0,0,20H462a10,10,0,0,0,0-20Z"/><path d="M434.31,74.83a10,10,0,0,0-10,10v6.86a10,10,0,0,0,20,0V84.83A10,10,0,0,0,434.31,74.83Z"/><path d="M434.31,26.31a10,10,0,0,0-10,10v6.86a10,10,0,1,0,20,0V36.31A10,10,0,0,0,434.31,26.31Z"/><path d="M56.3,54H49.44a10,10,0,0,0,0,20H56.3a10,10,0,0,0,0-20Z"/><path d="M104.82,54H98a10,10,0,1,0,0,20h6.86a10,10,0,0,0,0-20Z"/><path d="M77.13,74.83a10,10,0,0,0-10,10v6.86a10,10,0,0,0,20,0V84.83A10,10,0,0,0,77.13,74.83Z"/><path d="M77.13,26.31a10,10,0,0,0-10,10v6.86a10,10,0,0,0,20,0V36.31A10,10,0,0,0,77.13,26.31Z"/><path d="M256,38.09a10,10,0,0,0-10,10V74.4a10,10,0,0,0,20,0V48.09A10,10,0,0,0,256,38.09Z"/><path d="M263.07,2.93A10,10,0,0,0,246,10a10,10,0,1,0,17.07-7.07Z"/><path d="M221,40.12,206.32,25.49a10,10,0,0,0-14.14,14.14l14.63,14.63A10,10,0,0,0,221,40.12Z"/><path d="M319.82,24.93a10,10,0,0,0-14.14,0L290.55,40.06A10,10,0,0,0,304.7,54.2l15.12-15.12A10,10,0,0,0,319.82,24.93Z"/>
                        </svg>
                    </div>
                    <div className="line"></div>
                    <div className="info-text">
                        <h3>+10<span>.000</span></h3>
                        <span>Clientes</span>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-svg">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 484.8 512" width="4.5em">
                            <title>bar-chart</title>
                            <path d="M488.4,492H466.47V173.54a26.92,26.92,0,0,0-26.89-26.89h-49a26.91,26.91,0,0,0-26.88,26.89V492H308V317.83a26.92,26.92,0,0,0-26.89-26.89h-49a26.91,26.91,0,0,0-26.88,26.89V492H149.51V401.8a26.92,26.92,0,0,0-26.89-26.89h-49A26.91,26.91,0,0,0,46.72,401.8V492H23.6a10,10,0,0,0,0,20H488.4a10,10,0,0,0,0-20Zm-358.9,0H66.72V401.8a6.89,6.89,0,0,1,6.88-6.89h49a6.89,6.89,0,0,1,6.88,6.89V492ZM288,492H225.2V317.83a6.89,6.89,0,0,1,6.88-6.89h49a6.89,6.89,0,0,1,6.88,6.89Zm158.49,0H383.68V173.54a6.89,6.89,0,0,1,6.88-6.89h49a6.9,6.9,0,0,1,6.89,6.89V492Z" transform="translate(-13.6)"/><path d="M466.44,10.52A10,10,0,0,0,456,0l-.48,0H395a10,10,0,0,0,0,20h37.35l-98.85,98.86L296.19,81.58a10,10,0,0,0-14.15,0L102.27,261.35a10,10,0,0,0,14.15,14.14l172.69-172.7,37.28,37.28a10,10,0,0,0,14.15,0L446.47,34.14V68a10,10,0,1,0,20,0V11C466.47,10.84,466.45,10.68,466.44,10.52Z" transform="translate(-13.6)"/><circle cx="62.04" cy="303.31" r="10"/>
                        </svg>
                    </div>
                    <div className="line"></div>
                    <div className="info-text">
                        <h3>+25</h3>
                        <span>Anos de Experiência</span>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-svg">
                        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 435.27 512" width="4.5em">
                            <title>support</title>
                            <path d="M473.62,462.82c0-32.18-23.26-54.8-65.49-63.71l-72.36-16.43c-17.76-6-21.15-11.28-21.15-18.87V327.35a100.71,100.71,0,0,0,35.17-32.83h17.69A38.59,38.59,0,0,0,404.68,266h20A45.39,45.39,0,0,0,470,220.67V187.33A45.39,45.39,0,0,0,424.67,142H406v-6C406,61,345,0,270,0H242C167,0,106,61,106,136v6H87.33A45.39,45.39,0,0,0,42,187.33v33.34A45.39,45.39,0,0,0,87.33,266h62.1a100.46,100.46,0,0,0,48.13,61.46,10.23,10.23,0,0,0-.2,2v34.34c0,7.59-3.39,12.86-21.15,18.87l-72.36,16.43C61.62,408,38.36,430.64,38.36,462.82V502a10,10,0,0,0,10,10H342.11a10,10,0,0,0,0-20H58.36V462.82c0-22.37,16.72-37.22,49.69-44.16l.15,0,63.88-14.51,78.78,47.14a10,10,0,0,0,10.27,0l78.78-47.13,63.87,14.5.15,0c33,6.93,49.69,21.79,49.69,44.15V492H423a10,10,0,0,0,0,20h40.65a10,10,0,0,0,10-10ZM406,162h18.67A25.36,25.36,0,0,1,450,187.33v33.34A25.36,25.36,0,0,1,424.67,246H406ZM106,246H87.33A25.36,25.36,0,0,1,62,220.67V187.33A25.36,25.36,0,0,1,87.33,162H106Zm240-67.06h-2.39a77.11,77.11,0,0,1-45.2-14.51,204.34,204.34,0,0,0,29.75-24.61A10,10,0,1,0,314,125.68a183.4,183.4,0,0,1-130.56,54.08H166V140a80.09,80.09,0,0,1,80-80h20a80.09,80.09,0,0,1,80,80Zm21.48,95.58h-7.62c1-2.78,1.93-5.63,2.71-8.52h20.48A18.52,18.52,0,0,1,367.48,274.52ZM146.18,246H126V136A116.13,116.13,0,0,1,242,20h28A116.13,116.13,0,0,1,386,136V246H365.82c.11-2,.18-4,.18-6V140A100.11,100.11,0,0,0,266,40H246A100.11,100.11,0,0,0,146,140V240C146,242,146.07,244,146.18,246ZM166,240V199.76h17.45a203.71,203.71,0,0,0,78.31-15.57q9.45-3.91,18.37-8.69a97,97,0,0,0,63.48,23.44H346V240a79.52,79.52,0,0,1-7.84,34.52h-45a10,10,0,0,0,0,20h31.33A79.79,79.79,0,0,1,266,320H246A80.09,80.09,0,0,1,166,240Zm90,191-59.11-35.36c11.47-6.12,20.47-15.44,20.47-31.85v-28A99.64,99.64,0,0,0,246,340h20a99.85,99.85,0,0,0,28.62-4.18v28c0,16.41,9,25.73,20.48,31.85Z" transform="translate(-38.36)"/><path d="M263.07,277.45a10,10,0,1,0,2.93,7.07A10.07,10.07,0,0,0,263.07,277.45Z" transform="translate(-38.36)"/><path d="M388.72,494.93a10,10,0,1,0,2.93,7.07A10.06,10.06,0,0,0,388.72,494.93Z" transform="translate(-38.36)"/>
                        </svg>
                    </div>
                    <div className="line"></div>
                    <div className="info-text">
                        <h3>24<span> horas</span></h3>
                        <span>Atendimento</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-clients">
            <div className="content-clients">
                <h1>Nossos Clientes</h1>
                <div className="clients-img">
                {ClientsImg.map((item) =>{
                    return(
                        <img src={item.src} alt={item.alt} key={item} />
                    )
                }
                )}
                </div>
            </div>
        </div>
        <div className="orcamento-ads">
            <div className="container-ads">
                <h1>Orçamento</h1>
                <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</p>
                    <Link to="/client">
                        Solicite Já
                    </Link>
            </div>
        </div>
        </>
    );
}