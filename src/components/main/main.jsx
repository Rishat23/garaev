import { Typography } from "@material-tailwind/react";
import React from "react";


const Main = () => {
	return (

		<div>
			<Typography className="mb-4" variant="h1" >Главная</Typography>
			<div className="top">
				Федеральное государственное бюджетное образовательное учреждение высшего образования <br/>
				Уфимский университет науки и технологий
			</div>
			<div className="department">
				Кафедра вычислительной техники и защиты информации
			</div>
			<div className="theme">
				Курсовая работа по дисциплине «Сети и системы передачи информации»<br/>
				на тему:«Анализ технологий беспроводных сетей по стандартам 802.15»
			</div>
			<div className="completed">
					Выполнили: ст. гр. ИБ-328<br/>
					Япаров Р.А.<br/>
					Проверил:<br/>
					Гараев Р.А.
			</div>
			<div className="footer">
				Уфа 2023
			</div>
		</div>
	);
};

export default Main;
