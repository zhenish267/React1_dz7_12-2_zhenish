import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import classes from "./MainPage.module.css";

const MainPage = () => {

    return (
        <div>
            <h2>Students Page</h2>

            <h4>Турнирный-список laliga</h4>
            <ol className={classes.children}>
                <li >Реал Мадрид</li>
                <li >Барселона</li>
                <li >Вили Реал</li>
                <li >ПСЖ</li>
                <li >Фк Дордой</li>
                <li >Ювентус</li>
                <li >Гиик Теч</li>
                <li >Манчестер Юнайтед</li>
            </ol>
        </div>
    )
};

export default MainPage;
